import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  const areas = [
    "那覇市", "浦添市", "宜野湾市", "沖縄市", "うるま市", "糸満市", "豊見城市", "南城市",
    "島尻郡南風原町", "島尻郡与那原町", "島尻郡八重瀬町",
    "中頭郡北中城村", "中頭郡中城村", "中頭郡西原町", "中頭郡嘉手納町", "中頭郡読谷村", "中頭郡北谷町",
    "国頭郡恩納村", "国頭郡宜野座村", "国頭郡金武町"
  ];

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
                          沖縄本島内（詳細は下記リスト参照）<br />
                          ※離島についても団体様などは対応可能です。お気軽にご相談ください。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 対応エリア詳細 */}
            <Card className="mb-16 border-2 border-primary/10">
              <CardContent className="p-10 md:p-16">
                <h2 className="text-2xl md:text-3xl font-black mb-10">主な対応エリア</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-3 text-base">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-dashed">
                  <p className="text-muted-foreground leading-relaxed">
                    ※上記以外のエリアや離島にお住まいの方も、団体様（複数台施工）などの場合は対応可能な場合がございます。まずはお気軽にお問い合わせください。
                  </p>
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
