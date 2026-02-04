import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">テバdeクリーン</h3>
            <p className="text-sm opacity-90 mb-4">
              沖縄県内のエアコンクリーニング専門店。家庭用から業務用まで、プロの技術で丁寧にクリーニングいたします。
            </p>
          </div>

          {/* クイックリンク */}
          <div>
            <h3 className="text-lg font-bold mb-4">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/residential">
                  <span className="hover:text-accent transition-colors cursor-pointer">家庭用エアコンクリーニング</span>
                </Link>
              </li>
              <li>
                <Link href="/commercial">
                  <span className="hover:text-accent transition-colors cursor-pointer">業務用エアコンクリーニング</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-accent transition-colors cursor-pointer">作業実績</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials">
                  <span className="hover:text-accent transition-colors cursor-pointer">お客様の声</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 情報 */}
          <div>
            <h3 className="text-lg font-bold mb-4">情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="hover:text-accent transition-colors cursor-pointer">店長挨拶</span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="hover:text-accent transition-colors cursor-pointer">よくある質問</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-accent transition-colors cursor-pointer">店舗情報・アクセス</span>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <span className="hover:text-accent transition-colors cursor-pointer">予約フォーム</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 連絡先 */}
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:09059424412" className="hover:text-accent transition-colors">
                    090-5942-4412
                  </a>
                  <p className="text-xs opacity-80 mt-1">平日: 9:00〜18:00 / 土日祝: 9:00〜14:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="mailto:office@teva-de-clean.jp" className="hover:text-accent transition-colors">
                  office@teva-de-clean.jp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>沖縄県内全域対応</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>平日: 9:00〜18:00</p>
                  <p>土日祝: 9:00〜14:00</p>
                  <p className="text-xs opacity-80 mt-1">時間外対応もご相談ください</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} テバdeクリーン. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
