import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, MapPin, Ruler, DollarSign, Calendar } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  // 本文中の [画像1], [画像2] などのタグを実際の画像要素に置き換える
  const renderContent = (content: string, images: string[] = []) => {
    if (!content) return null;
    
    const parts = content.split(/(\[画像\d+\])/g);
    return parts.map((part, index) => {
      const match = part.match(/\[画像(\d+)\]/);
      if (match) {
        const imageIndex = parseInt(match[1]) - 1;
        const imageUrl = images[imageIndex];
        if (imageUrl) {
          return (
            <div key={index} className="my-8">
              <img 
                src={imageUrl} 
                alt={`作業写真 ${imageIndex + 1}`} 
                className="w-full rounded-2xl shadow-lg border-4 border-white"
              />
              <p className="text-center text-[10px] font-bold text-muted-foreground mt-2">作業写真 {imageIndex + 1}</p>
            </div>
          );
        }
        return null;
      }
      return <p key={index} className="whitespace-pre-wrap mb-4 leading-relaxed">{part}</p>;
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">記事が見つかりません</h2>
            <Link href="/blog">
              <Button>作業実績一覧に戻る</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* ヒーロー */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-12 md:py-20">
          <div className="container max-w-5xl">
            <Link href="/blog">
              <Button variant="outline" className="mb-6 bg-white/10 border-white/30 hover:bg-white/20 text-white border-none">
                <ArrowLeft className="mr-2 h-4 w-4" />
                作業実績一覧に戻る
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                {categoryLabels[post.category] || post.category}
              </div>
              <div className="flex items-center gap-1 text-xs opacity-80">
                <Calendar className="w-3 h-3" />
                {format(new Date(post.createdAt), "yyyy年MM月dd日", { locale: ja })}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              {post.title}
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container max-w-5xl">
            <div className="max-w-4xl mx-auto">
              {/* メイン画像 */}
              {post.imageUrl && (
                <div className="mb-10 rounded-3xl overflow-hidden shadow-xl">
                  <img src={post.imageUrl} alt="" className="w-full h-auto" />
                </div>
              )}

              {/* 作業情報カード */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {post.location && (
                  <Card className="border-none shadow-sm bg-muted/20">
                    <CardContent className="p-6 text-center">
                      <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-[10px] text-muted-foreground mb-1 font-bold">施工場所</div>
                      <div className="font-bold text-sm">{post.location}</div>
                    </CardContent>
                  </Card>
                )}
                
                {post.area && (
                  <Card className="border-none shadow-sm bg-muted/20">
                    <CardContent className="p-6 text-center">
                      <Ruler className="h-6 w-6 text-accent mx-auto mb-2" />
                      <div className="text-[10px] text-muted-foreground mb-1 font-bold">作業面積</div>
                      <div className="font-bold text-sm">{post.area}㎡</div>
                    </CardContent>
                  </Card>
                )}
                
                {post.price && (
                  <Card className="border-none shadow-sm bg-primary/5 ring-1 ring-primary/10">
                    <CardContent className="p-6 text-center">
                      <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-[10px] text-muted-foreground mb-1 font-bold">施工価格</div>
                      <div className="font-bold text-primary text-lg">¥{post.price.toLocaleString()}</div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* 作業内容 */}
              <div className="mb-12">
                <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-primary rounded-full"></div>
                  作業内容
                </h2>
                <div className="prose prose-blue max-w-none">
                  <div className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {renderContent(post.content, post.images as string[])}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-muted/30 rounded-3xl p-8 md:p-12 border border-muted">
                <h3 className="text-xl md:text-2xl font-black mb-4">同様の作業をご希望ですか?</h3>
                <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
                  お見積もりは無料です。沖縄県内どこでもお伺いします。お気軽にお問い合わせください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/booking">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black px-10 py-6 rounded-full">
                      予約する
                    </Button>
                  </Link>
                  <a href="tel:09059424412">
                    <Button size="lg" variant="outline" className="bg-white font-black px-10 py-6 rounded-full">
                      電話で相談
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
