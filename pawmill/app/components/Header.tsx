"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const handleScrollTop = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF5E7]/90 backdrop-blur-sm py-5 shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        
        {/* 🐾 Clickable Logo + Title */}
        <div onClick={handleScrollTop} className="flex items-center gap-3 cursor-pointer group">
          <div className="relative transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full relative z-10"
            />
            <div className="absolute -inset-1 rounded-full border-4 border-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 shadow-lg"></div>
          </div>

          <h1 className="text-3xl font-bold text-[#6D7C75] tracking-tight transition-all duration-300 group-hover:scale-105 group-hover:text-[#D0A7A1]">
            Pawsky Wawsky 🐾
          </h1>
        </div>

        {/* 🌿 Nav Links */}
        <nav className="flex space-x-6 text-[#6D7C75] font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "Know Our Babies", href: "/our-gems" },
            { name: "About", href: "/about-us" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors duration-300 hover:text-[#D0A7A1] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#D0A7A1] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                pathname === link.href ? "text-[#D0A7A1] after:scale-x-100" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}