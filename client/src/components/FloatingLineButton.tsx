import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/siteData";

export default function FloatingLineButton() {
  return (
    <a
      href={contactInfo.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#00C300] text-white shadow-lg transition-transform duration-300 hover:scale-105 lg:hidden"
      aria-label="LINEで予約・お問い合わせ"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
