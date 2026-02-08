/**
 * Googleスプレッドシート（CSV公開形式）から口コミデータおよびブログデータを取得するユーティリティ
 */

export interface Testimonial {
  id: string | number;
  customerName: string;
  rating: number;
  comment: string;
  serviceType?: 'residential' | 'commercial';
  createdAt: string;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  category: string;
  location: string;
  price: string;
  content: string;
  images: string[];
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
  const parts = dateStr.split(/[\/\-]/);
  if (parts.length === 3) {
    return parseInt(parts[0] + parts[1].padStart(2, '0') + parts[2].padStart(2, '0'), 10);
  }
  return 0;
}

/**
 * GoogleドライブのURLを直接表示可能なURLに変換する
 */
export const formatImageUrl = (url: string): string => {
  if (!url) return "";
  const trimmedUrl = url.trim();
  if (trimmedUrl.includes("drive.google.com")) {
    const idMatch = trimmedUrl.match(/[-\w]{25,}/);
    if (idMatch) return `https://lh3.googleusercontent.com/d/${idMatch[0]}`;
  }
  return trimmedUrl;
};

/**
 * 口コミデータを取得する
 */
export async function fetchTestimonialsFromSheet(csvUrl: string): Promise<Testimonial[]> {
  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();
    const lines = csvText.split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) return [];

    const testimonials = lines.slice(1).map((line, index) => {
      const values = parseCSVLine(line);
      let rating = parseInt(values[2], 10);
      if (isNaN(rating)) rating = 5;
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

    return testimonials.sort((a, b) => parseDateToNumber(b.createdAt) - parseDateToNumber(a.createdAt));
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
    return [];
  }
}

/**
 * ブログデータを取得する
 */
export async function fetchBlogPostsFromSheet(csvUrl: string): Promise<BlogPost[]> {
  if (!csvUrl) return [];
  try {
    const response = await fetch(csvUrl);
    const csvText = await response.text();
    const lines = csvText.split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) return [];

    const posts = lines.slice(1).map((line, index) => {
      const values = parseCSVLine(line);
      // 列構成: 0:日付, 1:タイトル, 2:カテゴリ, 3:場所, 4:料金, 5:本文, 6-10:画像URL
      const images = [
        formatImageUrl(values[6]),
        formatImageUrl(values[7]),
        formatImageUrl(values[8]),
        formatImageUrl(values[9]),
        formatImageUrl(values[10])
      ].filter(url => url);

      return {
        id: (lines.length - index).toString(),
        date: values[0] || '',
        title: values[1] || '',
        category: values[2] || '作業実績',
        location: values[3] || '',
        price: values[4] || '',
        content: values[5] || '',
        images: images
      };
    });

    return posts.filter(p => p.title).sort((a, b) => parseDateToNumber(b.date) - parseDateToNumber(a.date));
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return [];
  }
}
