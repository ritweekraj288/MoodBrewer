"use client";

import { MessageSquare, Coffee } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Subtle opacity change instead of dramatic shifts
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.8]);
  const blurAmount = useTransform(scrollY, [0, 50], [0, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChat = () => {
    const chatSection = document.getElementById("chat-interface");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent"
      style={{
        backgroundColor: isScrolled ? "rgba(5, 5, 5, 0.6)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderColor: isScrolled ? "rgba(198, 156, 109, 0.1)" : "transparent"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-4 cursor-default select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C69C6D] to-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20"
          >
            <Coffee className="w-5 h-5 text-[#241A15]" />
          </motion.div>

          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl font-serif font-bold tracking-tight text-[#F5E6D3]"
            >
              MoodBrewer
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] uppercase tracking-[0.25em] text-[#C69C6D]"
            >
              Est. 2025
            </motion.span>
          </div>
        </div>

        {/* Action */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onClick={scrollToChat}
          className="group relative px-6 py-2 overflow-hidden rounded-full bg-white/5 border border-[#C69C6D]/30 hover:border-[#D4AF37]/60 transition-colors duration-300"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#C69C6D]/10 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F5E6D3] group-hover:text-white transition-colors">
              Begin Ritual
            </span>
            <MessageSquare className="w-3 h-3 text-[#D4AF37]" />
          </div>
        </motion.button>
      </div>
    </motion.nav>
  );
}
