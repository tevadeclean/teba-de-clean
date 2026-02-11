import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

export default function Residential() {
  const pricingPlans = [
    {
      name: "家庭用（お掃除機能なし）",
      description: "一般的な壁掛けエアコン",
      price: "8,000",
      unit: "円",
      features: [
        "エアコン本体の分解洗浄",
        "熱交換器（フィン）の高圧洗浄",
        "送風ファンの洗浄",
        "ドレンパンの洗浄",
        "動作確認",
        "【特典】防カビ・抗菌コート無料"
      ],
      discount: "2台目から1,000円引き"
    },
    {
      name: "家庭用（お掃除機能あり）",
      description: "お掃除機能付きのタイプ",
      price: "15,000",
      unit: "円",
      features: [
        "お掃除機能付きユニットの分解",
        "内部の徹底高圧洗浄",
        "熱交換器・ファンの洗浄",
        "ダストボックス等の清掃",
        "動作確認",
        "【特典】防カビ・抗菌コート無料"
      ],
      discount: "2台目から1,000円引き"
    }
  ];

  const options = [
    { 
      name: "完全分解洗浄", 
      price: "+8,000円", 
      description: "ドレンパンとファンを外して徹底洗浄！",
      icon: <Zap className="h-5 w-5 text-primary" />
    },
    { 
      name: "室外機洗浄", 
      price: "+3,000円", 
      description: "電気代節約や故障予防に。",
      icon: <Shield className="h-5 w-5 text-primary" />
    }
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
            ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔で快適な空気を取り戻します。
          </p>
          <div className="mt-8 inline-flex items-center bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold animate-bounce">
            <Sparkles className="mr-2 h-5 w-5" />
            公式HP・LINE予約限定：防カビ・抗菌コート無料！
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-primary">料金プラン</span>
            </h2>
            <p className="text-muted-foreground">
              シンプルで分かりやすい料金体系をご用意しています
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all flex flex-col">
                <CardHeader className="bg-muted/30">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-primary">{plan.price}</span>
                      <span className="text-xl font-bold">{plan.unit}</span>
                      <span className="text-sm text-muted-foreground ml-2">(税込)</span>
                    </div>
                    <div className="mt-2 inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded">
                      {plan.discount}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className={feature.includes("特典") ? "text-primary font-bold" : "text-sm"}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href="/booking">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                      このプランで予約する
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* おすすめオプション */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="border-b-4 border-accent">✨ おすすめオプション</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {options.map((option, index) => (
                <Card key={index} className="bg-muted/30 border-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      {option.icon}
                      <h4 className="font-bold text-lg">{option.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                    <div className="text-xl font-black text-primary">{option.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 作業の流れ */}
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
              { title: "防カビコーティング", description: "仕上げに防カビ抗菌コーティング（無料特典）" },
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
            エアコンクリーニングの<br />
            <span className="text-primary">ご予約はこちら</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            お見積もりは無料です。LINEまたはフォームからお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                予約フォームへ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/line">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
                LINEで予約する
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
