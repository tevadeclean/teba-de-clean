import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoText from "./LogoText";

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
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white/80 backdrop-blur-sm py-3"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col cursor-pointer">
            <LogoText className="text-xl md:text-2xl leading-none tracking-tighter text-primary" />
            <span className="text-[9px] md:text-[10px] font-bold text-muted-foreground">
              沖縄のエアコンクリーニング専門店
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              <span className={cn(
                "text-[13px] md:text-sm font-bold transition-colors hover:text-accent cursor-pointer",
                location === item.href ? "text-primary" : "text-foreground"
              )}>
                {item.name}
              </span>
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <Link href="/line">
              <Button size="sm" className="bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-xs h-9 px-4">
                <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                LINE予約
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" variant="outline" className="font-bold border-primary text-primary text-xs h-9 px-4">
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
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              >
                <span 
                  className={cn(
                    "text-base font-bold py-3 border-b border-muted last:border-0 block cursor-pointer",
                    location === item.href ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-4 pb-4">
              <Link href="/line" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-sm h-11">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  LINE予約
                </Button>
              </Link>
              <Link href="/booking" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full border-primary text-primary font-bold text-sm h-11">
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
