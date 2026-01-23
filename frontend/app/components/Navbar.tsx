"use client";

import { Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  const navItems = [
    { name: "Discover", href: "#" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#D97706]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#D97706]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Coffee className="w-7 h-7 text-[#D97706] relative z-10" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#FAF5F0] tracking-tight">
                MOODBREWER
              </h1>
              <p className="text-[10px] text-[#E8E3DE]/40 tracking-[0.2em] uppercase">
                AI CURATOR
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-sm text-[#E8E3DE]/70 hover:text-[#D97706] transition-colors duration-300 font-medium tracking-wide uppercase"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-[#D97706] text-[#0A0A0A] text-sm font-semibold rounded-sm hover:bg-[#F59E0B] transition-colors duration-300 tracking-wide uppercase"
            >
              Begin
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
