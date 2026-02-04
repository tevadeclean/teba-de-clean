import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/siteData";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-accent-foreground py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            お客様の声
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            テバdeクリーンをご利用いただいたお客様からの評価とご感想をご紹介します
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {testimonials && testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-accent text-accent" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {testimonial.comment}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="font-bold text-foreground">{testimonial.customerName}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.serviceType === "residential" ? "家庭用エアコン" : "業務用エアコン"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">まだお客様の声がありません</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
