import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      category: "料金について",
      items: [
        {
          q: "料金はいくらですか?",
          a: "家庭用エアコン（お掃除機能なし）は1台8,000円、お掃除機能付きは1台15,000円となります。業務用エアコンは1台25,000円〜となります。すべて税込価格です。"
        },
        {
          q: "複数台割引はありますか?",
          a: "はい、家庭用エアコンは2台目から1,000円引き、業務用エアコンは2台目から10％割引させていただきます。"
        },
        {
          q: "見積もりは無料ですか?",
          a: "はい、お見積もりは無料です。LINEでエアコンの写真を送っていただければ、より正確な概算見積もりをお出しすることも可能です。"
        },
        {
          q: "支払い方法は?",
          a: "現金、クレジットカード、銀行振込に対応しております。詳しくは作業完了時にご確認ください。"
        }
      ]
    },
    {
      category: "特典・オプションについて",
      items: [
        {
          q: "防カビ・抗菌コート無料特典とは何ですか？",
          a: "公式HPまたは公式LINEからご予約いただいたお客様限定で、通常オプションの「防カビ・抗菌コート」を無料で施工させていただきます。カビの繁殖を抑え、清潔な状態を長持ちさせます。"
        },
        {
          q: "完全分解洗浄とは何ですか？",
          a: "通常の洗浄では届かないドレンパンやファンを取り外して、隅々まで徹底的に洗浄するオプション（+8,000円）です。カビや汚れを根こそぎ除去したい方におすすめです。"
        },
        {
          q: "室外機の掃除も必要ですか？",
          a: "室外機が汚れていると、冷暖房の効率が落ち、電気代が高くなったり故障の原因になったりします。オプション（+3,000円）で承っております。"
        }
      ]
    },
    {
      category: "作業について",
      items: [
        {
          q: "作業時間はどのくらいですか?",
          a: "家庭用エアコン1台あたり約2〜3時間です。お掃除機能付きの場合は3〜4時間程度かかります。業務用エアコンは機種や汚れ具合により異なります。"
        },
        {
          q: "作業中は立ち会いが必要ですか?",
          a: "作業開始時の動作確認と、終了時のご確認にお立ち会いをお願いしております。作業中はお出かけいただいても構いません。"
        },
        {
          q: "どのメーカーのエアコンに対応していますか?",
          a: "ダイキン、パナソニック、三菱、日立、東芝、シャープ、富士通など、国内主要メーカーのほぼ全機種に対応しております。"
        }
      ]
    },
    {
      category: "予約・エリアについて",
      items: [
        {
          q: "予約はどのようにすればいいですか?",
          a: "公式LINEまたは予約フォームから承っております。LINE予約限定の特典もございますので、LINEからのご予約がおすすめです。"
        },
        {
          q: "対応エリアはどこですか?",
          a: "沖縄県内全域に対応しております。離島については別途ご相談ください。"
        },
        {
          q: "土日祝日も対応していますか?",
          a: "土曜日・祝日も営業しております。日曜日は定休日となりますが、お急ぎの場合はご相談ください。"
        }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* ヒーロー */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-black mb-8">
            よくある質問
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95 leading-relaxed">
            お客様からよくいただくご質問をまとめました。こちらにない質問はお気軽にお問い合わせください。
          </p>
          <div className="mt-8 inline-flex items-center bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold">
            <Sparkles className="mr-2 h-5 w-5" />
            HP・LINE予約限定：防カビ・抗菌コート無料！
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h2 className="text-3xl font-black text-primary border-b-4 border-primary/10 pb-2 inline-block">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem 
                      key={itemIndex} 
                      value={`${categoryIndex}-${itemIndex}`}
                      className="border-2 rounded-xl px-6 bg-card shadow-sm hover:border-primary/50 transition-colors"
                    >
                      <AccordionTrigger className="hover:no-underline py-6">
                        <span className="text-left font-bold text-lg">{item.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed border-t pt-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <div className="max-w-3xl mx-auto bg-muted/50 rounded-3xl p-10 md:p-16 shadow-inner">
              <h3 className="text-3xl font-black mb-6">解決しない場合は<br className="md:hidden" />LINEでご相談</h3>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                写真をお送りいただければ、より具体的な回答やお見積もりが可能です。<br className="hidden md:block" />
                24時間いつでもメッセージをお送りください。
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/line">
                  <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-xl px-10 py-8 shadow-xl w-full sm:w-auto">
                    <MessageCircle className="mr-3 h-8 w-8" />
                    LINEで相談する
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button size="lg" variant="outline" className="border-primary text-primary text-xl px-10 py-8 w-full sm:w-auto">
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
