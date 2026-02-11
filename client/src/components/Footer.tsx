import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 会社情報 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black">テバdeクリーン</h3>
            <p className="text-base opacity-90 leading-relaxed">
              沖縄県内のエアコンクリーニング専門店。家庭用から業務用まで、プロの技術で丁寧にクリーニングいたします。
            </p>
          </div>

          {/* クイックリンク */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">サービス</h3>
            <ul className="space-y-4 text-base">
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
          <div className="space-y-6">
            <h3 className="text-xl font-bold">情報</h3>
            <ul className="space-y-4 text-base">
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
          <div className="space-y-6">
            <h3 className="text-xl font-bold">お問い合わせ</h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:098-XXX-XXXX" className="hover:text-accent transition-colors font-bold">
                    098-XXX-XXXX
                  </a>
                  <div className="text-sm opacity-90 mt-2 space-y-1">
                    <p>平日: 9:00〜17:00</p>
                    <p>土日祝: 9:00〜14:00</p>
                    <p className="text-accent font-bold">※時間外も相談OK！</p>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <a href="mailto:info@tebadeclean.com" className="hover:text-accent transition-colors break-all">
                  info@tebadeclean.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>沖縄県内全域対応</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} テバdeクリーン. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
