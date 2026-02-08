import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { contactInfo } from "@/data/siteData";
import { Badge } from "@/components/ui/badge";

export default function Residential() {
  const mainPlan = {
    name: "エアコンクリーニング基本プラン",
    description: "プロの技術による徹底分解洗浄",
    features: [
      "エアコン本体の分解洗浄",
      "熱交換器（フィン）の高圧洗浄",
      "送風ファンの洗浄",
      "ドレンパンの洗浄",
      "防カビ抗菌コーティング（HP予約限定無料！）",
      "動作確認"
    ],
    prices: [
      { type: "お掃除機能なし", single: "¥8,000", multiple: "2台目以降 ¥7,000/台" },
      { type: "お掃除機能あり", single: "¥15,000", multiple: "2台目以降 ¥14,000/台" }
    ]
  };

  const options = [
    { name: "完全分解洗浄", price: "¥8,000", description: "ドレンパン・送風ファンを取り外して丸洗い", highlight: true },
    { name: "室外機洗浄", price: "¥3,000", description: "電気代の節約・故障予防に" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "動作確認",
      description: "作業前にエアコンの動作をしっかり確認。異音や効き具合をチェックし、最適な洗浄プランを立てます。",
      images: [{ src: "/images/process-01-check.jpg", pos: "center 20%" }],
      points: ["動作音の確認", "冷暖房の効きチェック"]
    },
    {
      step: "2",
      title: "分解・養生",
      description: "丁寧に分解し、周囲を専用シートで保護。家具や壁を汚さないよう万全を期します。",
      images: [
        { src: "/images/process-02-disassemble.jpg", pos: "center 20%" },
        { src: "/images/process-02-protection.jpg", pos: "center 20%" }
      ],
      points: ["丁寧な分解", "徹底した防水養生"]
    },
    {
      step: "3",
      title: "高圧洗浄",
      description: "専用洗剤と高圧洗浄機で、アルミフィンやファンに溜まったカビやホコリを一掃します。",
      images: [
        { src: "/images/process-03-highpressure.jpg", pos: "center 20%" },
        { src: "/images/process-03-parts.jpg", pos: "center 20%" }
      ],
      points: ["高圧で根こそぎ洗浄", "奥の汚れまで除去"]
    },
    {
      step: "4",
      title: "パーツ洗浄",
      description: "外装パネルやフィルターを丁寧に手洗い。基本的にはベランダやお庭をお借りして洗浄しますが、難しい場合はお風呂場を使わせていただきます。（お風呂をお借りした際は排水溝まで責任を持って清掃します）",
      images: [{ src: "/images/process-04-parts-cleaning.jpg", pos: "center 20%" }],
      points: ["パネルの隅々まで手洗い", "排水溝まで責任清掃"]
    },
    {
      step: "5",
      title: "仕上げ・確認",
      description: "防カビコートを塗布し組み立て。最後に動作確認を行い、お客様にチェックしていただき完了です。",
      images: [{ src: "/images/process-05-coating.jpg", pos: "center 20%" }],
      points: ["防カビコート（無料）", "最終動作確認"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーロー - PCでも高さを抑える */}
      <section className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground py-10 md:py-16">
        <div className="container max-w-5xl">
          <Badge className="mb-3 bg-accent text-accent-foreground px-3 py-0.5 text-xs font-bold">
            家族の元気を空気で守る！
          </Badge>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            家庭用エアコンクリーニング
          </h1>
          <p className="text-sm md:text-lg max-w-2xl opacity-90 leading-relaxed">
            ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔で快適な空気を取り戻します。
          </p>
        </div>
      </section>

      {/* 料金プラン - PCで幅を制限 */}
      <section className="py-10 md:py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-accent text-accent-foreground px-3 py-0.5 text-xs font-bold">
              <Sparkles className="w-3 h-3 mr-1 inline" />
              HP予約が一番安い！
            </Badge>
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              料金プラン
            </h2>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <Card className="border-primary border-2 relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
                おすすめ
              </div>
              <CardHeader className="bg-primary/5 border-b border-primary/10 py-5">
                <CardTitle className="text-xl md:text-2xl font-black text-primary mb-1">{mainPlan.name}</CardTitle>
                <p className="text-xs text-muted-foreground">{mainPlan.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      作業内容
                    </h4>
                    <div className="space-y-1.5">
                      {mainPlan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-primary/60 flex-shrink-0 mt-1" />
                          <span className={`text-xs ${i === 4 ? "text-accent font-bold" : "text-muted-foreground"}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      基本料金
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {mainPlan.prices.map((price, i) => (
                        <div key={i} className="bg-muted/50 p-3 rounded-xl border border-primary/10">
                          <div className="font-bold text-[10px] mb-1 text-muted-foreground">{price.type}</div>
                          <div className="flex items-baseline gap-1">
                            <div className="text-xl md:text-2xl font-black text-primary">{price.single}</div>
                            <div className="text-[10px] text-muted-foreground">/ 台</div>
                          </div>
                          <div className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded inline-block mt-1">
                            {price.multiple}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="/booking">
                  <Button className="w-full bg-primary hover:bg-primary/90 font-bold py-5 text-lg shadow-sm">
                    このプランで予約する
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* オプション - PCで幅制限 */}
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {options.map((option, index) => (
                <Card key={index} className={`transition-all ${option.highlight ? "border-accent border-2 bg-accent/5" : "shadow-sm border-muted"}`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm">{option.name}</span>
                          {option.highlight && (
                            <Badge className="bg-accent text-accent-foreground text-[8px] px-1.5 py-0">人気</Badge>
                          )}
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{option.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-black text-primary">{option.price}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 掃除の工程 - PCで幅制限、カードをさらにコンパクトに */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">掃除の工程</h2>
            <p className="text-xs text-muted-foreground">店長が丁寧に対応する、安心の作業フロー</p>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-sm bg-white">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-muted relative min-h-[160px] md:min-h-full">
                    <div className="flex h-full">
                      {step.images.map((img, imgIdx) => (
                        <img 
                          key={imgIdx}
                          src={img.src} 
                          alt={`${step.title} ${imgIdx + 1}`}
                          className={`h-full object-cover ${step.images.length > 1 ? 'w-1/2' : 'w-full'}`}
                          style={{ objectPosition: img.pos }}
                        />
                      ))}
                    </div>
                    <div className="absolute top-2 left-2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                      {step.step}
                    </div>
                  </div>
                  <div className="md:w-3/4 p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-1 bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          <span className="text-[10px] font-bold text-primary/80">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - コンパクト化 */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-6">
            沖縄のエアコンを、もっと快適に。
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black px-10 py-6 text-lg rounded-full shadow-lg">
                今すぐ予約する
              </Button>
            </Link>
            <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-black px-10 py-6 text-lg rounded-full">
                LINEで相談する
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
