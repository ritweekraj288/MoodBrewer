"use client";

import { motion } from "framer-motion";
import { Coffee, Zap, Cpu, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: <Coffee className="w-6 h-6" />,
    value: "50+",
    label: "Premium Selections",
    description: "Curated menu items",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "<1s",
    label: "Response Time",
    description: "AI processing speed",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    value: "100%",
    label: "AI-Powered",
    description: "Machine learning algorithms",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "∞",
    label: "Combinations",
    description: "Personalization matrix",
  },
];

const menuCategories = [
  {
    name: "Robusta Specialty",
    count: 15,
    description: "High-caffeine, bold profiles",
  },
  {
    name: "Blend Coffee",
    count: 8,
    description: "Balanced, smooth flavors",
  },
  {
    name: "Manual Brew",
    count: 3,
    description: "Artisan preparation methods",
  },
  {
    name: "Shakes & Tea",
    count: 7,
    description: "Refreshing alternatives",
  },
  {
    name: "Food & Snacks",
    count: 11,
    description: "Complementary pairings",
  },
];

export default function MenuPreview() {
  return (
    <div className="relative py-24 px-6 overflow-hidden bg-[#0A0A0A]">
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Cpu className="w-5 h-5 text-[#D97706]" />
              <span className="text-sm text-[#E8E3DE]/60 uppercase tracking-wider">
                System Performance
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-4">
              Precision
              <br />
              <span className="text-[#D97706]">Metrics</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-[#1A1A1A] border border-[#D97706]/20 rounded-sm p-8 hover:border-[#D97706]/40 transition-colors"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-[#D97706]/10 border border-[#D97706]/20 rounded-sm mb-6">
                  <div className="text-[#D97706]">{stat.icon}</div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#D97706] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#FAF5F0] mb-1 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-[#E8E3DE]/50">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Menu Categories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Coffee className="w-5 h-5 text-[#D97706]" />
              <span className="text-sm text-[#E8E3DE]/60 uppercase tracking-wider">
                Menu Catalog
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-4">
              Category
              <br />
              <span className="text-[#D97706]">Breakdown</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-[#1A1A1A] border border-[#D97706]/20 rounded-sm p-8 hover:border-[#D97706]/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#FAF5F0] uppercase tracking-wide">
                    {category.name}
                  </h3>
                  <div className="text-2xl font-bold text-[#D97706]">
                    {category.count}
                  </div>
                </div>
                <p className="text-sm text-[#E8E3DE]/60 mb-6">
                  {category.description}
                </p>
                <div className="h-px w-full bg-gradient-to-r from-[#D97706]/20 to-transparent group-hover:from-[#D97706]/40 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
