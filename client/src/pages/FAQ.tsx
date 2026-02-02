import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      category: "料金について",
      items: [
        {
          q: "料金はいくらですか?",
          a: "家庭用エアコンは1台¥11,000〜、業務用エアコンは1台¥22,000〜となります。お掃除機能の有無や機種により料金が変動しますので、詳しくはお問い合わせください。"
        },
        {
          q: "見積もりは無料ですか?",
          a: "はい、お見積もりは無料です。お気軽にお問い合わせください。業務用エアコンの現地見積もりは¥3,300かかりますが、施工時は無料となります。"
        },
        {
          q: "支払い方法は?",
          a: "現金、クレジットカード、銀行振込に対応しております。詳しくは予約時にご確認ください。"
        },
        {
          q: "複数台割引はありますか?",
          a: "はい、2台以上同時にご依頼いただくと、1台あたりの料金が割引になります。詳しくは料金ページをご覧ください。"
        }
      ]
    },
    {
      category: "作業について",
      items: [
        {
          q: "作業時間はどのくらいですか?",
          a: "家庭用エアコン1台あたり約2〜3時間です。お掃除機能付きの場合は3〜4時間程度かかります。業務用エアコンは機種により異なりますので、お問い合わせください。"
        },
        {
          q: "作業中は立ち会いが必要ですか?",
          a: "作業開始時と終了時にお立ち会いをお願いしております。作業中は外出していただいても構いません。"
        },
        {
          q: "どのメーカーのエアコンに対応していますか?",
          a: "ダイキン、パナソニック、三菱、日立、東芝、シャープ、富士通など、ほぼ全メーカーに対応しております。"
        },
        {
          q: "お掃除機能付きエアコンもクリーニングできますか?",
          a: "はい、対応しております。お掃除機能付きエアコンは通常のエアコンより料金が高くなります。"
        },
        {
          q: "室外機のクリーニングもできますか?",
          a: "はい、オプションで室外機クリーニング（¥3,300）も承っております。"
        }
      ]
    },
    {
      category: "予約について",
      items: [
        {
          q: "予約はどのようにすればいいですか?",
          a: "お電話、LINE、予約フォームからご予約いただけます。お客様のご都合に合わせてお選びください。"
        },
        {
          q: "当日予約は可能ですか?",
          a: "空きがあれば可能ですが、事前予約をおすすめします。まずはお電話でご相談ください。"
        },
        {
          q: "キャンセルはできますか?",
          a: "前日までのキャンセルは無料です。当日キャンセルの場合はキャンセル料が発生する場合がございます。"
        },
        {
          q: "土日祝日も対応していますか?",
          a: "土曜日は営業しております。日曜日は定休日となります。祝日は営業している場合がありますので、お問い合わせください。"
        }
      ]
    },
    {
      category: "その他",
      items: [
        {
          q: "対応エリアはどこですか?",
          a: "沖縄県内全域に対応しております。離島については別途ご相談ください。"
        },
        {
          q: "クリーニング後、どのくらい効果が持続しますか?",
          a: "使用環境にもよりますが、1〜2年程度効果が持続します。定期的なクリーニングをおすすめします。"
        },
        {
          q: "エアコンが古くても大丈夫ですか?",
          a: "はい、古いエアコンでもクリーニング可能です。ただし、劣化が激しい場合はクリーニングをお断りする場合がございます。"
        },
        {
          q: "賠償責任保険には加入していますか?",
          a: "はい、万が一の事故に備えて賠償責任保険に加入しております。安心してご依頼ください。"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            よくある質問
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95">
            お客様からよくいただくご質問をまとめました。こちらにない質問はお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-4 text-primary">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem 
                      key={itemIndex} 
                      value={`${categoryIndex}-${itemIndex}`}
                      className="border rounded-lg px-6 bg-card"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <span className="text-left font-medium">{item.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-muted/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">その他のご質問はお気軽に</h3>
              <p className="text-muted-foreground mb-6">
                こちらに掲載されていないご質問や、詳しい内容についてはお問い合わせください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    予約・お問い合わせ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:098-XXX-XXXX">
                  <Button size="lg" variant="outline">
                    電話で相談
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
