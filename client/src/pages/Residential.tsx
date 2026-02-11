import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Zap, MessageCircle } from "lucide-react";

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
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    { 
      name: "室外機洗浄", 
      price: "+3,000円", 
      description: "電気代節約や故障予防に。",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="w-full">
      {/* ヒーロー */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            家庭用エアコンクリーニング
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95 leading-relaxed mb-10">
            ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔で快適な空気を取り戻します。
          </p>
          <div className="inline-flex items-center bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg">
            <Sparkles className="mr-2 h-6 w-6" />
            公式HP・LINE予約限定：防カビ・抗菌コート無料！
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
              <span className="text-primary">料金プラン</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              シンプルで分かりやすい料金体系をご用意しています
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-20 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all flex flex-col shadow-sm hover:shadow-xl overflow-hidden">
                <CardHeader className="bg-muted/30 p-8 md:p-10">
                  <CardTitle className="text-2xl md:text-3xl font-black mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-lg">{plan.description}</p>
                </CardHeader>
                <CardContent className="p-8 md:p-10 flex-grow flex flex-col">
                  <div className="mb-10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-primary">{plan.price}</span>
                      <span className="text-2xl font-bold">{plan.unit}</span>
                      <span className="text-sm text-muted-foreground ml-2">(税込)</span>
                    </div>
                    <div className="mt-4 inline-block bg-primary/10 text-primary text-base font-bold px-4 py-2 rounded-lg">
                      {plan.discount}
                    </div>
                  </div>
                  
                  <div className="space-y-5 mb-12 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className={feature.includes("特典") ? "text-primary font-bold text-lg" : "text-base"}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href="/line">
                    <Button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-xl py-8 shadow-lg">
                      <MessageCircle className="mr-2 h-6 w-6" />
                      LINEで予約する
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* おすすめオプション */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black mb-12 text-center">
              <span className="border-b-4 border-accent pb-2">✨ おすすめオプション</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {options.map((option, index) => (
                <Card key={index} className="bg-muted/30 border-none shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white p-3 rounded-full shadow-sm">
                        {option.icon}
                      </div>
                      <h4 className="font-black text-xl">{option.name}</h4>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{option.description}</p>
                    <div className="text-2xl font-black text-primary">{option.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 作業の流れ */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
              <span className="text-accent">作業内容</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              プロの技術で、見えない汚れまで徹底的に洗浄します
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
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
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            エアコンクリーニングの<br />
            <span className="text-primary">ご予約はこちら</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            お見積もりは無料です。LINEまたはフォームからお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-xl px-12 py-8 shadow-xl w-full sm:w-auto">
                <MessageCircle className="mr-3 h-8 w-8" />
                LINEで予約する
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-primary text-primary text-xl px-12 py-8 w-full sm:w-auto">
                予約フォームへ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
