import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/data/siteData";
import { CheckCircle2, Phone, Mail, MessageCircle, Info, Sparkles, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Booking() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            ご予約・お問い合わせ
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95">
            エアコンクリーニングのご予約は、以下のフォームからお申し込みください。お見積もりは無料です。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            
            {/* メニューの選び方ガイド */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                  <HelpCircle className="w-4 h-4 mr-2 inline" />
                  メニューの選び方ガイド
                </Badge>
                <h2 className="text-3xl font-black">どのメニューを選べばいい？</h2>
                <p className="text-muted-foreground mt-2">フォーム入力前にご確認ください</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">1</div>
                      お掃除機能の有無
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-bold text-sm mb-1">お掃除機能なし（通常機）</p>
                      <p className="text-xs text-muted-foreground">一般的な壁掛けエアコンです。リモコンに「フィルター掃除」などのボタンがありません。</p>
                    </div>
                    <div className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                      <p className="font-bold text-sm mb-1 text-accent">お掃除機能あり</p>
                      <p className="text-xs text-muted-foreground">リモコンに「手動掃除」「フィルター掃除」などのボタンがある、または本体に厚みがある機種です。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">2</div>
                      おすすめオプション
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <p className="font-bold text-sm mb-1">完全分解洗浄</p>
                      <p className="text-xs text-muted-foreground">「カビの臭いが気になる」「数年洗っていない」方に最適。ドレンパンまで外して洗う徹底コースです。</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-bold text-sm mb-1">室外機洗浄</p>
                      <p className="text-xs text-muted-foreground">電気代の節約や故障予防に。エアコンの効きが悪いと感じる場合にもおすすめです。</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 bg-accent/10 p-4 rounded-xl border border-accent/20 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="text-sm font-bold text-accent">
                  当サイトからのご予約限定！「防カビ・抗菌コート」を無料で実施させていただきます。
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Googleフォーム埋め込み */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-muted">
                  <div className="bg-primary p-4 text-primary-foreground text-center font-bold">
                    予約・お問い合わせフォーム
                  </div>
                  <div className="relative w-full" style={{ paddingTop: "150%" }}>
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdCEzXE3dcVqFlIUqz_aH-bWxEazMx4TTkPcTMdycFnk0HSGw/viewform?embedded=true" 
                      className="absolute top-0 left-0 w-full h-full border-0"
                      title="予約フォーム"
                    >
                      読み込み中…
                    </iframe>
                  </div>
                </div>
              </div>

              {/* サイドバー */}
              <div className="space-y-6">
                {/* 予約の流れ */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      予約の流れ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4 text-sm">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">1</span>
                        <span>フォームに必要事項を入力して送信</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">2</span>
                        <span>店長より内容確認のご連絡（電話またはメール）</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">3</span>
                        <span>日程の確定・予約完了</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">4</span>
                        <span>当日、丁寧にお掃除させていただきます！</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                {/* その他の連絡方法 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">お急ぎの方・その他の方法</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-primary" />
                        お電話で予約
                      </h4>
                      <a href={`tel:${contactInfo.phoneRaw}`} className="text-2xl font-black text-primary hover:underline">
                        {contactInfo.phone}
                      </a>
                      <p className="text-[10px] text-muted-foreground mt-1">
                        受付: {contactInfo.businessHours.weekday} / {contactInfo.businessHours.weekend}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2 text-sm">
                        <MessageCircle className="h-4 w-4 text-[#06C755]" />
                        LINEで相談
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">写真を送っての見積もりも可能です</p>
                      <Link href="/line">
                        <Button variant="outline" className="w-full border-[#06C755] text-[#06C755] hover:bg-[#06C755]/10 font-bold">
                          LINE公式アカウント
                        </Button>
                      </Link>
                    </div>

                    <div className="pt-4 border-t border-muted">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-[10px] text-muted-foreground leading-relaxed">
                          ※作業中はお電話に出られない場合がございます。その際は折り返しご連絡させていただきます。
                        </p>
                      </div>
                    </div>
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
