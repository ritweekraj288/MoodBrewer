"use client";

import { motion } from "framer-motion";
import { Coffee, Mail } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    "Navigation": ["Discover", "Menu", "About"],
    "Resources": ["API Docs", "Privacy", "Terms"],
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#D97706]/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <Coffee className="w-6 h-6 text-[#D97706]" strokeWidth={1.5} />
              <div>
                <h2 className="text-xl font-bold text-[#FAF5F0]">MOODBREWER</h2>
                <p className="text-[10px] text-[#E8E3DE]/40 tracking-[0.2em] uppercase">
                  AI CURATOR
                </p>
              </div>
            </motion.div>
            <p className="text-sm text-[#E8E3DE]/60 leading-relaxed max-w-sm">
              Precision-engineered coffee curation through advanced AI algorithms. 
              Every recommendation, optimized.
            </p>
            <div className="flex items-center gap-3 text-sm text-[#E8E3DE]/60">
              <Mail className="w-4 h-4 text-[#D97706]" />
              <span>contact@moodbrewer.ai</span>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm font-bold text-[#FAF5F0] uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#E8E3DE]/60 hover:text-[#D97706] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D97706]/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#E8E3DE]/40 text-center md:text-left">
            © 2025 MoodBrewer. All rights reserved.
          </p>
          <p className="text-sm text-[#E8E3DE]/40">
            Built with precision. Powered by AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
