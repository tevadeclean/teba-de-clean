import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './drizzle/schema';
import axios from 'axios';

// 設定
const API_KEY = "AIzaSyAEwvUyxV6ax99jLu-VSEn8vySiK67-p9I";
const SPREADSHEET_ID = "1mkobJlasnMVNuxmAGntVntpz7ZSNv-rudq0-kQ2qLxw";
const RANGE = "A2:F100"; // ヘッダーを除いたデータ範囲
const DATABASE_URL = "postgresql://postgres.vrbwqsjkfwigdllxxeqq:Teva0725Marin0220@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres";

async function syncReviews() {
  console.log('Starting review synchronization...');

  // 1. Google Sheets APIからデータを取得
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  
  try {
    const response = await axios.get(url);
    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      console.log('No data found in spreadsheet.');
      return;
    }

    console.log(`Found ${rows.length} reviews in spreadsheet.`);

    // 2. データベース接続
    const client = postgres(DATABASE_URL);
    const db = drizzle(client, { schema });

    // 3. 既存のレビューを削除（重複を避けるため、または全件更新のため）
    // 注意: 本番環境では慎重に行う必要がありますが、今回は初期インポートなので全件入れ替えとします
    await db.delete(schema.testimonials);
    console.log('Cleared existing testimonials.');

    // 4. データを整形してインポート
    const testimonialsToInsert = rows.map((row: any[]) => {
      // row: ['日付', '名前', '評価', '種類', 'コメント', '画像URL']
      const [dateStr, name, ratingStr, typeStr, comment, imageUrl] = row;
      
      // 評価を数値に変換
      const rating = parseInt(ratingStr) || 5;
      
      // サービスタイプをEnumに合わせる
      let serviceType: "residential" | "commercial" = "residential";
      if (typeStr && typeStr.includes('業務用')) {
        serviceType = "commercial";
      }

      // 日付のパース（簡易的）
      let createdAt = new Date();
      if (dateStr) {
        // "2024年12月14日" -> "2024-12-14"
        const normalizedDate = dateStr.replace(/年|月/g, '-').replace(/日/g, '');
        const parsedDate = new Date(normalizedDate);
        if (!isNaN(parsedDate.getTime())) {
          createdAt = parsedDate;
        }
      }

      return {
        customerName: name || 'ゲストユーザー',
        rating: rating,
        comment: comment || '',
        serviceType: serviceType,
        imageUrl: imageUrl || null,
        source: 'くらしのマーケット',
        isPublished: 1,
        createdAt: createdAt,
        updatedAt: new Date()
      };
    });

    // 5. データベースに挿入
    if (testimonialsToInsert.length > 0) {
      await db.insert(schema.testimonials).values(testimonialsToInsert);
      console.log(`Successfully imported ${testimonialsToInsert.length} reviews.`);
    }

    await client.end();
    console.log('Synchronization completed successfully.');

  } catch (error) {
    console.error('Error during synchronization:', error);
    process.exit(1);
  }
}

syncReviews();
