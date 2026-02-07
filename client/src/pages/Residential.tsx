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

      {/* 掃除の工程（写真付き） */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-primary">掃除の工程</span>
            </h2>
            <p className="text-muted-foreground text-lg">店長が丁寧に対応する、安心の作業フロー</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* ステップ1：動作確認 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-20 pb-20 border-b border-muted">
              <div className="order-2 md:order-1">
                <div className="bg-accent/10 rounded-2xl p-4 border border-accent/20">
                  <span className="inline-block bg-accent text-accent-foreground font-black px-4 py-1 rounded-full text-sm mb-4">ステップ1</span>
                </div>
                <h3 className="text-3xl font-black mt-6 mb-4">動作確認</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  作業前にエアコンの動作をしっかり確認します。異音や効き具合をチェックし、最適な洗浄プランを立てます。お客様のご質問にもこの段階でお答えします。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">動作音の確認</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">冷房・暖房の効き具合チェック</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">汚れの状態を把握</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/images/process-01-check.jpg" 
                  alt="動作確認" 
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 作業内容 */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-accent">作業内容</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { title: "動作確認", description: "作業前にエアコンの動作を確認します" },
              { title: "養生", description: "周辺を防水シートで保護します" },
              { title: "分解", description: "エアコンを丁寧に分解します" },
              { title: "パーツ洗浄", description: "取り外したパーツを個別に洗浄" },
              { title: "本体洗浄", description: "高圧洗浄機で徹底洗浄" },
              { title: "防カビコーティング", description: "仕上げに防カビ抗菌コーティング" },
              { title: "組み立て", description: "丁寧に組み立てます" },
              { title: "最終確認", description: "動作確認とお客様への説明" }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            家庭用エアコンクリーニングの<br />
            <span className="text-primary">ご予約はこちら</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            HPからの予約が最安値です！<br className="hidden md:block" />
            さらに防カビコートも無料！<br className="hidden md:block" />
            お見積もりは無料ですので、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-6 text-xl">
                予約フォームへ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline">
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
