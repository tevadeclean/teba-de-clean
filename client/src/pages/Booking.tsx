import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactInfo } from "@/data/siteData";
import { CheckCircle2, Phone, MessageCircle, Info, HelpCircle, AlertTriangle, Gift, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Booking() {
  const preCheckItems = [
    "おそうじ機能付きエアコンの場合は必ず事前にお知らせください（機種により対応できない場合がございます）。",
    "カバーの洗い場として、お風呂場またはベランダをお借りします。",
    "作業に際し、電気と水道をお借りします。",
    "エアコンの下は作業スペースになるため、荷物や家具がある場合は事前に移動をお願いします。",
    "高所に設置してあるエアコン（足場が必要な場合）は、予約時に必ずご連絡ください。",
    "取り外し不可、動作確認不可、異音・故障がある場合は作業を承れないことがございます。",
    "設備の劣化等により、洗浄の際に塗装がはがれてしまう場合があります。",
    "変質や染色などの汚れは、クリーニングでは完全に落とせない場合があります。",
    "10年以上経過している機器については、メーカーの部品供給が終了しているため、保障できない場合があります。"
  ];

  return (
    <div className="min-h-screen bg-white">
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
            
            {/* メニュー・料金一覧表 */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                  <HelpCircle className="w-4 h-4 mr-2 inline" />
                  メニュー・料金一覧
                </Badge>
                <h2 className="text-3xl font-black">どのメニューを選べばいい？</h2>
                <p className="text-muted-foreground mt-2">料金をご確認の上、フォームへお進みください</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-muted overflow-hidden">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead className="w-[180px] font-bold text-foreground">メニュー名</TableHead>
                      <TableHead className="font-bold text-foreground">特徴・選び方</TableHead>
                      <TableHead className="w-[120px] text-right font-bold text-foreground">料金(税込)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold">お掃除機能なし</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        一般的な壁掛けエアコンです。リモコンに「フィルター掃除」などのボタンがありません。
                      </TableCell>
                      <TableCell className="text-right font-black text-primary">9,000円</TableCell>
                    </TableRow>
                    <TableRow className="bg-accent/5">
                      <TableCell className="font-bold text-accent">お掃除機能あり</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        リモコンに「手動掃除」「フィルター掃除」などのボタンがある、または本体に厚みがある機種です。
                      </TableCell>
                      <TableCell className="text-right font-black text-accent">15,000円</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">完全分解洗浄</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        <Badge variant="outline" className="mr-2 text-[10px] h-5">オプション</Badge>
                        ドレンパンまで外して洗う徹底コース。「カビの臭いが気になる」方に最適です。
                      </TableCell>
                      <TableCell className="text-right font-bold text-muted-foreground">+3,000円</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">室外機洗浄</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        <Badge variant="outline" className="mr-2 text-[10px] h-5">オプション</Badge>
                        電気代の節約や故障予防に。エアコンの効きが悪いと感じる場合にもおすすめです。
                      </TableCell>
                      <TableCell className="text-right font-bold text-muted-foreground">+3,000円</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              
              <div className="mt-8 bg-accent/10 p-6 rounded-xl border border-accent/20 flex items-center gap-4 shadow-sm">
                <Gift className="w-10 h-10 text-accent flex-shrink-0" />
                <div>
                  <p className="text-accent font-black text-lg">HP予約限定特典</p>
                  <p className="text-sm font-bold text-accent/80">
                    当サイトからのご予約限定！「防カビ・抗菌コート」を無料で実施させていただきます。
                  </p>
                </div>
              </div>
            </div>

            {/* ご予約前のお願い */}
            <div className="mb-16">
              <Card className="border-none shadow-xl bg-white overflow-hidden">
                <CardHeader className="bg-slate-900 text-white py-6">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-accent" />
                    <CardTitle className="text-xl font-bold">ご予約前にお読みください</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    {preCheckItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-muted rounded-xl flex items-start gap-3">
                    <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      ※当日の急な追加料金は発生しません。気になる点や特殊な設置状況などは、事前にフォームの備考欄またはLINEにてお知らせいただけますとスムーズです。
                    </p>
                  </div>
                </CardContent>
              </Card>
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
                <Card className="shadow-md border-none">
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
                <Card className="shadow-md border-none">
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
