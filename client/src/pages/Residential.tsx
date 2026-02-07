import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles, Info, Gift } from "lucide-react";
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
      { type: "お掃除機能あり", single: "¥16,000", multiple: "2台目以降 ¥15,000/台" }
    ]
  };

  const options = [
    { name: "お掃除機能付き", price: "¥8,000", description: "お掃除ロボット搭載機種の場合" },
    { name: "完全分解洗浄", price: "¥8,000", description: "ドレンパン・送風ファンを取り外して丸洗い", highlight: true },
    { name: "室外機洗浄", price: "¥3,000", description: "電気代の節約・故障予防に" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "動作確認",
      description: "作業前にエアコンの動作をしっかり確認。異音や効き具合をチェックし、最適な洗浄プランを立てます。",
      images: [{ src: "/images/process-01-check.jpg", pos: "center" }],
      points: ["動作音の確認", "冷暖房の効きチェック"]
    },
    {
      step: "2",
      title: "分解・養生",
      description: "丁寧に分解し、周囲を専用シートで保護。家具や壁を汚さないよう万全を期します。",
      images: [
        { src: "/images/process-02-disassemble.jpg", pos: "top" },
        { src: "/images/process-02-protection.jpg", pos: "center" }
      ],
      points: ["丁寧な分解", "徹底した防水養生"]
    },
    {
      step: "3",
      title: "高圧洗浄",
      description: "専用洗剤と高圧洗浄機で、アルミフィンやファンに溜まったカビやホコリを一掃します。",
      images: [
        { src: "/images/process-03-highpressure.jpg", pos: "top" },
        { src: "/images/process-03-parts.jpg", pos: "center" }
      ],
      points: ["高圧で根こそぎ洗浄", "奥の汚れまで除去"]
    },
    {
      step: "4",
      title: "パーツ洗浄",
      description: "外装パネルやフィルターを丁寧に手洗い。基本的にはベランダやお庭をお借りして洗浄しますが、難しい場合はお風呂場を使わせていただきます。（お風呂をお借りした際は排水溝まで責任を持って清掃します）",
      images: [{ src: "/images/process-04-parts-cleaning.jpg", pos: "center" }],
      points: ["パネルの隅々まで手洗い", "排水溝まで責任清掃"]
    },
    {
      step: "5",
      title: "仕上げ・確認",
      description: "防カビコートを塗布し組み立て。最後に動作確認を行い、お客様にチェックしていただき完了です。",
      images: [{ src: "/images/process-05-coating.jpg", pos: "top" }],
      points: ["防カビコート（無料）", "最終動作確認"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground py-16 md:py-24">
        <div className="container">
          <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
            家族の元気を空気で守る！
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            家庭用エアコンクリーニング
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔で快適な空気を取り戻します。
          </p>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold animate-bounce">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              HPからの予約が一番安い！
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-primary">料金プラン</span>
            </h2>
            <p className="text-muted-foreground">
              シンプルで分かりやすい料金体系をご用意しています
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <Card className="border-primary border-2 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 text-sm font-bold rounded-bl-xl">
                おすすめ
              </div>
              <CardHeader className="bg-primary/5 border-b border-primary/10 pb-8">
                <CardTitle className="text-3xl font-black text-primary mb-2">{mainPlan.name}</CardTitle>
                <p className="text-muted-foreground text-lg">{mainPlan.description}</p>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      作業内容
                    </h4>
                    <div className="space-y-3">
                      {mainPlan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary/60 flex-shrink-0 mt-1" />
                          <span className={`text-sm ${i === 4 ? "text-accent font-bold" : "text-muted-foreground"}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-accent/10 p-3 rounded-lg border border-accent/20 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-accent" />
                      <span className="text-xs font-bold text-accent">HP予約限定：防カビコート無料！</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent" />
                      基本料金
                    </h4>
                    <div className="space-y-4">
                      {mainPlan.prices.map((price, i) => (
                        <div key={i} className="bg-muted/50 p-4 rounded-xl border border-primary/10">
                          <div className="font-bold text-sm mb-2 text-muted-foreground">{price.type}</div>
                          <div className="flex items-baseline gap-1 mb-1">
                            <div className="text-3xl font-black text-primary">{price.single}</div>
                            <div className="text-xs text-muted-foreground">/ 台</div>
                          </div>
                          <div className="text-sm font-bold text-accent bg-accent/10 px-2 py-0.5 rounded inline-block">
                            {price.multiple}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="/booking">
                  <Button className="w-full bg-primary hover:bg-primary/90 font-bold py-8 text-xl shadow-lg shadow-primary/20">
                    このプランで予約する
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* オプション */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">オプションメニュー</h3>
              <p className="text-muted-foreground">さらに徹底的に綺麗にしたい方へ</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {options.map((option, index) => (
                <Card key={index} className={`transition-all duration-300 hover:shadow-md ${option.highlight ? "border-accent border-2 bg-accent/5" : "hover:border-primary/50"}`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg">{option.name}</span>
                          {option.highlight && (
                            <Badge className="bg-accent text-accent-foreground text-[10px] px-2 py-0">人気</Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-primary whitespace-nowrap">{option.price}</span>
                        <div className="text-[10px] text-muted-foreground">/ 台</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 bg-muted/50 p-4 rounded-lg flex items-start gap-3 border border-dashed border-muted-foreground/30">
              <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                ※完全分解洗浄は、ドレンパンと送風ファンを完全に取り外して洗浄するオプションです。通常の分解洗浄では届かない奥の汚れまで徹底的に除去します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 掃除の工程（コンパクト版） */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-primary">掃除の工程</span>
            </h2>
            <p className="text-muted-foreground text-lg">店長が丁寧に対応する、安心の作業フロー</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {processSteps.map((step, idx) => (
                <Card key={idx} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-5 items-stretch">
                    {/* テキスト部分 (3/5) */}
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-xl">
                          {step.step}
                        </span>
                        <h3 className="text-2xl font-black">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {step.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-1.5 bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary/80">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* 画像部分 (2/5) */}
                    <div className="md:col-span-2 bg-muted flex items-center justify-center p-4 md:p-6">
                      <div className={`grid ${step.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-3 w-full`}>
                        {step.images.map((img, imgIdx) => (
                          <div key={imgIdx} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                            <img 
                              src={img.src} 
                              alt={`${step.title} ${imgIdx + 1}`} 
                              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              style={{ objectPosition: img.pos }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 作業内容一覧 */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-accent">作業内容一覧</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "本体分解・洗浄",
                "フィン高圧洗浄",
                "ファン高圧洗浄",
                "ドレンパン洗浄",
                "パネル・フィルター",
                "防カビコート",
                "動作確認",
                "養生・後片付け"
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-muted hover:border-primary/30 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="font-bold text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            沖縄のエアコンを、もっと綺麗に、もっと快適に。
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black px-12 py-8 text-xl rounded-full shadow-xl">
                今すぐ予約する
              </Button>
            </Link>
            <Link href="/line">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-black px-12 py-8 text-xl rounded-full">
                LINEで相談する
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
