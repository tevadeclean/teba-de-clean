import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            店舗情報・お問い合わせ
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            テバdeクリーンへのお問い合わせ方法と店舗情報をご案内します
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* 連絡先情報 */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">お電話</h3>
                      <a href="tel:098-XXX-XXXX" className="text-2xl font-bold text-primary hover:underline">
                        098-XXX-XXXX
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        受付時間: 9:00〜18:00<br />
                        定休日: 日曜日
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    お急ぎの方、直接相談したい方はお電話が便利です
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">LINE</h3>
                      <p className="text-muted-foreground">
                        LINE ID: @XXXXXXX
                      </p>
                      <Link href="/line">
                        <Button className="mt-4 bg-[#06C755] hover:bg-[#06C755]/90 text-white">
                          友だち追加
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    チャット感覚で気軽にお問い合わせ。写真も送れます
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">メール</h3>
                      <a href="mailto:info@tebadeclean.com" className="text-primary hover:underline break-all">
                        info@tebadeclean.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        24時間受付<br />
                        返信は営業時間内に行います
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    詳細な内容を送りたい方におすすめ
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">予約フォーム</h3>
                      <Link href="/booking">
                        <Button className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                          フォームへ
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    24時間いつでも予約申し込みが可能
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 店舗情報 */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">店舗情報</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">所在地</h3>
                      <p className="text-muted-foreground">
                        沖縄県[市町村名][住所]<br />
                        ※詳細な住所はお問い合わせ時にお伝えします
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">営業時間</h3>
                      <p className="text-muted-foreground">
                        9:00〜18:00<br />
                        定休日: 日曜日
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">対応エリア</h3>
                      <p className="text-muted-foreground">
                        沖縄県内全域<br />
                        ※離島については別途ご相談ください
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 対応エリア詳細 */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">主な対応エリア</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "那覇市", "浦添市", "宜野湾市", "沖縄市", "うるま市", "名護市",
                    "糸満市", "豊見城市", "南城市", "宮古島市", "石垣市", "その他県内全域"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  ※上記以外のエリアでも対応可能な場合がございます。お気軽にお問い合わせください。
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-black mb-4">
                まずはお気軽に<br />
                <span className="text-accent">お問い合わせください</span>
              </h2>
              <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
                お見積もりは無料です。エアコンクリーニングのことなら、テバdeクリーンにお任せください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    予約フォームへ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:098-XXX-XXXX">
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground">
                    電話で相談
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
