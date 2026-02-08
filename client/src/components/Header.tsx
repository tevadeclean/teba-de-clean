import { Link } from "wouter";
import { contactInfo } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "ホーム", href: "/" },
    { label: "家庭用エアコン", href: "/residential" },
    { label: "業務用エアコン", href: "/commercial" },
    { label: "作業実績", href: "/blog" },
    { label: "お客様の声", href: "/testimonials" },
    { label: "店長挨拶", href: "/about" },
    { label: "よくある質問", href: "/faq" },
    { label: "お問い合わせ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="text-2xl font-black text-primary">
                テバ<span className="text-accent">de</span>クリーン
              </div>
            </div>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* 電話番号とCTAボタン */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:09059424412" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span>090-5942-4412</span>
            </a>
            <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-[#00C300] hover:bg-[#00C300]/90 text-white">
                LINEで予約
              </Button>
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <div className="pt-4 border-t flex flex-col gap-3">
                <a href="tel:09059424412" className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Phone className="h-4 w-4" />
                  <span>090-5942-4412</span>
                </a>
                <a href={contactInfo.lineUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#00C300] hover:bg-[#00C300]/90 text-white" onClick={() => setIsMenuOpen(false)}>
                    LINEで予約
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
