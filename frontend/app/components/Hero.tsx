"use client";

import { motion } from "framer-motion";
import { Sparkles, Coffee } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-20 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#926644]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-[#592720]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/30"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[#F5E6D3] text-sm font-medium tracking-wide">
            AI-Powered Coffee Selection
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-[#F5E6D3] leading-tight"
        >
          Brew Your Mood,
          <br />
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#926644] to-[#D4AF37] bg-clip-text text-transparent">
            Savor the Moment
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-[#F5E6D3]/70 max-w-2xl mx-auto leading-relaxed"
        >
          Let our AI barista craft the perfect coffee and snack pairing based on
          your mood, taste preferences, and time of day. Experience personalized
          coffee curation like never before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 pt-4"
        >
          <Coffee className="w-5 h-5 text-[#D4AF37]" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="text-[#F5E6D3]/50 text-sm tracking-widest uppercase">
            Since 2024
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <Coffee className="w-5 h-5 text-[#D4AF37]" />
        </motion.div>
      </div>
    </div>
  );
}