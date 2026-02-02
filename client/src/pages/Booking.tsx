import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { CheckCircle2, Phone, Mail } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "residential" as "residential" | "commercial",
    preferredDate: "",
    message: ""
  });

  const createBooking = trpc.bookings.create.useMutation({
    onSuccess: () => {
      toast.success("予約を受け付けました", {
        description: "担当者より折り返しご連絡いたします。"
      });
      // フォームをリセット
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "residential",
        preferredDate: "",
        message: ""
      });
    },
    onError: (error) => {
      toast.error("予約の送信に失敗しました", {
        description: error.message
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("必須項目を入力してください");
      return;
    }

    createBooking.mutate(formData);
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
                        <Label htmlFor="name">
                          お名前 <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="山田 太郎"
                          required
                        />
                      </div>

                      {/* 電話番号 */}
                      <div>
                        <Label htmlFor="phone">
                          電話番号 <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="098-XXX-XXXX"
                          required
                        />
                      </div>

                      {/* メールアドレス */}
                      <div>
                        <Label htmlFor="email">メールアドレス</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="example@email.com"
                        />
                      </div>

                      {/* サービス種別 */}
                      <div>
                        <Label>
                          サービス種別 <span className="text-destructive">*</span>
                        </Label>
                        <RadioGroup
                          value={formData.serviceType}
                          onValueChange={(value: "residential" | "commercial") => 
                            setFormData({ ...formData, serviceType: value })
                          }
                          className="mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="residential" id="residential" />
                            <Label htmlFor="residential" className="font-normal cursor-pointer">
                              家庭用エアコンクリーニング
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="commercial" id="commercial" />
                            <Label htmlFor="commercial" className="font-normal cursor-pointer">
                              業務用エアコンクリーニング
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* 希望日時 */}
                      <div>
                        <Label htmlFor="preferredDate">希望日時</Label>
                        <Input
                          id="preferredDate"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          placeholder="例：2026年2月10日 午前中"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          具体的な日時が決まっていない場合は、「平日午前中希望」などとご記入ください
                        </p>
                      </div>

                      {/* その他要望 */}
                      <div>
                        <Label htmlFor="message">その他ご要望・ご質問</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="エアコンの台数、設置場所、気になる点などをご記入ください"
                          rows={5}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        disabled={createBooking.isPending}
                      >
                        {createBooking.isPending ? "送信中..." : "予約を申し込む"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* サイドバー */}
              <div className="space-y-6">
                {/* お問い合わせ方法 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">その他のお問い合わせ方法</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 font-medium mb-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>お電話</span>
                      </div>
                      <a href="tel:098-XXX-XXXX" className="text-primary hover:underline">
                        098-XXX-XXXX
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        受付時間: 9:00〜18:00（日曜定休）
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 font-medium mb-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>メール</span>
                      </div>
                      <a href="mailto:info@tebadeclean.com" className="text-primary hover:underline text-sm">
                        info@tebadeclean.com
                      </a>
                    </div>

                    <div>
                      <Link href="/line">
                        <Button variant="outline" className="w-full">
                          LINEで予約
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* 予約の流れ */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">予約の流れ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "フォーム送信",
                      "担当者から連絡",
                      "日程調整・見積もり",
                      "クリーニング実施"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* 注意事項 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">ご注意</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>お見積もりは無料です</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>繁忙期は予約が取りにくい場合があります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span>キャンセルは前日までにご連絡ください</span>
                      </li>
                    </ul>
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
