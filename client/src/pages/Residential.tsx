import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Sparkles, Shield, Zap, MessageCircle, ClipboardList, Gift } from "lucide-react";

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
        "動作確認"
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
        "ドレンパンの洗浄",
        "動作確認"
      ],
      discount: "2台目から1,000円引き"
    }
  ];

  const options = [
    { 
      name: "完全分解洗浄", 
      price: "+8,000円", 
      description: "ドレンパンと送風ファンを外して徹底洗浄！",
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
      <section className="bg-primary text-primary-foreground py-12 md:py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            家庭用エアコンクリーニング
          </h1>
          <p className="text-base md:text-lg max-w-2xl opacity-90 leading-relaxed mb-8">
            ご家庭のエアコンを徹底的に分解洗浄。カビや汚れを根こそぎ除去し、清潔で快適な空気を取り戻します。
          </p>
          
          {/* 特典バッジをさらに強調 */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-2xl sm:rounded-full shadow-2xl animate-in fade-in zoom-in duration-700">
            <div className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-black text-sm md:text-base flex items-center shadow-lg">
              <Gift className="mr-2 h-5 w-5 animate-bounce" />
              限定特典
            </div>
            <div className="px-4 py-2 text-white font-bold text-sm md:text-base">
              公式HP・LINE予約で <span className="text-accent text-lg md:text-xl underline decoration-2 underline-offset-4">防カビ・抗菌コート無料！</span>
            </div>
          </div>
        </div>
        
        {/* 装飾的な背景要素 */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
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
              <div key={index} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col relative">
                {/* 特典ラベルをカード上部に追加 */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-accent text-accent-foreground text-[10px] font-black px-2 py-1 rounded shadow-sm flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    コート無料対象
                  </div>
                </div>

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
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* 特典セクションを独立させて強調 */}
                  <div className="mt-auto bg-accent/5 border border-accent/20 rounded-xl p-4 flex items-center gap-3">
                    <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-accent-foreground/70 leading-none mb-1">公式HP・LINE予約限定</div>
                      <div className="text-sm font-black text-primary">防カビ・抗菌コート無料！</div>
                    </div>
                  </div>
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
                <div key={index} className="bg-white rounded-xl p-6 border border-border shadow-sm hover:border-primary/20 transition-all flex flex-col items-center text-center">
                  <div className="bg-primary/5 p-3 rounded-full text-primary mb-3">
                    {option.icon}
                  </div>
                  <h4 className="font-black text-base mb-2">{option.name}</h4>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                  <div className="text-xl font-black text-primary mt-auto">{option.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 予約CTA - 特典を再強調 */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border-2 border-accent shadow-xl text-center relative overflow-hidden">
              {/* 背景の装飾 */}
              <div className="absolute top-0 right-0 p-2">
                <Sparkles className="h-12 w-12 text-accent/20" />
              </div>
              
              <div className="inline-block bg-accent text-accent-foreground text-xs font-black px-4 py-1 rounded-full mb-4 shadow-sm">
                今なら無料特典付き！
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-2">ご予約・お問い合わせはこちら</h3>
              <p className="text-sm font-bold text-primary mb-8">
                公式HP・LINEからの予約で「防カビ・抗菌コート」を無料で施工いたします。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <Link href="/line">
                  <Button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-base font-bold py-7 shadow-lg">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    LINEで予約
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button variant="outline" className="w-full border-primary text-primary text-base font-bold py-7 shadow-sm bg-white">
                    <ClipboardList className="mr-2 h-6 w-6" />
                    フォーム予約
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                ※お見積もりは無料です。お気軽にご相談ください。
              </p>
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

      {/* 最終CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight">
            エアコンクリーニングの<br />
            <span className="text-primary">ご予約はこちら</span>
          </h2>
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
