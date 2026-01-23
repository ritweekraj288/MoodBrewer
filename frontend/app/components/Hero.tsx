"use client";

import { motion } from "framer-motion";
import { Cpu, Coffee, Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center px-4">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D97706] via-[#F59E0B] to-[#D97706] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#B87333] via-[#D97706] to-[#B87333] rounded-full blur-[120px]"
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#D97706] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center space-y-12 z-10">
        {/* AI Badge with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] border border-[#D97706]/40 rounded-full backdrop-blur-sm shadow-lg shadow-[#D97706]/20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Cpu className="w-5 h-5 text-[#D97706]" />
          </motion.div>
          <span className="text-sm font-semibold text-[#FAF5F0] tracking-wider uppercase">
            AI-Powered Curation
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
          </motion.div>
        </motion.div>

        {/* Main Heading with Gradient */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-[0.9]"
          >
            <motion.span
              className="block bg-gradient-to-r from-[#FAF5F0] via-[#E8E3DE] to-[#FAF5F0] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              COFFEE
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              MEETS
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-[#FAF5F0] via-[#E8E3DE] to-[#FAF5F0] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              AI
            </motion.span>
          </motion.h1>

          {/* Animated Underline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D97706] to-[#F59E0B]" />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Coffee className="w-6 h-6 text-[#D97706]" />
            </motion.div>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#D97706] to-[#F59E0B]" />
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl lg:text-3xl text-[#E8E3DE]/90 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Precision-engineered recommendations. Every cup, perfectly matched to your{" "}
          <span className="text-[#D97706] font-semibold">mood</span>,{" "}
          <span className="text-[#F59E0B] font-semibold">taste</span>, and{" "}
          <span className="text-[#D97706] font-semibold">moment</span>.
        </motion.p>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-16 pt-12"
        >
          {[
            { value: "50+", label: "Premium Selections", icon: "☕" },
            { value: "<1s", label: "AI Response Time", icon: "⚡" },
            { value: "100%", label: "Personalized", icon: "✨" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center group"
            >
              <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <motion.div
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#D97706] to-[#F59E0B] bg-clip-text text-transparent mb-3"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-[#E8E3DE]/70 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#D97706]/60"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
