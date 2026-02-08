import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Clock, Shield, ArrowRight, Sparkles, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Commercial() {
  const pricing = [
    { type: "壁掛けタイプ", price: "¥25,000", note: "2台目以降 10%引き" },
    { type: "埋込・吊下げタイプ", price: "¥30,000〜", note: "2台目以降 10%引き" }
  ];

  const targetFacilities = [
    "飲食店", "事務所", "クリニック", "保育園", 
    "ホテル", "ショッピングセンター", "学校", "介護施設"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-12 md:py-20">
        <div className="container max-w-5xl">
          <Badge className="mb-4 bg-accent text-accent-foreground font-bold">業務用エアコン</Badge>
          <h1 className="text-3xl md:text-5xl font-black mb-6">
            店舗・オフィスの空気を、<br className="md:hidden" />プロの技術で守る。
          </h1>
          <p className="text-base md:text-xl max-w-3xl opacity-95 leading-relaxed">
            飲食店や事務所の業務用エアコンに対応。オーナー本人が責任を持って、丁寧かつ確実にクリーニングいたします。
          </p>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-12 md:py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-accent text-accent-foreground px-3 py-0.5 text-xs font-bold">
              <Sparkles className="w-3 h-3 mr-1 inline" />
              HP予約が一番おトク！
            </Badge>
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              料金のご案内
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 mb-8">
            {pricing.map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-3">{item.type}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <div className="text-3xl font-black text-primary">{item.price}</div>
                    <div className="text-xs text-muted-foreground">/ 台</div>
                  </div>
                  <div className="bg-accent/10 text-accent font-bold py-1 px-3 rounded-full text-xs inline-block mb-3">
                    {item.note}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-muted/30 p-5 rounded-xl border border-primary/10">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              注意事項
            </h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• 高所取付の場合、追加料金が発生する場合があります</li>
              <li>• フィルターお掃除機能・自動昇降機能搭載の場合、金額が変動します</li>
              <li>• 見積希望の場合、見積り料：¥3,300が発生いたします（施工時は無料）</li>
              <li>• 複数台同時施工の場合、大幅割引適用可能です</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 業務用エアコンの特徴 */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              業務用クリーニングの<span className="text-accent">こだわり</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid gap-4">
            <Card className="border-none shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">オーナー本人が責任対応</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      外注は一切なし。大手洗浄店での修行経験を持つオーナー本人が、最初から最後まで責任を持って丁寧に作業いたします。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">複雑な構造にも対応</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      業務用エアコンは家庭用に比べ分解が難しく壊れやすいため、確かな知識と実績を持つプロにお任せください。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">効率的な作業フロー</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      専門知識を活かした効率的な手順により、店舗やオフィスの営業時間を妨げないよう、迅速かつ確実に清掃いたします。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">安心のエコ洗剤使用</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      身体に優しいエコ洗剤を利用して隅々まで洗浄します。飲食店や保育施設、介護施設でも安心してご利用いただけます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 対応施設 */}
      <section className="py-12 md:py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              対応施設
            </h2>
            <p className="text-xs text-muted-foreground">
              さまざまな施設の業務用エアコンクリーニングに対応しています
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            {targetFacilities.map((facility, index) => (
              <Card key={index} className="text-center border-none shadow-sm bg-muted/20">
                <CardContent className="p-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
                    <Building2 className="h-4 w-4 text-accent" />
                  </div>
                  <div className="text-xs font-bold">{facility}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-6">
            業務用エアコンの<br className="md:hidden" />お見積もり・ご予約
          </h2>
          <p className="text-sm md:text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            HPからの予約が最安値です！<br />
            まずは無料でお見積もりいたします。お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-black px-10 py-6 text-lg rounded-full shadow-lg">
                予約・お見積もりへ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:09059424412">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-black px-10 py-6 text-lg rounded-full">
                電話で相談する
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
