import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, ArrowRight, Sparkles, MessageCircle, CheckCircle2, Zap } from "lucide-react";

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
    <div className="w-full">
      {/* ヒーロー - 高さを縮小 */}
      <section className="bg-primary text-primary-foreground py-10 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
                業務用エアコンクリーニング
              </h1>
              <p className="text-sm md:text-base opacity-95 leading-relaxed mb-6">
                店舗やオフィスのエアコンは、家庭用よりも汚れが溜まりやすく、電気代への影響も甚大です。プロの技術で効率を改善し、快適な空間を作ります。
              </p>
              <div className="inline-flex items-center bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-bold text-xs md:text-sm shadow-md">
                <Sparkles className="mr-2 h-4 w-4" />
                HP・LINE予約限定：防カビ・抗菌コート無料！
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-32 h-32 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                <Building2 className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金・特徴 - 位置を引き上げ */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-foreground mb-6">
                  <span className="text-primary">業務用プラン</span>
                </h2>
                <div className="bg-muted/30 p-8 rounded-2xl border border-primary/10">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-xs font-bold text-muted-foreground">1台あたり</span>
                    <span className="text-3xl font-black text-primary">25,000</span>
                    <span className="text-lg font-bold">円〜</span>
                    <span className="text-xs text-muted-foreground ml-1">(税込)</span>
                  </div>
                  <div className="inline-block bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-lg mb-6 shadow-sm">
                    2台目から10％割引！
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[13px]">
                    ※機種（天井カセット型、吊り型、床置き型など）や汚れ具合、設置状況により料金が異なります。現地見積もり、またはお写真での概算見積もりを承ります。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-accent/5 border-none shadow-sm">
                  <CardContent className="p-5">
                    <Zap className="h-6 w-6 text-accent mb-2" />
                    <h4 className="font-black text-sm mb-1">電気代削減</h4>
                    <p className="text-[11px] text-muted-foreground">効率が改善し、コストカットが期待できます。</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-none shadow-sm">
                  <CardContent className="p-5">
                    <Shield className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-black text-sm mb-1">故障予防</h4>
                    <p className="text-[11px] text-muted-foreground">内部の負荷を減らし、寿命を延ばします。</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-card border rounded-2xl p-8 shadow-md">
              <h3 className="text-lg md:text-xl font-black mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                サービスの特徴
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className={feature.includes("特典") ? "text-primary font-bold text-sm" : "text-[13px] text-foreground/90"}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t">
                <Link href="/line">
                  <Button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-base font-bold py-6 shadow-md">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    LINEで無料見積もり
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応施設 */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
              <span className="text-primary">対応施設</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              さまざまな施設の業務用エアコンクリーニングに対応しています
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetFacilities.map((facility, index) => (
              <Card key={index} className="text-center hover:border-primary transition-all shadow-sm border-none">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-5 w-5 text-accent" />
                  </div>
                  <div className="font-black text-sm">{facility}</div>
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
            業務用エアコンクリーニングの<br />
            <span className="text-primary">お見積もり・ご予約</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            まずは無料でお見積もりいたします。LINEまたはフォームからお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-base font-bold h-14 px-10 shadow-lg w-full sm:w-auto">
                <MessageCircle className="mr-2 h-6 w-6" />
                LINEで相談する
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-primary text-primary text-base font-bold h-14 px-10 w-full sm:w-auto">
                予約・お問い合わせフォーム
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
