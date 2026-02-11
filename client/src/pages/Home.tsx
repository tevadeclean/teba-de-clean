import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { 
  Sparkles, 
  Shield, 
  Clock, 
  ThumbsUp, 
  CheckCircle2, 
  Star,
  ArrowRight,
  MessageCircle
} from "lucide-react";

export default function Home() {
  const { data: testimonials, isLoading: testimonialsLoading } = trpc.testimonials.list.useQuery();

  const recentTestimonials = testimonials?.slice(0, 3) || [];

  return (
    <div className="w-full overflow-hidden">
      {/* ヒーローセクション */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold mb-6">
              <Sparkles className="mr-2 h-5 w-5" />
              HP・LINE予約限定：防カビ・抗菌コート無料！
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              沖縄のエアコンを<br />
              <span className="text-accent">プロの技術</span>で<br />
              徹底クリーニング
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95">
              家庭用から業務用まで、タヒチアンダンス世界王者の店長が率いるプロチームが、あなたのエアコンを新品同様に蘇らせます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/line">
                <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-lg px-8 py-7 shadow-lg w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  LINEで予約・相談
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white text-lg px-8 py-7 w-full sm:w-auto">
                  予約フォームへ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              テバdeクリーンの<span className="text-primary">サービス</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              家庭用から業務用まで、あらゆるエアコンのクリーニングに対応しています
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/residential">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                      <Sparkles className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">家庭用エアコンクリーニング</h3>
                    <p className="text-muted-foreground mb-4">
                      ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔な空気を取り戻します。
                    </p>
                    <div className="text-primary font-bold text-2xl">
                      ¥8,000〜
                    </div>
                    <div className="text-sm text-primary font-bold mt-1">
                      ※2台目から1,000円引き
                    </div>
                  </div>
                  <div className="flex items-center text-primary font-medium">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/commercial">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">業務用エアコンクリーニング</h3>
                    <p className="text-muted-foreground mb-4">
                      店舗・オフィス・施設の業務用エアコンに対応。複数台の同時施工も可能です。
                    </p>
                    <div className="text-primary font-bold text-2xl">
                      ¥25,000〜
                    </div>
                    <div className="text-sm text-primary font-bold mt-1">
                      ※2台目から10％割引
                    </div>
                  </div>
                  <div className="flex items-center text-primary font-medium">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              テバdeクリーンが<span className="text-accent">選ばれる理由</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "プロの技術",
                description: "経験豊富なスタッフが、最新の機材と技術で徹底洗浄"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "安心保証",
                description: "賠償責任保険加入済み。万が一の際も安心です"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "迅速対応",
                description: "お問い合わせから最短即日対応。お急ぎの方もご相談ください"
              },
              {
                icon: <ThumbsUp className="h-8 w-8" />,
                title: "高評価",
                description: "お客様満足度98%。多くのリピーター様にご利用いただいています"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 作業の流れ */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-primary">作業の流れ</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: "1", title: "お問い合わせ", description: "LINEまたは予約フォームからお気軽にご連絡ください" },
              { step: "2", title: "日程調整", description: "ご希望の日時をお伺いし、訪問日を決定します" },
              { step: "3", title: "現地調査・見積もり", description: "エアコンの状態を確認し、正確なお見積もりを提示します" },
              { step: "4", title: "クリーニング作業", description: "プロの技術で徹底的に分解洗浄。約2〜3時間で完了します" },
              { step: "5", title: "動作確認・お引き渡し", description: "クリーニング後の動作確認を行い、作業完了です" }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-black text-xl shadow-sm">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      {!testimonialsLoading && recentTestimonials.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                <span className="text-primary">お客様の声</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {recentTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-accent text-accent" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {testimonial.comment}
                    </p>
                    <div className="text-sm font-bold text-primary">{testimonial.customerName}様</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/testimonials">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                  お客様の声をもっと見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            まずはお気軽に<br />ご相談ください
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-xl px-12 py-8 shadow-2xl w-full sm:w-auto">
                <MessageCircle className="mr-3 h-8 w-8" />
                LINEで無料相談
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/40 hover:bg-white/20 text-white text-xl px-12 py-8 w-full sm:w-auto">
                予約フォームへ
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-primary-foreground/90 font-bold text-lg">
            ✨ HP・LINE予約限定：防カビ・抗菌コート無料施工中！
          </p>
        </div>
      </section>
    </div>
  );
}
