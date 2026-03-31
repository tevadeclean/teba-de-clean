import postgres from 'postgres';

const DATABASE_URL = "postgresql://postgres.vrbwqsjkfwigdllxxeqq:Teva0725Marin0220@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres";

async function checkColumns() {
  const sql = postgres(DATABASE_URL);
  try {
    const columns = await sql`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'testimonials'
    `;
    console.log('Columns in testimonials table:');
    console.table(columns);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sql.end();
  }
}

checkColumns();
