import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-accent-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            店長挨拶
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            テバdeクリーンの想いと、店長の経歴をご紹介します
          </p>
        </div>
      </section>

      {/* 店長プロフィール */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                  {/* 店長の写真をここに配置 */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                    <Users className="h-32 w-32 text-muted-foreground/30" />
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                  店長
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  [店長名]
                </h2>
                <div className="flex items-center gap-2 text-primary font-bold text-lg mb-6">
                  <Award className="h-6 w-6" />
                  <span>タヒチアンダンス世界王者</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  この度は、テバdeクリーンのホームページをご覧いただき、誠にありがとうございます。
                  店長の[店長名]と申します。
                </p>
              </div>
            </div>

            {/* メッセージ */}
            <Card className="mb-12">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6 text-center">ご挨拶</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    私は、タヒチアンダンスの世界王者として活動してきた経験から、<strong className="text-foreground">「徹底的に追求する姿勢」</strong>と<strong className="text-foreground">「細部へのこだわり」</strong>の重要性を学びました。
                  </p>
                  <p>
                    ダンスで培った集中力と丁寧さを、エアコンクリーニングという仕事に活かしています。一台一台のエアコンに真摯に向き合い、お客様に最高の仕上がりをお届けすることが私たちの使命です。
                  </p>
                  <p>
                    沖縄の高温多湿な気候では、エアコンは生活に欠かせないものです。だからこそ、清潔で快適な空気環境を保つお手伝いをさせていただきたいと考えています。
                  </p>
                  <p>
                    私たちテバdeクリーンは、お客様一人ひとりのご要望に寄り添い、丁寧な作業を心がけております。エアコンクリーニングのことなら、ぜひ私たちにお任せください。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 経歴・実績 */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">タヒチアンダンス</h3>
                      <p className="text-muted-foreground">
                        世界王者として活躍。国内外の大会で数々の実績を残す。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">エアコンクリーニング</h3>
                      <p className="text-muted-foreground">
                        5年以上の経験を持ち、年間1,000台以上の施工実績。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちの想い */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              私たちの<span className="text-primary">想い</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">お客様第一</h3>
                <p className="text-sm text-muted-foreground">
                  お客様の満足が私たちの喜びです。一つひとつの作業に心を込めて取り組みます。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">品質へのこだわり</h3>
                <p className="text-sm text-muted-foreground">
                  妥協のない品質を追求し、常に最高の仕上がりを目指します。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">地域への貢献</h3>
                <p className="text-sm text-muted-foreground">
                  沖縄の皆様に清潔で快適な生活環境を提供することが私たちの使命です。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            私たちと一緒に<br />
            <span className="text-primary">快適な空気環境</span>を作りましょう
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            エアコンクリーニングのご相談は、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                予約する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline">
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
