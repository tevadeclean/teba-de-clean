import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function Line() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground py-16 md:py-24">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <MessageCircle className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-black">
              LINE予約
            </h1>
          </div>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            LINEで簡単に予約・お問い合わせができます。お気軽にメッセージをお送りください。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* LINE予約のメリット */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                LINEで予約する<span className="text-primary">メリット</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">簡単・スピーディー</h3>
                  <p className="text-sm text-muted-foreground">
                    フォーム入力不要。チャット感覚で気軽にお問い合わせ
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">写真も送れる</h3>
                  <p className="text-sm text-muted-foreground">
                    エアコンの写真を送ることで、より正確な見積もりが可能
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">やり取りが残る</h3>
                  <p className="text-sm text-muted-foreground">
                    予約内容や日程がトーク履歴に残るので安心
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* QRコード・友だち追加ボタン */}
            <Card className="mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6">友だち追加はこちら</h3>
                  
                  {/* QRコードエリア */}
                  <div className="max-w-xs mx-auto mb-8">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MessageCircle className="h-24 w-24 text-muted-foreground/30 mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground">
                          LINE QRコードをここに配置
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      スマートフォンのカメラでQRコードを読み取ってください
                    </p>
                  </div>

                  {/* 友だち追加ボタン */}
                  <div className="space-y-4">
                    <a 
                      href="https://line.me/R/ti/p/@XXXXXXX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button 
                        size="lg" 
                        className="bg-[#06C755] hover:bg-[#06C755]/90 text-white px-8"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        LINEで友だち追加
                      </Button>
                    </a>
                    <p className="text-xs text-muted-foreground">
                      ※LINE IDで検索: @XXXXXXX
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 予約の流れ */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">LINE予約の流れ</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "友だち追加",
                    description: "上記のQRコードまたはボタンから友だち追加"
                  },
                  {
                    step: "2",
                    title: "メッセージ送信",
                    description: "予約希望の旨と、お名前・希望日時・サービス内容をお送りください"
                  },
                  {
                    step: "3",
                    title: "担当者から返信",
                    description: "担当者より詳細確認のメッセージをお送りします"
                  },
                  {
                    step: "4",
                    title: "日程確定",
                    description: "お互いの都合を調整し、訪問日時を確定します"
                  }
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-black text-lg flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 注意事項 */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">ご注意</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 営業時間外のメッセージは翌営業日に返信いたします</li>
                  <li>• 受付時間：9:00〜18:00（日曜定休）</li>
                  <li>• お急ぎの場合はお電話（098-XXX-XXXX）でのお問い合わせをおすすめします</li>
                </ul>
              </CardContent>
            </Card>

            {/* その他の予約方法 */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">その他の予約方法もご利用いただけます</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button variant="outline" size="lg">
                    予約フォームへ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:098-XXX-XXXX">
                  <Button variant="outline" size="lg">
                    電話で予約
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
