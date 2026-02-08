import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Info, Sparkles } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Booking() {
  const [agreed, setAgreed] = useState(false);

  const requirements = [
    "おそうじ機能付きエアコンの場合は必ず事前にお知らせください（機種により対応出来ない場合がございます）",
    "カバーの洗い場として、お風呂またはベランダをお借りします",
    "作業に際し、電気と水道をお借りします",
    "エアコンの下は作業スペースになるため、荷物や家具がある場合は事前に移動をお願いします",
    "高所に設置してあるエアコンの場合、足場を作る必要があるため予約時にご連絡ください",
    "取り外し不可、動作確認不可、異音・故障がある場合は作業を承れないことがあります",
    "専用の道具・洗剤を使用しますが、設備の劣化等により塗装がはがれる場合があります",
    "変質や染色などの汚れは、クリーニングでは完全に落とせない場合があります",
    "10年以上経過している機器については保障できない場合があります"
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black mb-4">ご予約・お見積もり</h1>
          <p className="text-muted-foreground">
            以下の内容をご確認の上、フォームよりお申し込みください。
          </p>
        </div>

        {/* 1. メニュー・料金ガイド */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
              <Info className="w-4 h-4 mr-2" />
              メニューの選び方・料金ガイド
            </Badge>
          </div>
          
          <Card className="border-2 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead className="w-[200px] font-bold text-foreground">メニュー名</TableHead>
                      <TableHead className="font-bold text-foreground">特徴・選び方</TableHead>
                      <TableHead className="w-[120px] text-right font-bold text-foreground">料金(税込)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold">家庭用（お掃除機能なし）</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        一般的な壁掛けエアコンです。リモコンに「フィルター掃除」などのボタンがありません。
                      </TableCell>
                      <TableCell className="text-right font-black text-primary">8,000円</TableCell>
                    </TableRow>
                    <TableRow className="bg-accent/5">
                      <TableCell className="font-bold text-accent">家庭用（お掃除機能あり）</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        リモコンに「手動掃除」「フィルター掃除」などのボタンがある、または本体に厚みがある機種です。
                      </TableCell>
                      <TableCell className="text-right font-black text-accent">15,000円</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">業務用エアコン</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        店舗・オフィス用の天井カセット型、吊り下げ型など。全機種対応いたします。
                      </TableCell>
                      <TableCell className="text-right font-black text-primary">25,000円〜</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">完全分解洗浄</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        <Badge variant="secondary" className="mr-2">オプション</Badge>
                        ドレンパンまで外して洗う徹底コース。「カビの臭いが気になる」方に最適です。
                      </TableCell>
                      <TableCell className="text-right font-bold text-foreground">+3,000円</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">室外機洗浄</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        <Badge variant="secondary" className="mr-2">オプション</Badge>
                        電気代の節約や故障予防に。エアコンの効きが悪いと感じる場合にもおすすめです。
                      </TableCell>
                      <TableCell className="text-right font-bold text-foreground">+3,000円</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="p-4 bg-primary/5 border-t border-primary/10 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <p className="text-sm font-bold text-primary">
                  当サイトからのご予約限定：防カビ・抗菌コートを無料で施工いたします！
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 2. 事前確認事項 */}
        <section className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 px-3 py-1">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              ご予約前の確認事項
            </Badge>
          </div>

          <Card className="border-2 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-4 mb-8">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p>{req}</p>
                  </div>
                ))}
              </div>

              <div className="bg-muted p-4 rounded-lg flex items-center justify-center gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label htmlFor="agree" className="font-bold cursor-pointer select-none">
                  上記の確認事項に同意します
                </label>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 3. Googleフォーム */}
        <section className={`transition-opacity duration-500 ${agreed ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">予約・お見積もりフォーム</h2>
            {!agreed && <p className="text-sm text-destructive font-bold">※上の確認事項に同意いただくと入力可能になります</p>}
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary/20">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdCEzXE3dcVqFlIUqz_aH-bWxEazMx4TTkPcTMdycFnk0HSGw/viewform?embedded=true" 
              width="100%" 
              height="1200" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
            >
              読み込み中…
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
