import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full">
      {/* ヒーロー */}
      <section className="bg-secondary text-secondary-foreground py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-black mb-8">
            店舗情報・お問い合わせ
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90 leading-relaxed">
            テバdeクリーンへのお問い合わせ方法と店舗情報をご案内します。
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* 連絡先情報 */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-10">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">お電話</h3>
                      <a href="tel:098-XXX-XXXX" className="text-3xl font-black text-primary hover:underline">
                        098-XXX-XXXX
                      </a>
                      <div className="text-base text-muted-foreground mt-4 space-y-1">
                        <p>平日: 9:00〜17:00</p>
                        <p>土日祝: 9:00〜14:00</p>
                        <p className="text-accent font-bold">※時間外も柔軟に対応可能です！</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    直接相談したい方はお電話が便利です。作業中など出られない場合は折り返しご連絡いたします。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[#06C755] transition-colors">
                <CardContent className="p-10">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-14 h-14 rounded-full bg-[#06C755]/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-7 w-7 text-[#06C755]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">公式LINE</h3>
                      <p className="text-muted-foreground mb-4">
                        画像のやり取りがスムーズで便利です
                      </p>
                      <Link href="/line">
                        <Button className="bg-[#06C755] hover:bg-[#05b34c] text-white text-lg px-8 py-6 shadow-md">
                          LINEで相談・予約
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    24時間受付中。エアコンの写真を送っていただければ、より正確なお見積もりが可能です。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-10">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-7 w-7 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">メール</h3>
                      <a href="mailto:info@tebadeclean.com" className="text-primary font-bold hover:underline break-all text-lg">
                        info@tebadeclean.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-4">
                        24時間受付<br />
                        返信は営業時間内に行います
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    法人様や、詳細な内容をメールで送りたい方におすすめです。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-10">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">予約フォーム</h3>
                      <Link href="/booking">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-md">
                          フォームへ進む
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    必要事項を入力するだけで、24時間いつでも予約申し込みが可能です。
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 店舗情報 */}
            <Card className="mb-16 border-none bg-muted/30">
              <CardContent className="p-10 md:p-16">
                <h2 className="text-3xl font-black mb-10 flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-primary" />
                  店舗情報
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <MapPin className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">所在地</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          沖縄県[市町村名][住所]<br />
                          ※詳細な住所はお問い合わせ時にお伝えします
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <Clock className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">営業時間</h3>
                        <div className="text-muted-foreground leading-relaxed space-y-1">
                          <p>平日: 9:00〜17:00</p>
                          <p>土日祝: 9:00〜14:00</p>
                          <p className="text-accent font-bold mt-2">※時間外の作業も柔軟に対応可能です！</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <MapPin className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">対応エリア</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          沖縄県内全域<br />
                          ※離島については別途ご相談ください
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 shadow-xl">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                まずはお気軽に<br />
                <span className="text-accent">お問い合わせください</span>
              </h2>
              <p className="text-xl opacity-95 mb-12 max-w-3xl mx-auto leading-relaxed">
                お見積もりは無料です。エアコンクリーニングのことなら、テバdeクリーンにお任せください。
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/line">
                  <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-xl px-12 py-8 shadow-2xl w-full sm:w-auto">
                    <MessageCircle className="mr-3 h-8 w-8" />
                    LINEで相談
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/40 hover:bg-white/20 text-white text-xl px-12 py-8 w-full sm:w-auto">
                    予約フォームへ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
