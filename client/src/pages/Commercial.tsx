import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Clock, Shield, ArrowRight, Sparkles, MessageCircle, CheckCircle2, Zap } from "lucide-react";

export default function Commercial() {
  const pricing = [
    { 
      type: "業務用エアコン", 
      price: "25,000", 
      unit: "円〜",
      description: "店舗・オフィス用の天井カセット型など",
      discount: "2台目から10％割引"
    }
  ];

  const targetFacilities = [
    "飲食店", "事務所", "クリニック", "保育園", 
    "ホテル", "ショッピングセンター", "学校", "介護施設"
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
      {/* ヒーロー */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                業務用エアコン<br />クリーニング
              </h1>
              <p className="text-lg md:text-xl opacity-95 leading-relaxed mb-10">
                店舗やオフィスのエアコンは、家庭用よりも汚れが溜まりやすく、電気代への影響も甚大です。プロの技術で効率を改善し、快適な空間を作ります。
              </p>
              <div className="inline-flex items-center bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                <Sparkles className="mr-2 h-6 w-6" />
                HP・LINE予約限定：防カビ・抗菌コート無料！
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <div className="w-64 h-64 rounded-3xl bg-white/10 flex items-center justify-center border-2 border-white/20">
                <Building2 className="h-32 w-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金・特徴 */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8">
                  <span className="text-primary">業務用プラン</span>
                </h2>
                <div className="bg-muted/30 p-10 rounded-3xl border-2 border-primary/10">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-sm font-bold text-muted-foreground">1台あたり</span>
                    <span className="text-5xl font-black text-primary">25,000</span>
                    <span className="text-2xl font-bold">円〜</span>
                    <span className="text-sm text-muted-foreground ml-2">(税込)</span>
                  </div>
                  <div className="inline-block bg-primary text-primary-foreground text-lg font-bold px-6 py-3 rounded-xl mb-8 shadow-md">
                    2台目から10％割引！
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    ※機種（天井カセット型、吊り型、床置き型など）や汚れ具合、設置状況により料金が異なります。現地見積もり、またはお写真での概算見積もりを承ります。
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="bg-accent/5 border-none shadow-sm">
                  <CardContent className="p-8">
                    <Zap className="h-10 w-10 text-accent mb-4" />
                    <h4 className="font-black text-xl mb-2">電気代削減</h4>
                    <p className="text-muted-foreground text-base">効率が改善し、大幅なコストカットが期待できます。</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-none shadow-sm">
                  <CardContent className="p-8">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h4 className="font-black text-xl mb-2">故障予防</h4>
                    <p className="text-muted-foreground text-base">内部の負荷を減らし、エアコンの寿命を延ばします。</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-card border-2 rounded-3xl p-10 md:p-12 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-black mb-10 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                サービスの特徴
              </h3>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className={feature.includes("特典") ? "text-primary font-bold text-xl" : "text-lg text-foreground/90"}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-10 border-t">
                <Link href="/line">
                  <Button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-xl py-8 shadow-lg">
                    <MessageCircle className="mr-3 h-8 w-8" />
                    LINEで無料見積もり
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応施設 */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
              <span className="text-primary">対応施設</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              さまざまな施設の業務用エアコンクリーニングに対応しています
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {targetFacilities.map((facility, index) => (
              <Card key={index} className="text-center hover:border-primary transition-all hover:shadow-md border-none">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-accent" />
                  </div>
                  <div className="font-black text-lg">{facility}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
            業務用エアコンクリーニングの<br />
            <span className="text-primary">お見積もり・ご予約</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            まずは無料でお見積もりいたします。LINEまたはフォームからお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-xl px-12 py-8 shadow-xl w-full sm:w-auto">
                <MessageCircle className="mr-3 h-8 w-8" />
                LINEで相談する
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="border-primary text-primary text-xl px-12 py-8 w-full sm:w-auto">
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
