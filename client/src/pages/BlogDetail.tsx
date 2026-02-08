import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, CreditCard } from "lucide-react";
import { fetchBlogPostsFromSheet, BlogPost } from "@/lib/googleSheets";
import { BLOG_SHEET_CSV_URL } from "@/const";
import { contactInfo } from "@/data/siteData";

export default function BlogDetail() {
  const [, params] = useRoute("/blog/:id");
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        if (BLOG_SHEET_CSV_URL.includes("_L_L_L_")) {
          setLoading(false);
          return;
        }
        const posts = await fetchBlogPostsFromSheet(BLOG_SHEET_CSV_URL);
        const found = posts.find(p => p.id === params?.id);
        setPost(found || null);
      } catch (error) {
        console.error("Failed to load blog post:", error);
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [params?.id]);

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
                className="w-full rounded-3xl shadow-lg border-4 border-white"
              />
              <p className="text-center text-[10px] font-bold text-gray-400 mt-2">作業写真 {imageIndex + 1}</p>
            </div>
          );
        }
        return null;
      }
      return <p key={index} className="whitespace-pre-wrap mb-4 leading-relaxed text-gray-700">{part}</p>;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">記事が見つかりません</h2>
          <Link href="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">作業実績一覧に戻る</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* ヒーロー */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white py-12 md:py-20">
          <div className="container max-w-5xl">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/10 border-none rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                作業実績一覧に戻る
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-block bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full">
                {post.category}
              </div>
              <div className="flex items-center gap-1 text-xs font-bold opacity-80">
                <Calendar className="w-3 h-3" />
                {post.date}
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
              {/* メイン画像（本文に[画像1]がない場合のみ表示） */}
              {post.images[0] && !post.content.includes("[画像1]") && (
                <div className="mb-10 rounded-[2rem] overflow-hidden shadow-xl">
                  <img src={post.images[0]} alt="" className="w-full h-auto" />
                </div>
              )}

              {/* 作業情報カード */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {post.location && (
                  <Card className="border-none shadow-sm bg-gray-50 rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <MapPin className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                      <div className="text-[10px] text-gray-400 mb-1 font-black uppercase tracking-wider">施工場所</div>
                      <div className="font-black text-gray-700">{post.location}</div>
                    </CardContent>
                  </Card>
                )}
                
                {post.price && (
                  <Card className="border-none shadow-sm bg-blue-50 ring-1 ring-blue-100 rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <CreditCard className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-[10px] text-blue-400 mb-1 font-black uppercase tracking-wider">参考料金</div>
                      <div className="font-black text-blue-600 text-xl">{post.price}</div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* 作業内容 */}
              <div className="mb-12">
                <h2 className="text-2xl font-black mb-8 flex items-center gap-3 text-gray-900">
                  <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                  作業内容
                </h2>
                <div className="prose prose-blue max-w-none">
                  <div className="text-gray-700 leading-loose text-base md:text-lg">
                    {renderContent(post.content, post.images)}
                  </div>
                </div>
              </div>

              {/* 本文で指定されなかった画像を表示 */}
              <div className="mt-12 grid gap-8">
                {post.images.map((img, idx) => {
                  if (!post.content.includes(`[画像${idx + 1}]`) && (idx > 0 || post.content.includes("[画像1]"))) {
                    return (
                      <div key={idx} className="rounded-3xl overflow-hidden shadow-lg">
                        <img src={img} alt={`作業写真 ${idx + 1}`} className="w-full h-auto" />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* CTA */}
              <div className="text-center bg-blue-600 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl shadow-blue-200 mt-20">
                <h3 className="text-2xl md:text-3xl font-black mb-6">エアコンの汚れ、気になりませんか？</h3>
                <p className="text-base opacity-90 mb-10 max-w-md mx-auto font-bold">
                  沖縄の気候に合わせた丁寧な洗浄で、空気をリフレッシュします。お見積もりは無料です。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/booking">
                    <Button size="lg" className="bg-white hover:bg-blue-50 text-blue-600 font-black px-12 py-7 rounded-full text-lg shadow-lg">
                      料金表・予約
                    </Button>
                  </Link>
                  <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-black px-12 py-7 rounded-full text-lg">
                      LINEで相談
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
