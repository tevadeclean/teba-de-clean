import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Star, Loader2 } from "lucide-react";

export default function Testimonials() {
  const { data: testimonials, isLoading } = trpc.testimonials.list.useQuery();

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
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
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
                      <div className="font-medium">{testimonial.customerName}様</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.serviceType === "residential" ? "家庭用" : "業務用"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">まだお客様の声が登録されていません</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
