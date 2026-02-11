import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Shield, 
  Award,
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  User,
  Heart
} from "lucide-react";

export default function Home() {
  const strengths = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "累計700台以上の施工実績",
      description: "豊富な経験に裏打ちされた確かな技術で、あらゆる汚れに対応します。"
    },
    {
      icon: <User className="h-5 w-5" />,
      title: "オーナー自らが伺う安心対応",
      description: "外注任せにせず、責任を持ってオーナー自らが丁寧に作業いたします。"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "娘を持つパパだから女性も安心",
      description: "清潔感とマナーを徹底。女性の一人暮らしや子育て世帯も安心です。"
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "防カビ・抗菌コートが無料",
      description: "HP・LINE予約限定で、通常有料の抗菌コートを無料で施工いたします。"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "大手洗浄店で修行した確かな技術",
      description: "業界大手の厳しい基準で培った、妥協のない洗浄品質をお約束します。"
    }
  ];

  const steps = [
    { step: "1", title: "お問い合わせ", description: "LINEまたはフォームからお気軽にご連絡ください" },
    { step: "2", title: "日程調整", description: "ご希望の日時をお伺いし、訪問日を決定します" },
    { step: "3", title: "現地調査・見積もり", description: "エアコンの状態を確認し、正確なお見積もりを提示します" },
    { step: "4", title: "クリーニング作業", description: "プロの技術で徹底的に分解洗浄。約2〜3時間で完了します" },
    { step: "5", title: "動作確認・お引き渡し", description: "クリーニング後の動作確認を行い、作業完了です" }
  ];

  return (
    <div className="w-full">
      {/* ヒーローセクション */}
      <section className="relative bg-primary text-primary-foreground py-12 md:py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center bg-accent text-accent-foreground px-2.5 py-0.5 rounded-full text-[11px] md:text-xs font-bold mb-4">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              HP・LINE予約限定：防カビ・抗菌コート無料！
            </div>
            <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
              沖縄のエアコンを<br />
              <span className="text-accent">プロの技術</span>で<br />
              徹底クリーニング
            </h1>
            <p className="text-sm md:text-base mb-6 opacity-95 leading-relaxed">
              家庭用から業務用まで、累計700台以上の実績。<br className="hidden md:block" />
              オーナー自らが伺い、あなたのエアコンを新品同様に蘇らせます。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/line">
                <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-sm h-12 px-6 shadow-md w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  LINEで予約・相談
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white text-sm h-12 px-6 w-full sm:w-auto">
                  予約フォームへ
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5つの強み */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
              テバdeクリーンが<span className="text-primary">選ばれる5つの理由</span>
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {strengths.map((item, index) => (
              <Card key={index} className="border hover:border-primary/30 transition-all duration-300 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2 leading-tight">{item.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* サービス案内 */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
              <span className="text-primary">サービス・料金</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/residential">
              <Card className="group hover:shadow-sm transition-all cursor-pointer border overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">家庭用エアコン</h3>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between items-center border-b pb-1.5">
                      <span className="text-[13px]">お掃除機能なし</span>
                      <span className="font-bold text-base text-primary">¥8,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-1.5">
                      <span className="text-[13px]">お掃除機能あり</span>
                      <span className="font-bold text-base text-primary">¥15,000</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground mb-4">※2台目から1,000円引き</p>
                  <div className="flex items-center text-[13px] font-bold text-primary">
                    詳しく見る
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/commercial">
              <Card className="group hover:shadow-sm transition-all cursor-pointer border overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">業務用エアコン</h3>
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between items-center border-b pb-1.5">
                      <span className="text-[13px]">天井カセット型など</span>
                      <span className="font-bold text-base text-primary">¥25,000〜</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground mb-4">※2台目から10％割引</p>
                  <div className="flex items-center text-[13px] font-bold text-primary">
                    詳しく見る
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 作業の流れ */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
              <span className="text-primary">作業の流れ</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-4 rounded-xl bg-muted/20 border border-transparent hover:border-primary/10 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-black text-sm">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-0.5">{item.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-xl md:text-3xl font-black mb-6 leading-tight">
            まずはお気軽に<br />ご相談ください
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-base h-14 px-8 shadow-lg w-full sm:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" />
                LINEで無料相談
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/40 hover:bg-white/20 text-white text-base h-14 px-8 w-full sm:w-auto">
                予約フォームへ
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-[13px] md:text-sm font-bold text-accent">
            ✨ HP・LINE予約限定：防カビ・抗菌コート無料施工中！
          </p>
        </div>
      </section>
    </div>
  );
}
