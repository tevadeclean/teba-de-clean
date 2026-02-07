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

            {/* ステップ2：分解・養生 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-20 pb-20 border-b border-muted">
              <div className="order-1 md:order-1">
                <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
                  <span className="inline-block bg-primary text-primary-foreground font-black px-4 py-1 rounded-full text-sm mb-4">ステップ2</span>
                </div>
                <h3 className="text-3xl font-black mt-6 mb-4">分解・養生</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  エアコンを丁寧に分解し、周囲を専用の防水シートで保護します。お客様のお宅を汚さないよう、細心の注意を払って養生いたします。水しぶきや汚れが家具や壁に飛ばないよう万全を期します。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">エアコン本体の丁寧な分解</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">周囲を防水シートで保護</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">家具・壁への水飛び対策</span>
                  </li>
                </ul>
              </div>
              <div className="order-2 md:order-2 space-y-4">
                <img 
                  src="/images/process-02-disassemble.jpg" 
                  alt="分解・養生" 
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
                <img 
                  src="/images/process-02-protection.jpg" 
                  alt="養生完了" 
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* ステップ3：高圧洗浄・パーツ洗浄 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-20 pb-20 border-b border-muted">
              <div className="order-2 md:order-1 space-y-4">
                <img 
                  src="/images/process-03-highpressure.jpg" 
                  alt="高圧洗浄" 
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
                <img 
                  src="/images/process-03-parts.jpg" 
                  alt="パーツ洗浄" 
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-accent/10 rounded-2xl p-4 border border-accent/20">
                  <span className="inline-block bg-accent text-accent-foreground font-black px-4 py-1 rounded-full text-sm mb-4">ステップ3</span>
                </div>
                <h3 className="text-3xl font-black mt-6 mb-4">高圧洗浄・パーツ洗浄</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  専用の洗剤と高圧洗浄機を使用して、アルミフィンや送風ファンに溜まったカビやホコリを一掃します。完全分解洗浄プランでは、ドレンパンやファンも取り外して、パーツごとに隅々まで洗い上げます。
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">高圧洗浄機でアルミフィンを洗浄</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">送風ファンの輝きを取り戻す</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">完全分解洗浄でドレンパン、ファンを洗浄</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ステップ4：外装・パーツの洗浄 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-20 pb-20 border-b border-muted">
              <div className="order-1 md:order-1">
                <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
                  <span className="inline-block bg-primary text-primary-foreground font-black px-4 py-1 rounded-full text-sm mb-4">ステップ4</span>
                </div>
                <h3 className="text-3xl font-black mt-6 mb-4">外装・パーツの洗浄</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  取り外した外装パネルやフィルターなどのパーツを、一つひとつ丁寧に手洗いします。ベランダやお庭の使用が難しい場合はお風呂場を使わせていただきます。（お風呂をお借りした場合は排水溝まで責任を持って清浄させていただきます）
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">外装パネルを丁寧に手洗い</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">ベランダやお庭を活用</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">お風呂場使用時は排水溝まで清浄</span>
                  </li>
                </ul>
              </div>
              <div className="order-2 md:order-2">
                <img 
                  src="/images/process-04-parts-cleaning.jpg" 
                  alt="外装・パーツの洗浄" 
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* ステップ5：防カビ・抗菌コート・動作確認 */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
              <div className="order-2 md:order-1">
                <div className="bg-accent/10 rounded-2xl p-4 border border-accent/20">
                  <span className="inline-block bg-accent text-accent-foreground font-black px-4 py-1 rounded-full text-sm mb-4">ステップ5</span>
                </div>
                <h3 className="text-3xl font-black mt-6 mb-4">防カビ・抗菌コート・動作確認</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  仕上げに防カビ・抗菌コートを隅々まで吹きかけ、パーツを元通りに組み立てます。最後に動作確認を行い、お客様に仕上がりをチェックしていただいて作業完了です。当サイトからご予約いただいた場合は、防カビ・抗菌コートを無料で実施いたします！
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">防カビ・抗菌コートで未来のカビを抑制</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">丁寧なパーツ組み立て</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">最終動作確認とお客様チェック</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="/images/process-05-coating.jpg" 
                  alt="防カビ・抗菌コート" 
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "本体ユニットの分解・洗浄",
                "アルミフィンの高圧洗浄",
                "送風ファンの高圧洗浄",
                "ドレンパンの洗浄",
                "外装パネル・フィルターの洗浄",
                "防カビ・抗菌コート（無料）",
                "動作確認・簡易清掃",
                "作業周辺の養生・後片付け"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-muted">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-bold text-sm">{item}</span>
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
