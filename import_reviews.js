import postgres from 'postgres';
import https from 'https';

const SHEET_ID = '1mkobJlasnMVNuxmAGntVntpz7ZSNv-rudq0-kQ2qLxw';
const SHEET_GID = '0';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`;

const sql = postgres('postgresql://postgres.vrbwqsjkfwigdllxxeqq:Teva0725Marin0220@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres');

function fetchCSV() {
  return new Promise((resolve, reject) => {
    https.get(CSV_URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseCSV(csvData) {
  const lines = csvData.trim().split('\n');
  const reviews = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    
    // CSVパース（簡易版）
    const parts = line.split(',');
    const review = {
      date: parts[0]?.trim() || '',
      name: parts[1]?.trim() || '',
      rating: parseInt(parts[2]?.trim()) || 5,
      type: parts[3]?.trim() || 'residential',
      comment: parts[4]?.trim() || '',
      imageUrl: parts[5]?.trim() || null
    };
    
    if (review.name && review.comment) {
      reviews.push(review);
    }
  }
  
  return reviews;
}

(async () => {
  try {
    console.log('Fetching reviews from Google Sheets...');
    const csvData = await fetchCSV();
    const reviews = parseCSV(csvData);
    
    console.log(`Found ${reviews.length} reviews`);
    
    // レビューをDBに投入
    for (const review of reviews) {
      const serviceType = review.type.toLowerCase().includes('業務') ? 'commercial' : 'residential';
      
      await sql`
        INSERT INTO testimonials (
          "customerName",
          "rating",
          "comment",
          "serviceType",
          "imageUrl",
          "source",
          "isPublished",
          "createdAt"
        ) VALUES (
          ${review.name},
          ${review.rating},
          ${review.comment},
          ${serviceType},
          ${review.imageUrl},
          'くらしのマーケット',
          1,
          NOW()
        )
      `;
    }
    
    console.log(`✓ Successfully imported ${reviews.length} reviews`);
    await sql.end();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
})();
