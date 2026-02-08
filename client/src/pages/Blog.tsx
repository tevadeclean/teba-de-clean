import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  
  const { data: blogPosts, isLoading } = trpc.blog.list.useQuery({ category: selectedCategory });

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

      <section className="py-12 md:py-20">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-full">
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
          ) : blogPosts && blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-none shadow-sm bg-muted/20">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">
                          {categories.find(c => c.value === post.category)?.label}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {format(new Date(post.createdAt), "yyyy.MM.dd", { locale: ja })}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {post.content}
                      </p>
                      <div className="flex flex-wrap gap-3 text-[10px] text-muted-foreground font-bold">
                        {post.location && (
                          <span className="flex items-center gap-1">📍 {post.location}</span>
                        )}
                        {post.area && (
                          <span className="flex items-center gap-1">📐 {post.area}㎡</span>
                        )}
                        {post.price && (
                          <span className="flex items-center gap-1 text-primary">💰 ¥{post.price.toLocaleString()}</span>
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
