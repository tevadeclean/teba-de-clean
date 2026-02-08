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
 * スプレッドシートのCSV URLからデータを取得してパースする
 * スプレッドシート側で「ウェブに公開」→「カンマ区切り形式(.csv)」を選択して取得したURLを使用します
 */
export async function fetchTestimonialsFromSheet(csvUrl: string): Promise<Testimonial[]> {
  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();
    
    // 簡易的なCSVパース（1行目はヘッダーと想定）
    const lines = csvText.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map((line, index) => {
      const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
      const data: any = {};
      headers.forEach((header, i) => {
        data[header] = values[i];
      });
      
      return {
        id: `sheet-${index}`,
        customerName: data['名前'] || data['name'] || 'お客様',
        rating: parseInt(data['評価'] || data['rating'] || '5', 10),
        createdAt: data['日付'] || data['date'] || '',
        comment: data['コメント'] || data['comment'] || '',
        serviceType: (data['種別'] || data['type']) === '業務用' ? 'commercial' : 'residential'
      };
    });
  } catch (error) {
    console.error('Failed to fetch testimonials from Google Sheets:', error);
    return [];
  }
}
