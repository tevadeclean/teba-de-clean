import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials as staticTestimonials, contactInfo } from "@/data/siteData";
import { fetchTestimonialsFromSheet, Testimonial } from "@/lib/googleSheets";
import { 
  Sparkles, 
  Clock, 
  ArrowRight,
  Phone,
  UserCheck,
  Heart,
  Award,
  Gift,
  ShieldCheck,
  HelpCircle,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ACTUAL_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1mkobJlasnMVNuxmAGntVntpz7ZSNv-rudq0-kQ2qLxw/gviz/tq?tqx=out:csv";

export default function Home() {
  const [recentTestimonials, setRecentTestimonials] = useState<Testimonial[]>(staticTestimonials.slice(0, 3));

  useEffect(() => {
    async function loadRecentTestimonials() {
      try {
        const sheetData = await fetchTestimonialsFromSheet(ACTUAL_SHEET_CSV_URL);
        if (sheetData && sheetData.length > 0) {
          setRecentTestimonials(sheetData.slice(0, 3));
        }
      } catch (error) {
        console.error("Failed to load testimonials from sheet:", error);
      }
    }
    loadRecentTestimonials();
  }, []);

  const strengths = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "累計900台以上の施工実績",
      description: "確かな技術で、どんな汚れも逃しません。"
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "オーナー自らが伺う安心",
      description: "外注なし！責任を持って丁寧に作業いたします。"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "パパ店長だから女性も安心",
      description: "子育て世帯や女性の一人暮らしでも安心です。"
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "防カビコートがHP限定無料",
      description: "公式サイト予約特典で無料で施工します。"
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "大手洗浄店で修行した技術",
      description: "最高水準の洗浄技術を提供します。"
    }
  ];

  const faqs = [
    {
      q: "追加料金はありますか？",
      a: "当日の急な追加料金は発生しません。ご安心ください。"
    },
    {
      q: "駐車場がない場合は？",
      a: "付近の有料パーキング代は当店が全額負担いたします。"
    },
    {
      q: "保険に加入されていますか？",
      a: "はい、損害保険に加入しております。"
    },
    {
      q: "作業中の立ち会いは？",
      a: "開始時と終了時のみでOKです。作業中は外出も可能です。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="container relative py-10 md:py-24 max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex flex-col mb-4 md:mb-6">
              <Badge className="bg-accent text-accent-foreground px-3 py-1 text-xs md:text-sm font-black shadow-lg mb-1">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1 inline" />
                公式サイト予約が一番おトク！
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tighter">
              沖縄のエアコンを<br />
              <span className="text-accent">プロの技術</span>で徹底洗浄
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-95 leading-relaxed max-w-xl">
              南大東島出身、一児のパパ店長が直接お伺い。世界一のダンサーとしてのこだわりを、あなたのエアコンに。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link href="/booking">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 font-black shadow-xl">
                  今すぐ予約する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:09059424412">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  電話で相談
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5つの強み */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              選ばれる<span className="text-primary">5つの理由</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className={`border-none shadow-sm transition-all ${index === 3 ? "bg-accent/5 ring-1 ring-accent/20" : "bg-muted/20"}`}>
                <CardContent className="p-5 md:p-6 flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${index === 3 ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
                    {strength.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-1">{strength.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                      {strength.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 動画セクション */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                1分でわかる！徹底洗浄
              </h2>
            </div>
            
            <div className="relative aspect-[9/16] max-w-[260px] md:max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Sd_05JT5kuQ" 
                title="テバdeクリーン 作業風景"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 店長ストーリー */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container max-w-5xl">
          <div className="bg-muted/20 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 md:w-full">
              <Badge className="mb-4 bg-primary/10 text-primary">店長ストーリー</Badge>
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                「ご家族の大切な空間を預かる」パパ店長の想い
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                南大東島出身、3歳の娘を持つパパです。私自身も一人の親として、お客様のお宅を訪問する際は「ご家族の大切な空間を預かる」という責任と感謝の気持ちで作業に臨んでいます。
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                世界一のダンサーとしてのこだわりと、ダンススタジオ経営で培ったコミュニケーションを大切に、あなたのエアコンを新品のような輝きに仕上げます。
              </p>
              <Link href="/about">
                <Button variant="outline" size="sm" className="font-bold">
                  プロフィール詳細
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black">よくあるご質問</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl px-4 border-none shadow-sm">
                  <AccordionTrigger className="text-left font-bold text-sm md:text-base py-4 hover:no-underline">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs md:text-sm pb-4 pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-2">お客様の声</h2>
            <p className="text-xs text-muted-foreground">くらしのマーケットで高評価をいただいています</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-sm bg-muted/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-[8px] md:text-[10px] text-muted-foreground border-muted-foreground/20">
                      くらしのマーケットから引用
                    </Badge>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                    {testimonial.comment}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      {testimonial.customerName[0]}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold">{testimonial.customerName}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/testimonials">
              <Button variant="outline" className="font-bold">
                もっと見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* サービスメニュー */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black mb-2">サービスメニュー</h2>
            <Badge className="bg-accent/10 text-accent border-none text-xs">公式サイト予約が最安値です</Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/residential">
              <Card className="group hover:shadow-md transition-all cursor-pointer border-none shadow-sm bg-white ring-1 ring-muted">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-black mb-2 group-hover:text-primary">家庭用エアコン</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4">
                    カビや汚れを根こそぎ除去し、清潔な空気を取り戻します。
                  </p>
                  <div className="flex items-baseline gap-2">
                    <div className="text-primary font-black text-2xl">¥8,000〜</div>
                    <div className="text-[10px] text-muted-foreground font-bold">2台目以降割引あり</div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/commercial">
              <Card className="group hover:shadow-md transition-all cursor-pointer border-none shadow-sm bg-white ring-1 ring-muted">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-black mb-2 group-hover:text-primary">業務用エアコン</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4">
                    店舗・オフィスに対応。複数台の同時施工も可能です。
                  </p>
                  <div className="flex items-baseline gap-2">
                    <div className="text-primary font-black text-2xl">¥25,000〜</div>
                    <div className="text-[10px] text-muted-foreground font-bold">2台目以降割引あり</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container max-w-4xl relative text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tight">
            沖縄のエアコンを、もっと快適に。
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 font-black rounded-full">
                今すぐ予約する
              </Button>
            </Link>
            <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-lg px-10 py-6 font-black rounded-full">
                LINEで相談
              </Button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 opacity-80 text-xs">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              <span>損害保険加入</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>土日祝も対応</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
