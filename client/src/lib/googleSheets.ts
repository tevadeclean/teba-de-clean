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
 * 日付文字列を比較可能な数値に変換する
 * 例: "2025年11月29日" -> 20251129
 */
function parseDateToNumber(dateStr: string): number {
  if (!dateStr) return 0;
  const match = dateStr.match(/(\d+)年(\d+)月(\d+)日/);
  if (match) {
    const year = match[1];
    const month = match[2].padStart(2, '0');
    const day = match[3].padStart(2, '0');
    return parseInt(`${year}${month}${day}`, 10);
  }
  // YYYY/MM/DD 形式などの場合
  const parts = dateStr.split(/[\/\-]/);
  if (parts.length === 3) {
    return parseInt(parts[0] + parts[1].padStart(2, '0') + parts[2].padStart(2, '0'), 10);
  }
  return 0;
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
    
    const testimonials = lines.slice(1).map((line, index) => {
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

    // 日付の新しい順にソート
    return testimonials.sort((a, b) => {
      return parseDateToNumber(b.createdAt) - parseDateToNumber(a.createdAt);
    });
  } catch (error) {
    console.error('Failed to fetch testimonials from Google Sheets:', error);
    return [];
  }
}
