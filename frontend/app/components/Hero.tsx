"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToChat = () => {
    const chatSection = document.getElementById("chat-interface");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Top Left */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(198,156,109,0.08)_0%,transparent_70%)] blur-[100px]" />
        {/* Glow Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-12">

        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#C69C6D]">AI-Powered Mixology</span>
        </motion.div>

        {/* Main Title */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-[#F5E6D3] leading-[0.9]"
          >
            The Perfect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5E6D3] to-[#D4AF37] animate-gradient-slow bg-[length:200%_auto]">
              Coffee Ritual
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Experience a brew curated exclusively for your current state of mind.
          Where artificial intelligence meets the artisanal craft.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button
            onClick={scrollToChat}
            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#C69C6D] text-[#241A15] rounded-full overflow-hidden transition-transform active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative font-bold uppercase tracking-widest text-sm">Curate My Cup</span>
            <ArrowDown className="relative w-4 h-4 animate-bounce" />
          </button>
        </motion.div>

      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#C69C6D]/40 to-transparent" />
      </motion.div>

    </section>
  );
}
