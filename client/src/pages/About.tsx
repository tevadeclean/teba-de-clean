import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users, ArrowRight, Sparkles, ShieldCheck, Baby } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
            家族の元気を空気で守る！
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            店長プロフィール
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90 leading-relaxed">
            南大東島出身、一児のパパ。世界一のダンサーとしてのこだわりを、エアコンクリーニングに注いでいます。
          </p>
        </div>
      </section>

      {/* 店長ストーリー */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
              <div className="relative">
                <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <Users className="h-32 w-32 text-muted-foreground/30" />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl border border-primary/10 hidden md:block max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <span className="font-black text-lg">プロのこだわり</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    タヒチアンダンス・ファイヤーナイフダンスで世界一を獲得。その集中力をクリーニングに。
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Baby className="w-4 h-4" />
                  一児のパパ店長
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                  「家族の健康を守る」<br />
                  それが私の原点です。
                </h2>
                
                <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    南大東島で生まれ育ち、現在は3歳の娘を持つパパです。娘が生まれたことをきっかけに、<strong className="text-foreground font-bold">「家族の健康を守る空間づくり」</strong>について深く考えるようになりました。
                  </p>
                  <p>
                    沖縄の高温多湿な環境では、エアコンのカビや汚れは避けられません。しかし、それは大切な家族の健康に直結します。「きれいな空気で家族を元気にしたい」という想いから、大手清掃店での厳しい修行を経て、これまでに<strong className="text-foreground font-bold text-primary">900台以上</strong>の施工実績を積み上げてきました。
                  </p>
                  <p>
                    実は、私はタヒチアンダンサー・ファイヤーナイフダンサーとしても活動しており、世界一のタイトルも獲得しています。踊りを通して磨いてきた<strong className="text-foreground font-bold">「集中力・丁寧さ・美しさへのこだわり」</strong>は、クリーニングの細部にも活かされています。
                  </p>
                  <p>
                    「お客様の大切な空間を預かる」という強い意識を持って、一台一台、心を込めて作業させていただきます。
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-2xl border border-primary/5">
                    <div className="text-3xl font-black text-primary mb-1">900+</div>
                    <div className="text-sm font-bold text-muted-foreground">累計施工台数</div>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-2xl border border-primary/5">
                    <div className="text-3xl font-black text-accent mb-1">World No.1</div>
                    <div className="text-sm font-bold text-muted-foreground">ダンス世界大会実績</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3つのこだわり */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-10 h-10" />,
                  title: "パパならではの安心感",
                  description: "娘を持つ親として、お子様や女性の一人暮らしでも安心して任せていただける丁寧な対応を徹底しています。"
                },
                {
                  icon: <Sparkles className="w-10 h-10" />,
                  title: "美しさへの執念",
                  description: "ダンサーとして培った「美しさ」へのこだわり。見えない部分の汚れまで、徹底的に磨き上げます。"
                },
                {
                  icon: <Target className="w-10 h-10" />,
                  title: "確かな技術力",
                  description: "大手清掃店での修行と900台以上の経験。最新機種から古い機種まで、安心してお任せください。"
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-xl bg-white hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-10">
                    <div className="text-primary mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold animate-pulse">
            公式サイトからの予約が一番おトクです！
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            店長が直接お伺いします。<br />
            <span className="text-primary">安心してお任せください。</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-8 text-xl shadow-xl shadow-accent/20">
                予約フォームへ
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="px-12 py-8 text-xl">
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
