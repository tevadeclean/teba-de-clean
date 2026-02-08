import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Clock, Shield, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Commercial() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            業務用エアコンクリーニング
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95">
            店舗・オフィス・施設の業務用エアコンに対応。天井カセット型、吊り下げ型など、あらゆる機種をオーナー本人が責任を持って丁寧に洗浄いたします。
          </p>
        </div>
      </section>

      {/* 料金 */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold animate-bounce">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              HPからの予約が一番安い！
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              <span className="text-primary">料金</span>
            </h2>
          </div>

          <div className="max-w-xl mx-auto mb-8">
            <Card className="border-2 border-primary shadow-lg overflow-hidden">
              <CardContent className="p-10 text-center">
                <h3 className="text-2xl font-bold mb-6">業務用エアコン全般</h3>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <div className="text-5xl font-black text-primary">25,000円〜</div>
                  <div className="text-lg text-muted-foreground">/ 台(税込)</div>
                </div>
                <div className="bg-accent/10 text-accent font-bold py-2 px-6 rounded-full text-lg inline-block mb-6">
                  複数台同時施工で割引あり！
                </div>
                <p className="text-sm text-muted-foreground">
                  ※天井カセット型、吊り下げ型、床置き型など全機種対応。<br />
                  設置状況や汚れ具合により変動する場合があります。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto bg-muted/50 p-6 rounded-lg border border-primary/10">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              料金に関する注意事項
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• HPからのご予約が最安値となります</li>
              <li>• 高所取付の場合、追加料金が発生する場合があります</li>
              <li>• フィルターお掃除機能・自動昇隔機能搭載の場合、金額が変動します</li>
              <li>• 複数台同時施工の場合、大幅割引適用可能です。お気軽にご相談ください</li>
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
                    <h3 className="text-xl font-bold mb-2">構造が複雑で分解の難易度が高い</h3>
                    <p className="text-muted-foreground">
                      業務用エアコンは家庭用に比べ構造が複雑で分解の難易度が高いため、確かな知識と実績を持つプロにお任せください。
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
                    <h3 className="text-xl font-bold mb-2">オーナー本人が責任施工</h3>
                    <p className="text-muted-foreground">
                      外注なし！オーナー本人が最初から最後まで責任を持って丁寧に作業いたします。店舗やオフィスの大切な設備を安心してお預けください。
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
                    <h3 className="text-xl font-bold mb-2">プロ仕様の洗剤による徹底洗浄</h3>
                    <p className="text-muted-foreground">
                      プロ仕様の専用洗剤と高圧洗浄機を使用し、内部に潜むカビや汚れを根こそぎ除去します。洗浄後の空気の質の違いを実感してください。
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
            {["飲食店", "事務所", "クリニック", "保育園", "ホテル", "ショッピングセンター", "学校", "介護施設"].map((facility, index) => (
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            業務用エアコンクリーニングの<br />
            <span className="text-primary">お見積もり・ご予約</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            HPからの予約が最安値です！<br className="hidden md:block" />
            まずは無料でお見積もりいたします。<br className="hidden md:block" />
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-6 text-xl">
                予約・お見積もりフォームへ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
