import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Loader2 } from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  
  const { data: blogPosts, isLoading } = trpc.blog.list.useQuery({ 
    category: selectedCategory 
  });

  const categories = [
    { value: undefined, label: "すべて" },
    { value: "residential_small", label: "家庭用小規模（〜20㎡）" },
    { value: "residential_medium", label: "家庭用中規模（20〜40㎡）" },
    { value: "residential_large", label: "家庭用大規模（40㎡〜）" },
    { value: "commercial_small", label: "業務用小規模" },
    { value: "commercial_medium", label: "業務用中規模" },
    { value: "commercial_large", label: "業務用大規模" }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            作業実績
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95">
            これまでの施工事例をご紹介します。料金や作業内容の参考にしてください。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* カテゴリフィルター */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.label}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={selectedCategory === category.value ? "bg-primary" : ""}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* ブログ一覧 */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : blogPosts && blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group hover:shadow-xl transition-all cursor-pointer h-full">
                    <CardContent className="p-0">
                      {post.imageUrl && (
                        <div className="aspect-video bg-muted overflow-hidden">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
                          {categories.find(c => c.value === post.category)?.label || post.category}
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          {post.location && (
                            <div>📍 {post.location}</div>
                          )}
                          {post.area && (
                            <div>📐 作業面積: {post.area}㎡</div>
                          )}
                          {post.price && (
                            <div className="text-primary font-bold text-base">
                              💰 施工価格: ¥{post.price.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                {selectedCategory 
                  ? "このカテゴリの作業実績はまだありません" 
                  : "作業実績がまだ登録されていません"}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
