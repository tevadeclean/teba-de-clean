import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, QrCode, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function Line() {
  const steps = [
    {
      title: "友だち追加",
      description: "下のボタンまたはQRコードから「テバdeクリーン」を友だち追加してください。"
    },
    {
      title: "メッセージ送信",
      description: "「予約希望」または「相談希望」とメッセージを送ってください。自動返信が届きます。"
    },
    {
      title: "詳細の入力",
      description: "ご希望のメニュー、日時、お名前、ご住所などの詳細をお送りください。"
    },
    {
      title: "予約確定",
      description: "スタッフが内容を確認し、折り返しご連絡いたします。これで予約完了です！"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* ヒーロー */}
      <section className="bg-[#06C755] text-white py-16 md:py-24">
        <div className="container text-center">
          <div className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full font-bold mb-6">
            <MessageCircle className="mr-2 h-5 w-5" />
            24時間受付中
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            LINEでかんたん予約・相談
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            写真をお送りいただければ、より正確なお見積もりも可能です。お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* 左側：案内 */}
              <div>
                <div className="bg-accent text-accent-foreground inline-block px-4 py-1 rounded font-bold mb-4">
                  限定特典
                </div>
                <h2 className="text-3xl font-black mb-6">
                  LINEからのご予約で<br />
                  <span className="text-[#06C755]">防カビコート無料！</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  公式LINEからのお申し込み限定で、通常オプションの「防カビ・抗菌コート」を無料で施工させていただきます。
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#06C755]" />
                    <span className="font-bold">24時間いつでもメッセージOK</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#06C755]" />
                    <span className="font-bold">写真で概算見積もりが可能</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#06C755]" />
                    <span className="font-bold">キャンペーン情報をいち早くお届け</span>
                  </div>
                </div>

                <a href="https://lin.ee/H2AkpZP" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white text-xl py-8 shadow-xl">
                    <MessageCircle className="mr-3 h-8 w-8" />
                    LINE友だち追加
                  </Button>
                </a>
              </div>

              {/* 右側：QRコード */}
              <Card className="border-4 border-[#06C755]">
                <CardContent className="p-8 text-center">
                  <div className="bg-white p-4 rounded-xl shadow-inner mb-6 inline-block">
                    <img 
                      src="https://qr-official.line.me/gs/M_582sxuum_GW.png?oat__id=6346635&oat_content=qr" 
                      alt="LINE QR Code"
                      className="w-48 h-48 md:w-64 md:h-64"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    スマートフォンでQRコードを読み取ってください
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 予約の流れ */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-bold mb-10 text-center">LINE予約の流れ</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#06C755] text-white flex items-center justify-center font-black text-xl mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-center mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-6 -right-4 text-[#06C755]">
                        <ArrowRight className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">よくある質問</h3>
            <Card className="text-left">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-bold mb-2">Q. 夜間に送っても大丈夫ですか？</h4>
                  <p className="text-sm text-muted-foreground">A. はい、24時間いつでもお送りください。スタッフが確認次第、営業時間内に順次お返事させていただきます。</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Q. 概算の見積もりはもらえますか？</h4>
                  <p className="text-sm text-muted-foreground">A. エアコンの型番や設置状況の写真を送っていただければ、より正確な概算見積もりをお出しすることが可能です。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
