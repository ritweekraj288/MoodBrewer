"use client";

import { motion } from "framer-motion";
import { Coffee, Clock, Zap, Sparkles } from "lucide-react";

const stats = [
  {
    icon: <Coffee className="w-6 h-6" />,
    value: "50+",
    label: "Menu Items",
    description: "From classic espresso to specialty drinks",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "Instant",
    label: "Recommendations",
    description: "AI-powered matching in seconds",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "24/7",
    label: "Available",
    description: "Get recommendations anytime",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    value: "100%",
    label: "Personalized",
    description: "Tailored to your preferences",
  },
];

const menuCategories = [
  {
    name: "Robusta Specialty",
    count: 15,
    gradient: "from-[#D4AF37] to-[#926644]",
  },
  {
    name: "Blend Coffee",
    count: 8,
    gradient: "from-[#926644] to-[#592720]",
  },
  {
    name: "Manual Brew",
    count: 3,
    gradient: "from-[#592720] to-[#3D2B1F]",
  },
  {
    name: "Shakes & Tea",
    count: 7,
    gradient: "from-[#3D2B1F] to-[#D4AF37]",
  },
  {
    name: "Food & Snacks",
    count: 11,
    gradient: "from-[#D4AF37] to-[#592720]",
  },
];

export default function MenuPreview() {
  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#F5E6D3] mb-4"
            >
              Why Choose <span className="bg-gradient-to-r from-[#D4AF37] to-[#926644] bg-clip-text text-transparent">MoodBrewer</span>?
            </motion.h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-gradient-to-br from-[#592720]/40 via-[#3D2B1F]/40 to-[#592720]/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 h-full">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#926644] rounded-xl mb-4 mx-auto">
                    <div className="text-[#1A1110]">{stat.icon}</div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] text-center mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold text-[#F5E6D3] text-center mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-[#F5E6D3]/60 text-center">
                    {stat.description}
                  </p>
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
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#F5E6D3] mb-4"
            >
              Explore Our <span className="bg-gradient-to-r from-[#D4AF37] to-[#926644] bg-clip-text text-transparent">Menu</span>
            </motion.h2>
            <p className="text-[#F5E6D3]/70 text-lg max-w-2xl mx-auto">
              From robust espresso to refreshing cold brews, discover a world of flavors
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 blur-xl`} />
                
                <div className="relative bg-gradient-to-br from-[#592720]/40 via-[#3D2B1F]/40 to-[#592720]/40 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 overflow-hidden">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#D4AF37]/30 rounded-tr-2xl" />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">
                      {category.name}
                    </h3>
                    <p className="text-[#F5E6D3]/60 mb-4">
                      {category.count} delicious options
                    </p>
                    <div className="flex items-center gap-2 text-[#F5E6D3]/80 text-sm">
                      <Coffee className="w-4 h-4 text-[#D4AF37]" />
                      <span>Explore Collection</span>
                    </div>
                  </div>

                  {/* Animated Underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#926644]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
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
