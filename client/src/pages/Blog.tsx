import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/siteData";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

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
          {filteredPosts && filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                          {categories.find(c => c.value === post.category)?.label}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.content}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        {post.location && (
                          <span>📍 {post.location}</span>
                        )}
                        {post.area && (
                          <span>📐 {post.area}㎡</span>
                        )}
                        {post.price && (
                          <span>💰 ¥{post.price.toLocaleString()}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">該当する作業実績がありません</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
