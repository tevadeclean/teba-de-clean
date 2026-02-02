import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Loader2, ArrowLeft, MapPin, Ruler, DollarSign } from "lucide-react";

export default function BlogDetail() {
  const [, params] = useRoute("/blog/:id");
  const postId = params?.id ? parseInt(params.id) : 0;

  const { data: post, isLoading } = trpc.blog.getById.useQuery({ id: postId });

  const categoryLabels: Record<string, string> = {
    residential_small: "家庭用小規模（〜20㎡）",
    residential_medium: "家庭用中規模（20〜40㎡）",
    residential_large: "家庭用大規模（40㎡〜）",
    commercial_small: "業務用小規模",
    commercial_medium: "業務用中規模",
    commercial_large: "業務用大規模"
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">記事が見つかりません</h2>
          <Link href="/blog">
            <Button>作業実績一覧に戻る</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-accent-foreground py-16 md:py-24">
        <div className="container">
          <Link href="/blog">
            <Button variant="outline" className="mb-6 bg-accent-foreground/10 border-accent-foreground/30 hover:bg-accent-foreground/20 text-accent-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              作業実績一覧に戻る
            </Button>
          </Link>
          <div className="inline-block bg-accent-foreground/20 text-accent-foreground text-sm font-medium px-4 py-2 rounded-full mb-4">
            {categoryLabels[post.category] || post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* 作業情報カード */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {post.location && (
                <Card>
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">施工場所</div>
                    <div className="font-bold">{post.location}</div>
                  </CardContent>
                </Card>
              )}
              
              {post.area && (
                <Card>
                  <CardContent className="p-6 text-center">
                    <Ruler className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">作業面積</div>
                    <div className="font-bold">{post.area}㎡</div>
                  </CardContent>
                </Card>
              )}
              
              {post.price && (
                <Card>
                  <CardContent className="p-6 text-center">
                    <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">施工価格</div>
                    <div className="font-bold text-primary text-xl">¥{post.price.toLocaleString()}</div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* 作業写真 */}
            {post.imageUrl && (
              <div className="mb-8">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* 作業内容 */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">作業内容</h2>
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                    {post.content}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center bg-muted/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">同様の作業をご希望ですか?</h3>
              <p className="text-muted-foreground mb-6">
                お見積もりは無料です。お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    予約する
                  </Button>
                </Link>
                <a href="tel:098-XXX-XXXX">
                  <Button size="lg" variant="outline">
                    電話で相談
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
