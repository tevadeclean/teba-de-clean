export interface PostData {
  id: string;
  title: string;
  date: string;
  slug: string;
  category: string;
  imageUrl?: string; // thumbnail を imageUrl に変更
  description?: string;
  contentHtml: string;
  location?: string; // 追加
  area?: number; // 追加
  price?: number; // 追加
}

// 外部ライブラリを一切使わず、データを直接定義
const posts: PostData[] = [
  {
    id: "sample-post",
    title: "エアコンクリーニングのメリットと頻度",
    date: "2026-02-15",
    slug: "aircon-cleaning-benefits",
    category: "お役立ち情報",
    imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800", // thumbnail を imageUrl に変更
    description: "エアコンクリーニングがなぜ必要なのか、そのメリットと適切な頻度について解説します。",
    contentHtml: `
      <div class="prose prose-blue max-w-none">
        <h2 class="text-2xl font-bold mb-4">エアコンクリーニングの重要性</h2>
        <p class="mb-4">エアコンは、室内の空気を循環させることで快適な空間を提供しますが、使用するにつれて内部にはホコリやカビが蓄積されていきます。</p>
        <h3 class="text-xl font-bold mb-2">クリーニングのメリット</h3>
        <ul class="list-disc pl-5 mb-4">
          <li><strong>健康被害の予防</strong>: カビやホコリを除去することで、アレルギーのリスクを低減します。</li>
          <li><strong>電気代の節約</strong>: エアコンの効率が向上し、無駄な電力消費を抑えることができます。</li>
        </ul>
        <p>テバdeクリーンでは、プロの技術で徹底的に洗浄いたします。</p>
      </div>
    `,
    location: "東京都", // ダミーデータ追加
    area: 25, // ダミーデータ追加
    price: 12000, // ダミーデータ追加
  },
  {
    id: "sample-post-2",
    title: "水回りの頑固な汚れを落とすコツ",
    date: "2026-03-01",
    slug: "water-area-cleaning-tips",
    category: "お役立ち情報",
    imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800",
    description: "浴室やキッチンなど、水回りの頑固な汚れを効果的に落とすためのプロのコツをご紹介します。",
    contentHtml: `
      <div class="prose prose-blue max-w-none">
        <h2 class="text-2xl font-bold mb-4">水回りの汚れ対策</h2>
        <p class="mb-4">水回りは日常的に使用するため、水垢や石鹸カス、カビなど様々な汚れが蓄積しやすい場所です。</p>
        <h3 class="text-xl font-bold mb-2">効果的な掃除方法</h3>
        <ul class="list-disc pl-5 mb-4">
          <li><strong>酸性洗剤の活用</strong>: 水垢には酸性洗剤が効果的です。</li>
          <li><strong>カビ取り剤の適切な使用</strong>: カビには塩素系漂白剤が有効ですが、換気を十分に行いましょう。</li>
        </ul>
        <p>テバdeクリーンでは、それぞれの汚れに合わせた最適な方法でクリーニングを行います。</p>
      </div>
    `,
    location: "神奈川県",
    area: 15,
    price: 8000,
  }
];

export function getSortedPostsData(category?: string): Omit<PostData, 'contentHtml'>[] {
  const filteredPosts = category
    ? posts.filter(post => post.category === category)
    : posts;
  return filteredPosts.map(({ contentHtml, ...rest }) => rest).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostData> {
  const post = posts.find(p => p.id === id);
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
}
