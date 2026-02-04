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
  Phone,
  UserCheck,
  Heart,
  Award,
  Gift,
  Baby,
  ShieldCheck,
  Info
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { data: testimonials, isLoading: testimonialsLoading } = trpc.testimonials.list.useQuery();
  const { data: blogPosts, isLoading: blogLoading } = trpc.blog.list.useQuery();

  const recentTestimonials = testimonials?.slice(0, 3) || [];
  const recentBlogPosts = blogPosts?.slice(0, 3) || [];

  const strengths = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "累計900台以上の施工実績",
      description: "豊富な経験に裏打ちされた確かな技術で、どんな汚れも逃しません。"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "オーナー自らが伺う安心対応",
      description: "外注なし！責任を持ってオーナー本人が最初から最後まで丁寧に作業いたします。"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "娘を持つパパだから女性も安心",
      description: "小さなお子様がいるご家庭や女性の一人暮らしでも、安心してご依頼いただけます。"
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "防カビ・抗菌コートがHP限定無料",
      description: "公式サイトからご予約いただいた方全員に、通常有料の防カビコートを無料で施工します。"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "大手洗浄店で修行した確かな技術",
      description: "業界最大手での厳しい修行を経て習得した、最高水準の洗浄技術を提供します。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6bS0yMCAwYzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container relative py-24 md:py-40">
          <div className="max-w-4xl">
            <div className="inline-flex flex-col mb-8">
              <Badge className="bg-accent text-accent-foreground px-6 py-2 text-base font-black animate-pulse shadow-lg shadow-accent/20 mb-2">
                <Sparkles className="w-5 h-5 mr-2 inline" />
                公式サイトからの予約が一番おトクです！
              </Badge>
              <p className="text-sm font-bold text-accent-foreground/80 ml-1">
                ※他サイト経由より、安い料金でご案内しています。
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent-foreground/90 tracking-tight">
              家族の元気を空気で守る！
            </h2>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
              沖縄のエアコンを<br />
              <span className="text-accent">プロの技術</span>で<br />
              徹底クリーニング
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed max-w-2xl">
              南大東島出身、一児のパパ店長が直接お伺い。世界一のダンサーとしてのこだわりを、あなたのエアコンに。
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-8 font-black shadow-2xl shadow-accent/30">
                  今すぐ予約する
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <a href="tel:098-XXX-XXXX">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground text-xl px-12 py-8">
                  <Phone className="mr-2 h-6 w-6" />
                  電話で相談
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5つの強み */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
              テバdeクリーンが<span className="text-primary">選ばれる5つの理由</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              お客様に安心と満足をお届けするための、私たちのこだわりです
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {strengths.map((strength, index) => (
              <Card key={index} className={`border-none shadow-xl transition-all duration-500 hover:-translate-y-2 ${index === 3 ? "bg-accent/5 ring-2 ring-accent/20" : "bg-muted/20"}`}>
                <CardContent className="p-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${index === 3 ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20" : "bg-primary text-primary-foreground shadow-lg shadow-primary/20"}`}>
                    {strength.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{strength.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 店長ストーリー要約 */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 aspect-square lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Users className="h-32 w-32 text-muted-foreground/30" />
            </div>
            <div className="lg:w-1/2 p-12 md:p-20">
              <Badge className="mb-6 bg-primary/10 text-primary px-4 py-1 text-sm font-bold">
                店長ストーリー
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                「きれいな空気で家族を元気にしたい」<br />
                パパ店長の想い
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                南大東島出身、3歳の娘を持つパパです。娘の誕生を機に「家族の健康を守る空間づくり」を志し、大手清掃店での修行を経て独立しました。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                実はタヒチアンダンサー・ファイヤーナイフダンサーとしても活動しており、世界一のタイトルも獲得しています。そこで培った「集中力・丁寧さ・美しさへのこだわり」をクリーニングの細部に注いでいます。
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg" className="font-bold px-8 py-6">
                  店長プロフィールを詳しく見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
              <span className="text-primary">サービスメニュー</span>
            </h2>
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-accent font-black text-xl mb-1">公式サイト（このページ）からのご予約が一番おトクです！</p>
              <p className="text-muted-foreground font-bold">他サイト経由より、安い料金でご案内しています。</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Link href="/residential">
              <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-none shadow-xl relative overflow-hidden bg-white">
                <div className="absolute top-6 right-6">
                  <Badge className="bg-accent text-accent-foreground font-black px-4 py-1 text-sm shadow-lg">公式サイト最安値</Badge>
                </div>
                <CardContent className="p-12">
                  <div className="mb-8">
                    <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
                      <Sparkles className="h-10 w-10 text-secondary-foreground" />
                    </div>
                    <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight">家庭用エアコン</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔な空気を取り戻します。
                    </p>
                    <div className="flex items-baseline gap-2">
                      <div className="text-primary font-black text-4xl">¥8,000〜</div>
                      <div className="text-muted-foreground font-bold">/ 台</div>
                    </div>
                    <div className="text-accent text-lg font-black mt-2">
                      2台目以降 ¥1,000引き！
                    </div>
                  </div>
                  <div className="flex items-center text-primary font-black text-lg mt-10">
                    詳しく見る
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/commercial">
              <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-none shadow-xl relative overflow-hidden bg-white">
                <div className="absolute top-6 right-6">
                  <Badge className="bg-accent text-accent-foreground font-black px-4 py-1 text-sm shadow-lg">公式サイト最安値</Badge>
                </div>
                <CardContent className="p-12">
                  <div className="mb-8">
                    <div className="w-20 h-20 rounded-3xl bg-accent flex items-center justify-center mb-8 shadow-lg shadow-accent/20">
                      <ShieldCheck className="h-10 w-10 text-accent-foreground" />
                    </div>
                    <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors tracking-tight">業務用エアコン</h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      店舗・オフィス・施設の業務用エアコンに対応。複数台の同時施工も可能です。
                    </p>
                    <div className="flex items-baseline gap-2">
                      <div className="text-primary font-black text-4xl">¥25,000〜</div>
                      <div className="text-muted-foreground font-bold">/ 台</div>
                    </div>
                    <div className="text-accent text-lg font-black mt-2">
                      2台目以降 10%引き！
                    </div>
                  </div>
                  <div className="flex items-center text-primary font-black text-lg mt-10">
                    詳しく見る
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 作業の流れ */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
              <span className="text-primary">作業の流れ</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { step: "1", title: "お問い合わせ", description: "お電話・LINE・予約フォームからお気軽にご連絡ください" },
              { step: "2", title: "日程調整", description: "ご希望の日時をお伺いし、訪問日を決定します" },
              { step: "3", title: "現地調査・見積もり", description: "エアコンの状態を確認し、正確なお見積もりを提示します" },
              { step: "4", title: "クリーニング作業", description: "プロの技術で徹底的に分解洗浄。約2〜3時間で完了します" },
              { step: "5", title: "動作確認・お引き渡し", description: "クリーニング後の動作確認を行い、作業完了です" }
            ].map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground font-black text-2xl shadow-lg shadow-accent/20">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      {!testimonialsLoading && recentTestimonials.length > 0 && (
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                <span className="text-primary">お客様の声</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {recentTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-none shadow-xl bg-muted/20">
                  <CardContent className="p-10">
                    <div className="flex items-center gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${
                            i < testimonial.rating ? "fill-accent text-accent" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">
                      "{testimonial.comment}"
                    </p>
                    <div className="text-lg font-black">{testimonial.customerName}様</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/testimonials">
                <Button variant="outline" size="lg" className="font-bold px-10 py-8 text-lg">
                  お客様の声をもっと見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 md:py-48 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6bS0yMCAwYzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container relative text-center">
          <Badge className="mb-8 bg-accent text-accent-foreground px-6 py-2 text-lg font-black animate-bounce shadow-2xl shadow-accent/50">
            公式サイトからの予約が一番おトクです！
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tighter">
            エアコンクリーニングのご予約は<br />
            <span className="text-accent">今すぐ</span>お気軽に
          </h2>
          <p className="text-xl md:text-2xl mb-16 opacity-95 max-w-3xl mx-auto leading-relaxed">
            公式サイト（このページ）からのご予約が一番おトクです！<br />
            他サイト経由より、安い料金でご案内しています。<br />
            さらに防カビコートも無料！お電話、LINE、予約フォームからお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-2xl px-16 py-10 font-black shadow-2xl shadow-accent/40">
                予約フォームへ
              </Button>
            </Link>
            <Link href="/line">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground text-2xl px-16 py-10 font-black">
                LINEで予約
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
