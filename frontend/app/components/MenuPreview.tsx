"use client";

import { motion } from "framer-motion";
import { Coffee, Cloud, Zap, Star } from "lucide-react";

const stats = [
  {
    icon: <Coffee className="w-6 h-6" />,
    value: "Premium",
    label: "Quality",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "Instant",
    label: "AI Matching",
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "Curated",
    label: "Selections",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    value: "Limitless",
    label: "Variety",
  },
];

export default function MenuPreview() {
  return (
    <div className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-6 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-center justify-center text-[#C69C6D] group-hover:scale-110 group-hover:border-[#C69C6D]/30 transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-xl font-serif text-[#F5E6D3] mb-1">{stat.value}</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
