import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  Shield, 
  Clock, 
  ThumbsUp, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  Users,
  Heart,
  Award
} from "lucide-react";

export default function Home() {
  const strengths = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "累計700台以上の施工実績",
      description: "豊富な経験に裏打ちされた確かな技術で、あらゆる汚れに対応します。"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "オーナー自らが伺う安心対応",
      description: "外注任せにせず、責任を持ってオーナー自らが丁寧に作業いたします。"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "娘を持つパパだから女性も安心",
      description: "清潔感とマナーを徹底。女性の一人暮らしや子育て世帯も安心です。"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "防カビ・抗菌コートが無料",
      description: "HP・LINE予約限定で、通常有料の抗菌コートを無料で施工いたします。"
    },
    {
      icon: <Shield className="h-6 w-6" />,
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
      <section className="relative bg-primary text-primary-foreground py-16 md:py-24 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold mb-6">
              <Sparkles className="mr-2 h-4 w-4" />
              HP・LINE予約限定：防カビ・抗菌コート無料！
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              沖縄のエアコンを<br />
              <span className="text-accent">プロの技術</span>で<br />
              徹底クリーニング
            </h1>
            <p className="text-base md:text-lg mb-8 opacity-95 leading-relaxed">
              家庭用から業務用まで、累計700台以上の実績。<br className="hidden md:block" />
              オーナー自らが伺い、あなたのエアコンを新品同様に蘇らせます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/line">
                <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-base px-8 py-6 shadow-lg w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  LINEで予約・相談
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20 text-white text-base px-8 py-6 w-full sm:w-auto">
                  予約フォームへ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5つの強み */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              テバdeクリーンが<span className="text-primary">選ばれる5つの理由</span>
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {strengths.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 shadow-sm">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* サービス案内 */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              <span className="text-primary">サービス・料金</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/residential">
              <Card className="group hover:shadow-md transition-all cursor-pointer border-2 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">家庭用エアコン</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm">お掃除機能なし</span>
                      <span className="font-bold text-lg text-primary">¥8,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm">お掃除機能あり</span>
                      <span className="font-bold text-lg text-primary">¥15,000</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6">※2台目から1,000円引き</p>
                  <div className="flex items-center text-sm font-bold text-primary">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/commercial">
              <Card className="group hover:shadow-md transition-all cursor-pointer border-2 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">業務用エアコン</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm">天井カセット型など</span>
                      <span className="font-bold text-lg text-primary">¥25,000〜</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6">※2台目から10％割引</p>
                  <div className="flex items-center text-sm font-bold text-primary">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 作業の流れ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
              <span className="text-primary">作業の流れ</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-6 items-start p-6 rounded-2xl bg-muted/20 border border-transparent hover:border-primary/10 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-black text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-8 leading-tight">
            まずはお気軽に<br />ご相談ください
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-lg px-10 py-7 shadow-xl w-full sm:w-auto">
                <MessageCircle className="mr-3 h-6 w-6" />
                LINEで無料相談
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/40 hover:bg-white/20 text-white text-lg px-10 py-7 w-full sm:w-auto">
                予約フォームへ
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm md:text-base font-bold text-accent">
            ✨ HP・LINE予約限定：防カビ・抗菌コート無料施工中！
          </p>
        </div>
      </section>
    </div>
  );
}
