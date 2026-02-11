import { Link } from "wouter";
import { Button } from "@/components/ui/button";
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

  const workSteps = [
    { title: "動作確認", description: "作業前にエアコンの動作を確認します" },
    { title: "養生", description: "周辺を防水シートで保護します" },
    { title: "分解", description: "エアコンを丁寧に分解します" },
    { title: "パーツ洗浄", description: "取り外したパーツを個別に洗浄" },
    { title: "本体洗浄", description: "高圧洗浄機で徹底洗浄" },
    { title: "防カビコーティング", description: "仕上げに防カビ抗菌コーティング（無料特典）" },
    { title: "組み立て", description: "丁寧に組み立てます" },
    { title: "最終確認", description: "動作確認とお客様への説明" }
  ];

  return (
    <div className="w-full bg-background">
      {/* ヒーローセクション */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            家庭用エアコンクリーニング
          </h1>
          <p className="text-base md:text-lg max-w-2xl opacity-90 leading-relaxed mb-8">
            ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔で快適な空気を取り戻します。
          </p>
          <div className="inline-flex items-center bg-accent text-accent-foreground px-5 py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
            <Sparkles className="mr-2 h-5 w-5" />
            公式HP・LINE予約限定：防カビ・抗菌コート無料！
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              料金プラン
            </h2>
            <p className="text-muted-foreground">
              シンプルで分かりやすい料金体系をご用意しています
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col">
                <div className="bg-muted/50 p-6 border-b border-border">
                  <h3 className="text-lg md:text-xl font-black mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-black text-primary">{plan.price}</span>
                      <span className="text-lg font-bold">{plan.unit}</span>
                      <span className="text-sm text-muted-foreground ml-1">(税込)</span>
                    </div>
                    <div className="mt-3 inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-md">
                      {plan.discount}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className={feature.includes("特典") ? "text-primary font-bold" : "text-foreground/90"}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href="/line">
                    <Button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-base font-bold py-7 shadow-md">
                      <MessageCircle className="mr-2 h-6 w-6" />
                      LINEで予約する
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* オプション */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black mb-10 text-center">
              ✨ おすすめオプション
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {options.map((option, index) => (
                <div key={index} className="bg-muted/30 rounded-2xl p-6 border border-transparent hover:border-primary/10 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-primary">
                      {option.icon}
                    </div>
                    <h4 className="font-black text-lg">{option.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                  <div className="text-2xl font-black text-primary">{option.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 作業内容 */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              作業内容
            </h2>
            <p className="text-muted-foreground">
              プロの技術で、見えない汚れまで徹底的に洗浄します
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workSteps.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-lg mb-4 shadow-md">
                  {index + 1}
                </div>
                <h3 className="font-black text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight">
            エアコンクリーニングの<br />
            <span className="text-primary">ご予約はこちら</span>
          </h2>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            お見積もりは無料です。LINEまたはフォームからお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-lg font-bold h-16 px-12 shadow-xl w-full sm:w-auto">
                <MessageCircle className="mr-2 h-7 w-7" />
                LINEで予約する
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-primary text-primary text-lg font-bold h-16 px-12 w-full sm:w-auto">
                予約フォームへ
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
