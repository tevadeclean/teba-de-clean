import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users, ArrowRight, Sparkles, ShieldCheck, Baby } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーロー - コンパクト化 */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-12 md:py-20">
        <div className="container max-w-5xl">
          <Badge className="mb-4 bg-accent text-accent-foreground px-3 py-0.5 text-xs font-bold">
            家族の元気を空気で守る！
          </Badge>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            店長プロフィール
          </h1>
          <p className="text-base md:text-lg max-w-2xl opacity-90 leading-relaxed">
            南大東島出身、一児のパパ。世界一のダンサーとしてのこだわりを、エアコンクリーニングに注いでいます。
          </p>
        </div>
      </section>

      {/* 店長ストーリー - コンパクト化 */}
      <section className="py-12 md:py-20">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
            <div className="relative">
              <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <Users className="h-24 w-24 text-muted-foreground/30" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-5 rounded-xl shadow-lg border border-primary/10 hidden md:block max-w-[240px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="font-black text-sm">プロのこだわり</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  タヒチアンダンス・ファイヤーナイフダンスで世界一を獲得。その集中力をクリーニングに。
                </p>
              </div>
            </div>
            
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
                <Baby className="w-3 h-3" />
                一児のパパ店長
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-6 leading-tight">
                「家族の健康を守る」<br />
                それが私の原点です。
              </h2>
              
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  南大東島で生まれ育ち、現在は3歳の娘を持つパパです。娘が生まれたことをきっかけに、<strong className="text-foreground font-bold">「家族の健康を守る空間づくり」</strong>について深く考えるようになりました。
                </p>
                <p>
                  沖縄の高温多湿な環境では、エアコンのカビや汚れは避けられません。しかし、それは大切な家族の健康に直結します。「きれいな空気で家族を元気にしたい」という想いから、大手清掃店での厳しい修行を経て、独立いたしました。
                </p>
                <p>
                  実は、私はタヒチアンダンサー・ファイヤーナイフダンサーとしても活動しており、世界一のタイトルも獲得しています。踊りを通して磨いてきた<strong className="text-foreground font-bold">「集中力・丁寧さ・美しさへのこだわり」</strong>は、クリーニングの細部にも活かされています。
                </p>
                <p>
                  「お客様の大切な空間を預かる」という強い意識を持って、オーナーである私が一台一台、心を込めて作業させていただきます。
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-xl border border-primary/5">
                  <div className="text-2xl font-black text-primary mb-1">900+</div>
                  <div className="text-[10px] font-bold text-muted-foreground">累計施工台数</div>
                </div>
                <div className="bg-muted/30 p-4 rounded-xl border border-primary/5">
                  <div className="text-2xl font-black text-accent mb-1">World No.1</div>
                  <div className="text-[10px] font-bold text-muted-foreground">ダンス世界大会実績</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3つのこだわり - コンパクト化 */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "パパならではの安心感",
                description: "娘を持つ親として、お子様や女性の一人暮らしでも安心して任せていただける丁寧な対応を徹底しています。"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "美しさへの執念",
                description: "ダンサーとして培った「美しさ」へのこだわり。見えない部分の汚れまで、徹底的に磨き上げます。"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "確かな技術力",
                description: "大手清掃店での修行経験。最新機種から古い機種まで、オーナー本人が責任を持って対応いたします。"
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md bg-white hover:shadow-lg transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - コンパクト化 */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground px-3 py-0.5 text-xs font-bold">
            公式サイト予約が一番おトクです！
          </Badge>
          <h2 className="text-2xl md:text-3xl font-black mb-8">
            店長が直接お伺いします。<br />
            <span className="text-primary">安心してお任せください。</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black px-10 py-6 text-lg rounded-full shadow-lg">
                予約フォームへ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg rounded-full">
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
