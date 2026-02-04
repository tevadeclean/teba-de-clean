import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { contactInfo } from "@/data/siteData";
import { CheckCircle2, Phone, Mail, MessageCircle } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "residential" as "residential" | "commercial",
    preferredDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert("お名前と電話番号は必須です");
      return;
    }

    // メール本文を作成
    const subject = encodeURIComponent("【予約】エアコンクリーニングのお問い合わせ");
    const body = encodeURIComponent(
      `お名前: ${formData.name}\n` +
      `メールアドレス: ${formData.email}\n` +
      `電話番号: ${formData.phone}\n` +
      `サービス種類: ${formData.serviceType === "residential" ? "家庭用エアコン" : "業務用エアコン"}\n` +
      `希望日時: ${formData.preferredDate}\n` +
      `その他ご要望:\n${formData.message}`
    );

    // メールクライアントを開く
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            予約フォーム
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-95">
            エアコンクリーニングのご予約は、こちらのフォームからお申し込みください。お見積もりは無料です。
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* フォーム */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">予約情報を入力</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* お名前 */}
                      <div>
                        <Label htmlFor="name" className="text-base">
                          お名前 <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="山田 太郎"
                          required
                          className="mt-2"
                        />
                      </div>

                      {/* メールアドレス */}
                      <div>
                        <Label htmlFor="email" className="text-base">
                          メールアドレス
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="example@example.com"
                          className="mt-2"
                        />
                      </div>

                      {/* 電話番号 */}
                      <div>
                        <Label htmlFor="phone" className="text-base">
                          電話番号 <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="090-1234-5678"
                          required
                          className="mt-2"
                        />
                      </div>

                      {/* サービス種類 */}
                      <div>
                        <Label className="text-base mb-3 block">
                          サービス種類 <span className="text-destructive">*</span>
                        </Label>
                        <RadioGroup
                          value={formData.serviceType}
                          onValueChange={(value) => setFormData({ ...formData, serviceType: value as "residential" | "commercial" })}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="residential" id="residential" />
                            <Label htmlFor="residential" className="font-normal cursor-pointer">
                              家庭用エアコン（¥8,000〜）
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="commercial" id="commercial" />
                            <Label htmlFor="commercial" className="font-normal cursor-pointer">
                              業務用エアコン（¥25,000〜）
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* 希望日時 */}
                      <div>
                        <Label htmlFor="preferredDate" className="text-base">
                          希望日時
                        </Label>
                        <Input
                          id="preferredDate"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          placeholder="例: 2024年12月25日 午前中"
                          className="mt-2"
                        />
                        <p className="text-sm text-muted-foreground mt-2">
                          第2希望、第3希望もご記入いただけるとスムーズです
                        </p>
                      </div>

                      {/* その他ご要望 */}
                      <div>
                        <Label htmlFor="message" className="text-base">
                          その他ご要望・ご質問
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="エアコンの台数、お掃除機能の有無、気になる点など、お気軽にご記入ください"
                          rows={5}
                          className="mt-2"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        メールで送信
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        送信ボタンを押すと、メールアプリが起動します
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* サイドバー */}
              <div className="space-y-6">
                {/* 予約の流れ */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      予約の流れ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-sm">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">1</span>
                        <span>フォームに必要事項を入力</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">2</span>
                        <span>送信ボタンでメールアプリが起動</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">3</span>
                        <span>メールを送信</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">4</span>
                        <span>担当者より折り返しご連絡</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                {/* その他の連絡方法 */}
                <Card>
                  <CardHeader>
                    <CardTitle>その他の連絡方法</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        お電話
                      </h4>
                      <a href={`tel:${contactInfo.phoneRaw}`} className="text-primary hover:underline font-bold">
                        {contactInfo.phone}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        平日: {contactInfo.businessHours.weekday}<br />
                        土日祝: {contactInfo.businessHours.weekend}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-[#06C755]" />
                        LINE
                      </h4>
                      <Link href="/line">
                        <Button variant="outline" size="sm" className="w-full">
                          LINEで予約
                        </Button>
                      </Link>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Mail className="h-4 w-4 text-secondary-foreground" />
                        メール
                      </h4>
                      <a href={`mailto:${contactInfo.email}`} className="text-sm text-primary hover:underline break-all">
                        {contactInfo.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
