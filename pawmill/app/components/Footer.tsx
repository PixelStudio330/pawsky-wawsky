"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white border-t border-[#EAD7C3]/50 pt-20 pb-12 overflow-hidden">
      {/* 🍃 Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-[#FDF6EC] rounded-b-[100%] scale-x-110 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-[#FAF5E7] pb-12">
          
          {/* 🐾 Logo Section */}
          <div className="flex flex-col items-center md:items-start group">
            <div className="flex items-center gap-4 mb-4 cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-[#E7C78A]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/images/logo.jpg"
                  alt="Pawsky Wawsky Logo"
                  width={50}
                  height={50}
                  className="rounded-full relative z-10 border-2 border-white shadow-md transition-transform duration-500 group-hover:rotate-[360deg]"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black text-[#6D7C75] tracking-tight">
                  Pawsky Wawsky
                </h2>
                <p className="text-[#8E9B94] text-xs font-bold tracking-widest uppercase">
                  Whiskers, Wings & Warm Hearts
                </p>
              </div>
            </div>
            <p className="text-[#5C6B64]/70 max-w-xs text-sm leading-relaxed text-center md:text-left">
              Creating a sanctuary where every paw finds its path and every soul find its home. ✨
            </p>
          </div>

          {/* Footer Navigation */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-4 md:flex md:gap-8 text-[#6D7C75] font-bold">
            {[
              { name: "Home", href: "/" },
              { name: "Our Gems", href: "/our-gems" },
              { name: "About", href: "/about-us" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -3, color: "#E7C78A" }}
                className="transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E7C78A] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 self-center md:self-auto">
            {[
              { Icon: FaInstagram, color: "#E1306C" },
              { Icon: FaTwitter, color: "#1DA1F2" },
              { Icon: FaFacebookF, color: "#4267B2" }
            ].map(({ Icon, color }, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, backgroundColor: color, color: "#fff" }}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#FAF5E7] text-[#6D7C75] shadow-sm transition-all"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[#8E9B94] text-xs font-medium uppercase tracking-tighter">
          <p>© {currentYear} Pawsky Wawsky · All rights reserved</p>
          <div className="flex items-center gap-2 bg-[#FDF6EC] px-4 py-2 rounded-full border border-[#FAF5E7]">
            Made with <span className="animate-pulse">💖</span> & <span className="hover:rotate-12 transition-transform cursor-default">🐾</span> for our gems
          </div>
        </div>
      </div>
    </footer>
  );
}