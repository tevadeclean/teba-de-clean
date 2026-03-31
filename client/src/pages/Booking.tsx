import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Booking() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            予約フォーム
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95">
            エアコンクリーニングのご予約は、こちらのフォームからお申し込みください。お見積もりは無料です。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Jotformフォーム */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">予約情報を入力</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <iframe
                      id="JotFormIFrame"
                      title="テバdeクリーン　ご予約＆お問合せフォーム"
                      onLoad={() => {
                        const iframe = document.getElementById("JotFormIFrame") as HTMLIFrameElement;
                        if (iframe) {
                          iframe.style.height = iframe.contentWindow?.document.body.scrollHeight + "px";
                        }
                      }}
                      src="https://form.jotform.com/260891459121055"
                      style={{
                        width: "100%",
                        height: "600px",
                        border: "none",
                        borderRadius: "0.5rem"
                      }}
                      allow="geolocation; microphone; camera"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* サイドバー */}
              <div className="space-y-6">
                {/* お問い合わせ方法 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">その他のお問い合わせ方法</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 font-medium mb-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>お電話</span>
                      </div>
                      <a href="tel:098-XXX-XXXX" className="text-primary hover:underline">
                        098-XXX-XXXX
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        受付時間: 9:00〜18:00（日曜定休）
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 font-medium mb-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>メール</span>
                      </div>
                      <a href="mailto:info@tebadeclean.com" className="text-primary hover:underline text-sm">
                        info@tebadeclean.com
                      </a>
                    </div>

                    <div>
                      <Link href="/line">
                        <Button variant="outline" className="w-full">
                          LINEで予約
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* 予約の流れ */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">予約の流れ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "フォーム送信",
                      "担当者から連絡",
                      "日程調整・見積もり",
                      "クリーニング実施"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* 注意事項 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">ご注意</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>お見積もりは無料です</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>繁忙期は予約が取りにくい場合があります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>キャンセルは前日までにご連絡ください</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
