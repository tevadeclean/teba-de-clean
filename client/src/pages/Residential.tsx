import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Residential() {
  const pricingPlans = [
    {
      name: "スタンダードコース",
      description: "通常分解洗浄",
      features: [
        "エアコン本体の分解洗浄",
        "熱交換器（フィン）の高圧洗浄",
        "送風ファンの洗浄",
        "ドレンパンの洗浄",
        "防カビ抗菌コーティング（無料）",
        "動作確認"
      ],
      prices: [
        { type: "お掃除機能なし", single: "¥8,000", multiple: "2台目以降 ¥7,000/台" },
        { type: "お掃除機能あり", single: "¥16,000", multiple: "2台目以降 ¥15,000/台" }
      ]
    },
    {
      name: "ハイクオリティーコース",
      description: "送風ファン・ドレンパン取外し洗浄",
      features: [
        "スタンダードコース全内容",
        "送風ファン完全取外し洗浄",
        "ドレンパン完全取外し洗浄",
        "細部まで徹底洗浄",
        "より長持ちする仕上がり"
      ],
      prices: [
        { type: "お掃除機能なし", single: "¥16,000", multiple: "2台目以降 ¥15,000/台" },
        { type: "お掃除機能あり", single: "¥24,000", multiple: "2台目以降 ¥23,000/台" }
      ],
      note: "※対象外メーカー：富士通、ダイキン、東芝、日立"
    }
  ];

  const options = [
    { name: "お掃除機能付き", price: "¥8,000" },
    { name: "消臭抗菌コート", price: "¥1,000" },
    { name: "室外機洗浄", price: "¥3,000" },
    { name: "完全分解洗浄（ドレンパン、送風ファン取り外し）", price: "¥8,000" }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            家庭用エアコンクリーニング
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔で快適な空気を取り戻します。お掃除機能付きエアコンにも対応しています。
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
              お客様のニーズに合わせて最適なコースをご用意しています
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={index === 0 ? "border-primary border-2 relative overflow-hidden" : ""}>
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
                    人気No.1
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-4">
                    {plan.prices.map((price, i) => (
                      <div key={i} className="bg-muted/50 p-4 rounded-lg border border-primary/10">
                        <div className="font-medium mb-2">{price.type}</div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <div className="text-3xl font-black text-primary">{price.single}</div>
                          <div className="text-sm text-muted-foreground">/ 台</div>
                        </div>
                        <div className="text-sm font-bold text-accent">{price.multiple}</div>
                      </div>
                    ))}
                  </div>

                  {plan.note && (
                    <p className="text-xs text-muted-foreground mb-4">{plan.note}</p>
                  )}

                  <Link href="/booking">
                    <Button className="w-full bg-primary hover:bg-primary/90 font-bold py-6 text-lg">
                      このコースで予約する
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* オプション */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">オプションメニュー</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {options.map((option, index) => (
                <Card key={index} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center gap-4">
                      <span className="font-medium text-sm md:text-base">{option.name}</span>
                      <span className="text-xl font-bold text-primary whitespace-nowrap">{option.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            家庭用エアコンクリーニングの<br />
            <span className="text-primary">ご予約はこちら</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            HPからの予約が最安値です！お見積もりは無料ですので、お気軽にお問い合わせください。
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
