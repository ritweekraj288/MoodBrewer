"use client";

import { motion } from "framer-motion";
import { Cpu, Coffee } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-4">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* Minimal Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(217, 119, 6, 0.2) 0%, rgba(217, 119, 6, 0.05) 50%, transparent 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center space-y-12">
        {/* AI Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-[#D97706]/20 rounded-full"
        >
          <Cpu className="w-4 h-4 text-[#D97706]" />
          <span className="text-sm font-medium text-[#FAF5F0] tracking-wider uppercase">
            AI-Powered Curation
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#FAF5F0] leading-[0.95]"
          >
            COFFEE
            <br />
            <span className="text-[#D97706]">MEETS</span>
            <br />
            <span className="text-[#FAF5F0]">AI</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px w-32 bg-gradient-to-r from-transparent via-[#D97706] to-transparent mx-auto"
          />
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-[#E8E3DE]/70 max-w-3xl mx-auto leading-relaxed font-light tracking-tight"
        >
          Precision-engineered recommendations. Every cup, perfectly matched to your mood, 
          taste, and moment. Experience the future of coffee curation.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-12 pt-8"
        >
          {[
            { value: "50+", label: "Premium Selections" },
            { value: "<1s", label: "AI Response Time" },
            { value: "100%", label: "Personalized" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D97706] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#E8E3DE]/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-6 pt-4"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D97706]/30" />
          <Coffee className="w-5 h-5 text-[#D97706]/40" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D97706]/30" />
        </motion.div>
      </div>
    </div>
  );
}
