import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, User, MessageCircle } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* ヒーロー - 高さを縮小 */}
      <section className="bg-primary text-primary-foreground py-10 md:py-16">
        <div className="container">
          <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
            店長挨拶
          </h1>
          <p className="text-sm md:text-base max-w-2xl opacity-95 leading-relaxed">
            テバdeクリーンの想いと、店長の経歴をご紹介します
          </p>
        </div>
      </section>

      {/* 店長プロフィール - 位置を引き上げ */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
              <div>
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-md">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <User className="h-24 w-24 text-muted-foreground/30" />
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold mb-3">
                  店長
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-3">
                  テバdeクリーン オーナー
                </h2>
                <div className="flex items-center gap-2 text-primary font-bold text-base mb-4">
                  <Award className="h-5 w-5" />
                  <span>タヒチアンダンス世界王者</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  この度は、テバdeクリーンのホームページをご覧いただき、誠にありがとうございます。
                  オーナーの比嘉 健太と申します。
                </p>
              </div>
            </div>

            {/* メッセージ */}
            <Card className="mb-10 border shadow-sm">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-lg font-bold mb-6 text-center">ご挨拶</h3>
                <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p>
                    私は、タヒチアンダンスの世界王者として活動してきた経験から、<strong className="text-foreground">「徹底的に追求する姿勢」</strong>と<strong className="text-foreground">「細部へのこだわり」</strong>の重要性を学びました。
                  </p>
                  <p>
                    ダンスで培った集中力と丁寧さを、エアコンクリーニングという仕事に活かしています。一台一台のエアコンに真摯に向き合い、お客様に最高の仕上がりをお届けすることが私の使命です。
                  </p>
                  <p>
                    沖縄の高温多湿な気候では、エアコンは生活に欠かせないものです。だからこそ、清潔で快適な空気環境を保つお手伝いをさせていただきたいと考えています。
                  </p>
                  <p>
                    テバdeクリーンは、お客様一人ひとりのご要望に寄り添い、丁寧な作業を心がけております。外注任せにせず、私自身が責任を持って伺います。エアコンクリーニングのことなら、ぜひお任せください。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 経歴・実績 */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">タヒチアンダンス</h3>
                      <p className="text-[13px] text-muted-foreground">
                        世界王者として活躍。国内外の大会で数々の実績を残す。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1">エアコンクリーニング</h3>
                      <p className="text-[13px] text-muted-foreground">
                        大手洗浄店での修行を経て独立。累計700台以上の施工実績。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 私の想い */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black text-foreground mb-3">
              テバdeクリーンの<span className="text-primary">想い</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
            <Card className="border shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-2">お客様第一</h3>
                <p className="text-[13px] text-muted-foreground">
                  お客様の満足が私の喜びです。一つひとつの作業に心を込めて取り組みます。
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-base font-bold mb-2">品質へのこだわり</h3>
                <p className="text-[13px] text-muted-foreground">
                  妥協のない品質を追求し、常に最高の仕上がりを目指します。
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-base font-bold mb-2">地域への貢献</h3>
                <p className="text-[13px] text-muted-foreground">
                  沖縄の皆様に清潔で快適な生活環境を提供することが私の使命です。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-xl md:text-3xl font-black mb-6 leading-tight">
            清潔で<span className="text-primary">快適な空気環境</span>を<br />お届けします
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            エアコンクリーニングのご相談は、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/line">
              <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-base font-bold h-14 px-10 shadow-lg w-full sm:w-auto">
                <MessageCircle className="mr-2 h-6 w-6" />
                LINEで相談する
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-primary text-primary text-base font-bold h-14 px-10 w-full sm:w-auto">
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
