import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchBlogPostsFromSheet, BlogPost } from "@/lib/googleSheets";
import { BLOG_SHEET_CSV_URL } from "@/const";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        // BLOG_SHEET_CSV_URLがプレースホルダーの場合は読み込まない
        if (BLOG_SHEET_CSV_URL.includes("_L_L_L_")) {
          setLoading(false);
          return;
        }
        const data = await fetchBlogPostsFromSheet(BLOG_SHEET_CSV_URL);
        setPosts(data || []);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const categories = [
    { value: undefined, label: "すべて" },
    { value: "作業実績", label: "作業実績" },
    { value: "お掃除のコツ", label: "お掃除のコツ" },
    { value: "お知らせ", label: "お知らせ" },
    { value: "店長の日常", label: "店長の日常" }
  ];

  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            作業実績・ブログ
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95">
            テバdeクリーンの日々の作業風景や、エアコン掃除のコツをお届けします。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container">
          {/* カテゴリフィルター */}
          <div className="mb-12 overflow-x-auto pb-2">
            <div className="flex flex-nowrap md:flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.label}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`rounded-full px-6 font-bold transition-all ${
                    selectedCategory === category.value 
                      ? "bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md" 
                      : "bg-white hover:bg-blue-50 text-gray-600 border-gray-200"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* ブログ一覧 */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-full rounded-3xl overflow-hidden border-none shadow-sm">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-6">
                    <Skeleton className="h-4 w-24 mb-4" />
                    <Skeleton className="h-6 w-full mb-3" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <div className="flex gap-4">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full border-none shadow-sm bg-white rounded-3xl overflow-hidden">
                    {post.images[0] && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.images[0]} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-black mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                        {post.content.replace(/\[画像\d+\]/g, "")}
                      </p>
                      <div className="flex flex-wrap gap-4 text-[11px] text-gray-400 font-bold mt-auto pt-4 border-t border-gray-50">
                        {post.location && (
                          <span className="flex items-center gap-1">📍 {post.location}</span>
                        )}
                        {post.price && (
                          <span className="flex items-center gap-1 text-blue-600">💰 {post.price}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
              <p className="text-gray-400 font-bold">該当する記事がありません</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
