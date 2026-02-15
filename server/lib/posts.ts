export interface PostData {
  id: string;
  title: string;
  date: string;
  slug: string;
  category: string;
  thumbnail?: string;
  description?: string;
  contentHtml: string;
}

// 記事データを直接定義（ファイル読み込みを排除）
const posts: PostData[] = [
  {
    id: "sample-post",
    title: "エアコンクリーニングのメリットと頻度",
    date: "2026-02-15",
    slug: "aircon-cleaning-benefits",
    category: "お役立ち情報",
    thumbnail: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800",
    description: "エアコンクリーニングがなぜ必要なのか、そのメリットと適切な頻度について解説します。",
    contentHtml: `
      <h2>エアコンクリーニングの重要性</h2>
      <p>エアコンは、室内の空気を循環させることで快適な空間を提供しますが、使用するにつれて内部にはホコリやカビが蓄積されていきます。</p>
      <h3>クリーニングのメリット</h3>
      <ul>
        <li><strong>健康被害の予防</strong>: カビやホコリを除去することで、アレルギーのリスクを低減します。</li>
        <li><strong>電気代の節約</strong>: エアコンの効率が向上し、無駄な電力消費を抑えることができます。</li>
      </ul>
      <p>テバdeクリーンでは、プロの技術で徹底的に洗浄いたします。</p>
    `
  }
];

export function getSortedPostsData(): Omit<PostData, 'contentHtml'>[] {
  return posts.map(({ contentHtml, ...rest }) => rest).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostData> {
  const post = posts.find(p => p.id === id);
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
}
