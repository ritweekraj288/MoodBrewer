"use client";

import { motion } from "framer-motion";
import { Coffee, Zap, Cpu, TrendingUp, Sparkles } from "lucide-react";

const stats = [
  {
    icon: <Coffee className="w-6 h-6" />,
    value: "50+",
    label: "Premium Selections",
    description: "Curated menu items",
    color: "from-[#D97706] to-[#F59E0B]",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "<1s",
    label: "Response Time",
    description: "AI processing speed",
    color: "from-[#F59E0B] to-[#D97706]",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    value: "100%",
    label: "AI-Powered",
    description: "Machine learning algorithms",
    color: "from-[#D97706] to-[#B87333]",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "∞",
    label: "Combinations",
    description: "Personalization matrix",
    color: "from-[#F59E0B] to-[#D97706]",
  },
];

const menuCategories = [
  {
    name: "Robusta Specialty",
    count: 15,
    description: "High-caffeine, bold profiles",
    gradient: "from-[#D97706] to-[#F59E0B]",
  },
  {
    name: "Blend Coffee",
    count: 8,
    description: "Balanced, smooth flavors",
    gradient: "from-[#F59E0B] to-[#B87333]",
  },
  {
    name: "Manual Brew",
    count: 3,
    description: "Artisan preparation methods",
    gradient: "from-[#B87333] to-[#D97706]",
  },
  {
    name: "Shakes & Tea",
    count: 7,
    description: "Refreshing alternatives",
    gradient: "from-[#D97706] to-[#F59E0B]",
  },
  {
    name: "Food & Snacks",
    count: 11,
    description: "Complementary pairings",
    gradient: "from-[#F59E0B] to-[#D97706]",
  },
];

export default function MenuPreview() {
  return (
    <div className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#D97706]/10 to-[#F59E0B]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#B87333]/10 to-[#D97706]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 119, 6, 0.3) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#D97706]/20 to-[#F59E0B]/20 border border-[#D97706]/30 rounded-full backdrop-blur-sm"
            >
              <Cpu className="w-5 h-5 text-[#D97706]" />
              <span className="text-sm text-[#E8E3DE]/80 uppercase tracking-wider font-medium">
                System Performance
              </span>
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#FAF5F0] mb-4">
              Precision
              <br />
              <span className="bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
                Metrics
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border-2 border-[#D97706]/30 rounded-2xl p-8 hover:border-[#D97706]/60 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D97706]/20 to-[#F59E0B]/20 border-2 border-[#D97706]/30 rounded-xl mb-6 group-hover:border-[#D97706]/60 transition-colors"
                >
                  <div className={`text-transparent bg-gradient-to-br ${stat.color} bg-clip-text`}>
                    {stat.icon}
                  </div>
                </motion.div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#D97706]/20 to-[#F59E0B]/20 border border-[#D97706]/30 rounded-full backdrop-blur-sm"
            >
              <Coffee className="w-5 h-5 text-[#D97706]" />
              <span className="text-sm text-[#E8E3DE]/80 uppercase tracking-wider font-medium">
                Menu Catalog
              </span>
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#FAF5F0] mb-4">
              Category
              <br />
              <span className="bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
                Breakdown
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.03, y: -8 }}
                className={`bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border-2 border-[#D97706]/30 rounded-2xl p-8 hover:border-[#D97706]/60 transition-all duration-300 relative overflow-hidden group cursor-pointer`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#FAF5F0] uppercase tracking-wide">
                      {category.name}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.count}
                    </motion.div>
                  </div>
                  <p className="text-sm text-[#E8E3DE]/60 mb-6">
                    {category.description}
                  </p>
                  <motion.div
                    className={`h-1 w-full bg-gradient-to-r ${category.gradient} rounded-full opacity-30 group-hover:opacity-100 transition-opacity`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
