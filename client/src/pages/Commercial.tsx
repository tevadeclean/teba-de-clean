import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, Shield, ArrowRight, Sparkles, MessageCircle, CheckCircle2, Zap } from "lucide-react";
import LogoText from "@/components/LogoText";

export default function Commercial() {
  const targetFacilities = [
    "飲食店", "事務所", "クリニック", "保育園", 
    "ホテル", "店舗", "学校", "介護施設"
  ];

  const features = [
    "店舗・オフィス・病院・施設に対応",
    "天井カセット型・吊り型・床置き型など全機種対応",
    "複数台の同時施工・夜間作業も相談可能",
    "定期的なメンテナンスプランのご提案",
    "賠償責任保険加入済みで安心",
    "【特典】防カビ・抗菌コート無料施工"
  ];

  return (
    <div className="w-full bg-background">
      {/* ヒーローセクション */}
      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                業務用エアコンクリーニング
              </h1>
              <p className="text-base md:text-lg opacity-90 leading-relaxed mb-8">
                店舗やオフィスのエアコンは、家庭用よりも汚れが溜まりやすく、電気代への影響も甚大です。プロの技術で効率を改善し、快適な空間を作ります。
              </p>
              <div className="inline-flex items-center bg-accent text-accent-foreground px-5 py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
                <Sparkles className="mr-2 h-5 w-5" />
                HP・LINE予約限定：防カビ・抗菌コート無料！
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-40 h-40 rounded-3xl bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
                <Building2 className="h-20 w-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金・特徴 */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8">
                  業務用プラン
                </h2>
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-sm">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-sm font-bold text-muted-foreground">1台あたり</span>
                    <span className="text-4xl md:text-5xl font-black text-primary">25,000</span>
                    <span className="text-xl font-bold">円〜</span>
                    <span className="text-sm text-muted-foreground ml-1">(税込)</span>
                  </div>
                  <div className="inline-block bg-primary text-primary-foreground text-base font-bold px-6 py-2.5 rounded-xl mb-8 shadow-md">
                    2台目から10％割引！
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    ※機種（天井カセット型、吊り型、床置き型など）や汚れ具合、設置状況により料金が異なります。現地見積もり、またはお写真での概算見積もりを承ります。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10">
                  <Zap className="h-8 w-8 text-accent mb-4" />
                  <h4 className="font-black text-base mb-2">電気代削減</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">効率が改善し、大幅なコストカットが期待できます。</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-black text-base mb-2">故障予防</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">内部の負荷を減らし、エアコンの寿命を延ばします。</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                サービスの特徴
              </h3>
              <div className="space-y-5">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className={feature.includes("特典") ? "text-primary font-bold text-base" : "text-base text-foreground/90"}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-border">
                <Link href="/line">
                  <Button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-lg font-bold py-8 shadow-lg">
                    <MessageCircle className="mr-2 h-7 w-7" />
                    LINEで無料見積もり
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応施設 */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              対応施設
            </h2>
            <p className="text-muted-foreground">
              さまざまな施設の業務用エアコンクリーニングに対応しています
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {targetFacilities.map((facility, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-sm border border-border hover:border-primary transition-all group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <div className="font-black text-base">{facility}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight">
            業務用エアコンクリーニングの<br />
            <span className="text-primary">お見積もり・ご予約</span>
          </h2>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            まずは無料でお見積もりいたします。LINEまたはフォームからお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-lg font-bold h-16 px-12 shadow-xl w-full sm:w-auto">
                <MessageCircle className="mr-2 h-7 w-7" />
                LINEで相談する
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-primary text-primary text-lg font-bold h-16 px-12 w-full sm:w-auto">
                予約・お問い合わせフォーム
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
