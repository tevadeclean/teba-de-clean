import postgres from 'postgres';
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
    const sql = postgres(DATABASE_URL);

    // 3. 既存のレビューを削除
    await sql`DELETE FROM testimonials`;
    console.log('Cleared existing testimonials.');

    // 4. データを整形してインポート
    for (const row of rows) {
      const [dateStr, name, ratingStr, typeStr, comment, imageUrl] = row;
      
      const rating = parseInt(ratingStr) || 5;
      
      let createdAt = new Date();
      if (dateStr) {
        const normalizedDate = dateStr.replace(/年/g, '-').replace(/月/g, '-').replace(/日/g, '');
        const parsedDate = new Date(normalizedDate);
        if (!isNaN(parsedDate.getTime())) {
          createdAt = parsedDate;
        }
      }

      // 実際のデータベースカラム名に合わせて挿入
      // author_name, content, rating, created_at, imageUrl, source
      await sql`
        INSERT INTO testimonials (
          author_name, 
          content, 
          rating, 
          created_at, 
          "imageUrl", 
          source
        ) VALUES (
          ${name || 'ゲストユーザー'}, 
          ${comment || ''}, 
          ${rating}, 
          ${createdAt}, 
          ${imageUrl || null}, 
          'くらしのマーケット'
        )
      `;
    }

    console.log(`Successfully imported ${rows.length} reviews.`);
    await sql.end();
    console.log('Synchronization completed successfully.');

  } catch (error) {
    console.error('Error during synchronization:', error);
    process.exit(1);
  }
}

syncReviews();
