import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Clock, Shield, ArrowRight } from "lucide-react";

export default function Commercial() {
  const pricing = [
    { type: "壁掛けタイプ", price: "¥22,000〜" },
    { type: "埋込・吊下げタイプ", price: "¥30,000〜" }
  ];

  const targetFacilities = [
    "飲食店", "事務所", "クリニック", "保育園", 
    "ホテル", "ショッピングセンター", "学校", "介護施設"
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            業務用エアコンクリーニング
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95">
            店舗・オフィス・施設の業務用エアコンに対応。複数台の同時施工も可能です。経験豊富なスタッフが、短時間で確実にクリーニングいたします。
          </p>
        </div>
      </section>

      {/* 料金 */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-primary">料金</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            {pricing.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">{item.type}</h3>
                  <div className="text-4xl font-black text-primary mb-4">{item.price}</div>
                  <p className="text-sm text-muted-foreground">
                    ※機種・状態により変動します
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-3">料金に関する注意事項</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 高所取付の場合、追加料金が発生する場合があります</li>
              <li>• フィルターお掃除機能・自動昇降機能搭載の場合、金額が変動します</li>
              <li>• 見積希望の場合、見積り料：¥3,300が発生いたします（施工時は無料）</li>
              <li>• 複数台同時施工の場合、割引適用可能です</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 業務用エアコンの特徴 */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              業務用エアコンクリーニングの<span className="text-accent">重要性</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">人の出入りが多い環境</h3>
                    <p className="text-muted-foreground">
                      店舗や事務所のエアコンは、人の出入りが激しいため、カビやハウスダスト、ホコリ、花粉などで汚れやすい環境にあります。定期的なクリーニングが必要です。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">複雑な構造</h3>
                    <p className="text-muted-foreground">
                      業務用エアコンは家庭用に比べ分解が難しく壊れやすいため、知識と実績のある清掃業者に依頼することをおすすめします。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">短時間での施工</h3>
                    <p className="text-muted-foreground">
                      当店では専門知識を持った経験豊富なスタッフが多数在籍しておりますので、複数の業務用エアコンのクリーニングも短時間で清掃可能です。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">安心のエコ洗剤使用</h3>
                    <p className="text-muted-foreground">
                      身体に優しいエコ洗剤（Kirei）を利用して隅々まで洗浄します。飲食店や保育施設、介護施設でも安心してご利用いただけます。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 対応施設 */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-primary">対応施設</span>
            </h2>
            <p className="text-muted-foreground">
              さまざまな施設の業務用エアコンクリーニングに対応しています
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetFacilities.map((facility, index) => (
              <Card key={index} className="text-center hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <div className="font-medium">{facility}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 実績 */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-accent">豊富な実績</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-black text-primary mb-2">1,000台+</div>
                    <div className="text-sm text-muted-foreground">年間施工実績</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-accent mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">お客様満足度</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-primary mb-2">5年+</div>
                    <div className="text-sm text-muted-foreground">平均経験年数</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            業務用エアコンクリーニングの<br />
            <span className="text-primary">お見積もり・ご予約</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            まずは無料でお見積もりいたします。お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                予約・お見積もりフォームへ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:098-XXX-XXXX">
              <Button size="lg" variant="outline">
                電話で相談する
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
