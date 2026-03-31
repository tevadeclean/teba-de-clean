import postgres from 'postgres';

const DATABASE_URL = "postgresql://postgres.vrbwqsjkfwigdllxxeqq:Teva0725Marin0220@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres";

async function checkData() {
  const sql = postgres(DATABASE_URL);
  try {
    const results = await sql`
      SELECT id, author_name, rating, is_published, source 
      FROM testimonials 
      LIMIT 10
    `;
    console.log('Current testimonials in DB:');
    console.table(results);
    
    const count = await sql`SELECT count(*) FROM testimonials`;
    console.log('Total count:', count[0].count);
    
    const columns = await sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'testimonials'
    `;
    console.log('All columns:');
    console.log(columns.map(c => c.column_name).join(', '));
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sql.end();
  }
}

checkData();
