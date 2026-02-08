/**
 * Googleスプレッドシート（CSV公開形式）から口コミデータを取得するユーティリティ
 */

export interface Testimonial {
  id: string | number;
  customerName: string;
  rating: number;
  comment: string;
  serviceType?: 'residential' | 'commercial';
  createdAt: string;
}

/**
 * CSVの1行をパースする（クォート内のカンマを考慮）
 */
function parseCSVLine(line: string): string[] {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * スプレッドシートのCSV URLからデータを取得してパースする
 */
export async function fetchTestimonialsFromSheet(csvUrl: string): Promise<Testimonial[]> {
  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();
    
    const lines = csvText.split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) return [];

    // 実際のデータの並び順: 日付, 名前, 評価, サービス内容, コメント, (空)
    // 0: 日付, 1: 名前, 2: 評価, 3: サービス内容, 4: コメント
    
    return lines.slice(1).map((line, index) => {
      const values = parseCSVLine(line);
      
      // 評価が空、または数値でない場合は5にする
      let rating = parseInt(values[2], 10);
      if (isNaN(rating)) rating = 5;

      // サービス内容に「業務用」が含まれていれば commercial、そうでなければ residential
      const serviceContent = values[3] || '';
      const serviceType: 'residential' | 'commercial' = serviceContent.includes('業務用') ? 'commercial' : 'residential';

      return {
        id: `sheet-${index}`,
        createdAt: values[0] || '',
        customerName: values[1] || 'お客様',
        rating: rating,
        comment: values[4] || '',
        serviceType: serviceType
      };
    });
  } catch (error) {
    console.error('Failed to fetch testimonials from Google Sheets:', error);
    return [];
  }
}
