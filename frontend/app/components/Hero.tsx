"use client";

import { motion } from "framer-motion";
import { Sparkles, Coffee, Star, Zap } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden py-20 md:py-32 px-4">
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
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#D4AF37]/3 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Coffee Beans */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#D4AF37]/20 rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#592720]/60 via-[#3D2B1F]/60 to-[#592720]/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#D4AF37]/30 shadow-lg"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>
          <span className="text-[#F5E6D3] text-sm font-medium tracking-wide">
            AI-Powered Coffee Selection
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5E6D3] leading-tight"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Brew Your Mood,
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-[#D4AF37] via-[#926644] to-[#D4AF37] bg-clip-text text-transparent relative inline-block"
          >
            Savor the Moment
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#926644] to-[#D4AF37] opacity-30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#F5E6D3]/80 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Let our AI barista craft the perfect coffee and snack based on
          your mood, taste preferences, and time of day. Experience personalized
          coffee curation like never before.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {[
            { icon: <Zap className="w-4 h-4" />, text: "Instant Recommendations" },
            { icon: <Coffee className="w-4 h-4" />, text: "50+ Menu Items" },
            { icon: <Star className="w-4 h-4" />, text: "Personalized Experience" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 bg-[#592720]/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/20 text-[#F5E6D3]/80 text-sm"
            >
              <span className="text-[#D4AF37]">{feature.icon}</span>
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-4 pt-6"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Coffee className="w-5 h-5 text-[#D4AF37]" />
          </motion.div>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="text-[#F5E6D3]/50 text-sm tracking-widest uppercase font-light">
            Since 2025
          </span>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Coffee className="w-5 h-5 text-[#D4AF37]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}