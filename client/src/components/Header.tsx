import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ホーム", href: "/" },
    { name: "家庭用", href: "/residential" },
    { name: "業務用", href: "/commercial" },
    { name: "店長挨拶", href: "/about" },
    { name: "よくある質問", href: "/faq" },
    { name: "作業実績", href: "/blog" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col cursor-pointer">
            <span className="text-2xl font-black leading-none tracking-tighter text-primary">
              テバdeクリーン
            </span>
            <span className="text-[10px] font-bold text-muted-foreground">
              沖縄のエアコンクリーニング専門店
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              <span className={cn(
                "text-sm font-bold transition-colors hover:text-accent cursor-pointer",
                location === item.href ? "text-primary" : "text-foreground"
              )}>
                {item.name}
              </span>
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <Link href="/line">
              <Button size="sm" className="bg-[#06C755] hover:bg-[#05b34c] text-white font-bold">
                <MessageCircle className="mr-2 h-4 w-4" />
                LINE予約
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" variant="outline" className="font-bold border-primary text-primary">
                予約フォーム
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              >
                <span 
                  className={cn(
                    "text-lg font-bold py-2 border-b border-muted last:border-0 block cursor-pointer",
                    location === item.href ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Link href="/line" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-bold">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  LINE予約
                </Button>
              </Link>
              <Link href="/booking" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full border-primary text-primary font-bold">
                  予約フォーム
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
