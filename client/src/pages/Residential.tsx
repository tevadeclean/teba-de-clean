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
    <div className="w-full">
      {/* ヒーロー - 高さを大幅に縮小 */}
      <section className="bg-primary text-primary-foreground py-10 md:py-16">
        <div className="container">
          <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
            家庭用エアコンクリーニング
          </h1>
          <p className="text-sm md:text-base max-w-2xl opacity-95 leading-relaxed mb-6">
            ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔で快適な空気を取り戻します。
          </p>
          <div className="inline-flex items-center bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-bold text-xs md:text-sm shadow-md">
            <Sparkles className="mr-2 h-4 w-4" />
            公式HP・LINE予約限定：防カビ・抗菌コート無料！
          </div>
        </div>
      </section>

      {/* 料金プラン - 位置を引き上げ */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
              <span className="text-primary">料金プラン</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              シンプルで分かりやすい料金体系をご用意しています
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="border hover:border-primary/30 transition-all flex flex-col shadow-sm overflow-hidden">
                <CardHeader className="bg-muted/30 p-6">
                  <CardTitle className="text-lg md:text-xl font-black mb-1">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-primary">{plan.price}</span>
                      <span className="text-lg font-bold">{plan.unit}</span>
                      <span className="text-xs text-muted-foreground ml-1">(税込)</span>
                    </div>
                    <div className="mt-2 inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-md">
                      {plan.discount}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className={feature.includes("特典") ? "text-primary font-bold text-sm" : "text-[13px]"}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href="/line">
                    <Button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-sm font-bold py-6">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      LINEで予約する
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* おすすめオプション */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-black mb-8 text-center">
              <span className="border-b-2 border-accent pb-1">✨ おすすめオプション</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {options.map((option, index) => (
                <Card key={index} className="bg-muted/30 border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        {option.icon}
                      </div>
                      <h4 className="font-black text-base">{option.name}</h4>
                    </div>
                    <p className="text-[13px] text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                    <div className="text-xl font-black text-primary">{option.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 作業の流れ */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
              <span className="text-accent">作業内容</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              プロの技術で、見えない汚れまで徹底的に洗浄します
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
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
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-sm flex-shrink-0 shadow-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-black text-base mb-1">{item.title}</h3>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-xl md:text-3xl font-black mb-6 leading-tight">
            エアコンクリーニングの<br />
            <span className="text-primary">ご予約はこちら</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            お見積もりは無料です。LINEまたはフォームからお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-base font-bold h-14 px-10 shadow-lg w-full sm:w-auto">
                <MessageCircle className="mr-2 h-6 w-6" />
                LINEで予約する
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-primary text-primary text-base font-bold h-14 px-10 w-full sm:w-auto">
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
