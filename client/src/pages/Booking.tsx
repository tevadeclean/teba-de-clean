import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Info, Sparkles } from "lucide-react";

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

  const pricingData = [
    { name: "家庭用（お掃除機能なし）", desc: "一般的な壁掛けエアコンです。リモコンに「フィルター掃除」などのボタンがありません。", price: "8,000円", highlight: false },
    { name: "家庭用（お掃除機能あり）", desc: "リモコンに「手動掃除」「フィルター掃除」などのボタンがある、または本体に厚みがある機種です。", price: "15,000円", highlight: false },
    { name: "業務用エアコン", desc: "店舗・オフィス用の天井カセット型、吊り下げ型など。全機種対応いたします。", price: "25,000円〜", highlight: false },
    { name: "完全分解洗浄", desc: "ドレンパンまで外して洗う徹底コース。「カビの臭いが気になる」方に最適です。", price: "+3,000円", isOption: true },
    { name: "室外機洗浄", desc: "電気代の節約や故障予防に。エアコンの効きが悪いと感じる場合にもおすすめです。", price: "+3,000円", isOption: true },
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-8 md:py-12">
      <div className="container max-w-4xl px-4">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-black mb-3 md:mb-4">ご予約・お見積もり</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            以下の内容をご確認の上、フォームよりお申し込みください。
          </p>
        </div>

        {/* 1. メニュー・料金ガイド */}
        <section className="mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
              <Info className="w-4 h-4 mr-2" />
              メニューの選び方・料金ガイド
            </Badge>
          </div>
          
          <Card className="border-2 shadow-sm overflow-hidden">
            <CardContent className="p-0">
              {/* PC用テーブル表示 */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="p-4 font-bold text-foreground">メニュー名</th>
                      <th className="p-4 font-bold text-foreground">特徴・選び方</th>
                      <th className="p-4 text-right font-bold text-foreground w-[140px]">料金(税込)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {pricingData.map((item, i) => (
                      <tr key={i} className={item.highlight ? "bg-accent/5" : ""}>
                        <td className={`p-4 font-bold ${item.highlight ? "text-accent" : ""}`}>{item.name}</td>
                        <td className="p-4 text-sm text-muted-foreground">
                          {item.isOption && <Badge variant="secondary" className="mr-2">オプション</Badge>}
                          {item.desc}
                        </td>
                        <td className={`p-4 text-right font-black ${item.highlight ? "text-accent" : item.isOption ? "text-foreground" : "text-primary"}`}>
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* スマホ用リスト表示（横スクロールなし） */}
              <div className="md:hidden divide-y">
                {pricingData.map((item, i) => (
                  <div key={i} className={`p-4 ${item.highlight ? "bg-accent/5" : ""}`}>
                    <div className="flex justify-between items-start mb-1">
                      <div className={`font-bold text-base ${item.highlight ? "text-accent" : ""}`}>
                        {item.name}
                      </div>
                      <div className={`font-black text-lg ${item.highlight ? "text-accent" : item.isOption ? "text-foreground" : "text-primary"}`}>
                        {item.price}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {item.isOption && <Badge variant="secondary" className="mr-1 scale-75 origin-left">オプション</Badge>}
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 md:p-4 bg-primary/5 border-t border-primary/10 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-[11px] md:text-sm font-bold text-primary text-center">
                  当サイトからのご予約限定：防カビ・抗菌コートを無料で施工いたします！
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 2. 事前確認事項 */}
        <section className="mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 px-3 py-1">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              ご予約前の確認事項
            </Badge>
          </div>

          <Card className="border-2 shadow-sm">
            <CardContent className="p-5 md:p-8">
              <div className="grid gap-3 md:gap-4 mb-6 md:mb-8">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs md:text-base text-muted-foreground">
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
                <label htmlFor="agree" className="font-bold text-sm md:text-base cursor-pointer select-none">
                  上記の確認事項に同意します
                </label>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 3. Googleフォーム */}
        <section className={`transition-opacity duration-500 ${agreed ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-2">予約・お見積もりフォーム</h2>
            {!agreed && <p className="text-xs md:text-sm text-destructive font-bold">※上の確認事項に同意いただくと入力可能になります</p>}
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
