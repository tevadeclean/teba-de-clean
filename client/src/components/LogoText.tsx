import React from "react";

interface LogoTextProps {
  className?: string;
}

export default function LogoText({ className = "" }: LogoTextProps) {
  return (
    <span className={`font-black ${className}`}>
      テバ<span className="text-accent">de</span>クリーン
    </span>
  );
}
