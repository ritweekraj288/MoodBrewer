"use client";

import { Coffee } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#D97706]/20"
          : "bg-transparent"
      }`}
      style={{
        backdropFilter: isScrolled ? `blur(${blur}px)` : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#D97706]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Coffee className="w-7 h-7 text-[#D97706] relative z-10" strokeWidth={1.5} />
            </motion.div>
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
                whileHover={{ y: -2, color: "#D97706" }}
                className="text-sm text-[#E8E3DE]/70 hover:text-[#D97706] transition-colors duration-300 font-medium tracking-wide uppercase relative group"
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D97706] to-[#F59E0B]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0A0A0A] text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-[#D97706]/30 transition-all duration-300 tracking-wide uppercase relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#D97706] opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              />
              <span className="relative z-10">Begin</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
