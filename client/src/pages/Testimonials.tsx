import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageSquare, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { testimonials as staticTestimonials } from "@/data/siteData";
import { fetchTestimonialsFromSheet, Testimonial } from "@/lib/googleSheets";

// 公開されたスプレッドシートのCSV URL（ユーザーから提供されたらここに差し替える）
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7v_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV_vYV/pub?output=csv"; 
// 注: 上記はプレースホルダーです。ユーザーから提供されたIDを使用して正しいCSV URLを構築します。
const ACTUAL_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1mkobJlasnMVNuxmAGntVntpz7ZSNv-rudq0-kQ2qLxw/gviz/tq?tqx=out:csv";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSheetData() {
      setLoading(true);
      const sheetData = await fetchTestimonialsFromSheet(ACTUAL_SHEET_CSV_URL);
      if (sheetData.length > 0) {
        setTestimonials(sheetData);
      } else {
        setTestimonials(staticTestimonials);
      }
      setLoading(false);
    }
    
    loadSheetData();
  }, []);

  return (
    <div className="min-h-screen bg-muted/30 py-12 md:py-20">
      <div className="container max-w-5xl px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1">
            <MessageSquare className="w-4 h-4 mr-2" />
            お客様の声
          </Badge>
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            たくさんの嬉しいお言葉を<br />いただいています
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            くらしのマーケットや当サイトを通じていただいた、お客様からのリアルな評価とご感想をご紹介します。
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">読み込み中...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.length > 0 ? (
              testimonials.map((t) => (
                <Card key={t.id} className="border-none shadow-md hover:shadow-lg transition-all bg-white overflow-hidden group">
                  <CardContent className="p-6 md:p-8 relative">
                    <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-bold text-foreground">{t.rating}.0</span>
                      </div>
                      <Badge variant="outline" className="text-[10px] text-muted-foreground border-muted-foreground/20">
                        くらしのマーケットから引用
                      </Badge>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 relative z-10">
                      {t.comment}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-muted">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-sm">{t.customerName}</div>
                          <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                            <Badge variant="secondary" className="text-[8px] px-1.5 py-0 h-4">
                              {t.serviceType === 'commercial' ? '業務用' : '家庭用'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {t.createdAt}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-2xl shadow-sm">
                <p className="text-muted-foreground">まだお客様の声がありません</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-primary/10 max-w-2xl">
            <h3 className="text-lg font-bold mb-4">口コミを募集しています</h3>
            <p className="text-sm text-muted-foreground mb-6">
              テバdeクリーンでは、サービス向上に活かすため、ご利用いただいたお客様のご感想をお待ちしております。
            </p>
            <a 
              href="https://curama.jp/aircon-cleaning/wall/SER845341544/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:bg-accent/90 transition-colors"
            >
              くらしのマーケットで口コミを書く
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
