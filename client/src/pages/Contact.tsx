import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/data/siteData";
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
                      <a href={`tel:${contactInfo.phoneRaw}`} className="text-2xl font-bold text-primary hover:underline">
                        {contactInfo.phone}
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        平日: {contactInfo.businessHours.weekday}<br />
                        土日祝: {contactInfo.businessHours.weekend}<br />
                        {contactInfo.businessHours.note}
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
                      <p className="text-muted-foreground mb-4">
                        LINEで気軽にお問い合わせ
                      </p>
                      <Link href="/line">
                        <Button className="bg-[#06C755] hover:bg-[#06C755]/90 text-white">
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
                      <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline break-all">
                        {contactInfo.email}
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">
                        24時間受付（返信は営業時間内）
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    詳しい内容を記載したい方はメールが便利です
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
                      <p className="text-muted-foreground mb-4">
                        24時間いつでも予約可能
                      </p>
                      <Link href="/booking">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          予約フォームへ
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    フォームから必要事項を入力して送信するだけ
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 対応エリア */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">対応エリア</h3>
                    <p className="text-muted-foreground mb-6">
                      沖縄県内の以下のエリアに対応しております
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {contactInfo.serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      ※上記以外のエリアでも対応可能な場合がございます。お気軽にお問い合わせください。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 営業時間 */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">営業時間</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium">平日</span>
                        <span className="text-primary font-bold">{contactInfo.businessHours.weekday}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium">土日祝</span>
                        <span className="text-primary font-bold">{contactInfo.businessHours.weekend}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      {contactInfo.businessHours.note}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-12 text-center bg-muted/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">まずはお気軽にご相談ください</h3>
              <p className="text-muted-foreground mb-6">
                お見積もりは無料です。ご不明な点がございましたらお気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    予約フォームへ
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href={`tel:${contactInfo.phoneRaw}`}>
                  <Button size="lg" variant="outline">
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
