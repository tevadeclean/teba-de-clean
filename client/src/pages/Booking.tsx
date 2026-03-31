import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Booking() {
  useEffect(() => {
    // Jotform embed handler スクリプトを動的に読み込む
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      // スクリプト読み込み後、embed handlerを実行
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-260891459121055']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            ご予約＆お問合せフォーム
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Jotformフォーム */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="pt-6">
                    <iframe
                      id="JotFormIFrame-260891459121055"
                      title="テバdeクリーン ご予約＆お問合せフォーム"
                      onLoad={() => window.parent.scrollTo(0, 0)}
                      allowTransparency={true}
                      allow="geolocation; microphone; camera; fullscreen; payment"
                      src="https://form.jotform.com/260891459121055"
                      frameBorder="0"
                      style={{
                        minWidth: "100%",
                        maxWidth: "100%",
                        height: "539px",
                        border: "none"
                      }}
                      scrolling="no"
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
                    {/* LINE */}
                    <div>
                      <Link href="/line">
                        <Button className="w-full bg-[#00B900] hover:bg-[#00A000] text-white">
                          LINEで予約
                        </Button>
                      </Link>
                      <p className="text-xs text-muted-foreground mt-2">
                        推奨：24時間いつでもご予約可能
                      </p>
                    </div>

                    {/* 電話 */}
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 font-medium mb-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>お電話</span>
                      </div>
                      <a href="tel:050-1720-0053" className="text-primary hover:underline font-semibold">
                        050-1720-0053
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        受付時間: 9:00〜18:00（日曜定休）
                      </p>
                    </div>

                    {/* メール */}
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 font-medium mb-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>メール</span>
                      </div>
                      <a href="mailto:office@teva-de-clean.jp" className="text-primary hover:underline text-sm">
                        office@teva-de-clean.jp
                      </a>
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
                      "日程調整・お見積り",
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void;
  }
}
