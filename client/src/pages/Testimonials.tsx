import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Loader2 } from "lucide-react";

export default function Testimonials() {
  // tRPCの不具合を回避するため、直接APIからデータを取得するように変更
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        console.log("Fetching testimonials from direct API...");
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Fetched ${data.length} testimonials.`);
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-accent-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">お客様の声</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            テバdeクリーンをご利用いただいたお客様からの評価とご感想をご紹介します
          </p>
        </div>
      </section>

      {/* お客様の声一覧 */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-accent mb-4" />
              <p className="text-muted-foreground">お客様の声を読み込んでいます...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-destructive mb-4">データの読み込みに失敗しました。</p>
              <p className="text-sm text-muted-foreground">
                エラー内容: {error instanceof Error ? error.message : "不明なエラー"}
              </p>
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < (testimonial.rating || 5)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-wrap">
                      {(testimonial as any).content}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t mt-auto">
                      <div className="font-medium">{(testimonial as any).author_name || "ゲストユーザー"}様</div>
                      <div className="text-xs text-muted-foreground flex flex-col items-end gap-1">
                        <span>{testimonial.serviceType === "commercial" ? "業務用" : "家庭用"}</span>
                        {(testimonial as any).source && (
                          <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-[10px] font-bold">
                            {(testimonial as any).source}から引用
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">まだお客様の声が登録されていません</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
