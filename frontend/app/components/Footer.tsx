"use client";

import { motion } from "framer-motion";
import { Coffee, Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    "Navigation": ["Discover", "Menu", "About"],
    "Resources": ["API Docs", "Privacy", "Terms"],
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-t-2 border-[#D97706]/20 mt-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#D97706]/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Coffee className="w-7 h-7 text-[#D97706]" strokeWidth={1.5} />
              </motion.div>
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
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-sm text-[#E8E3DE]/60 group"
            >
              <Mail className="w-4 h-4 text-[#D97706] group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-[#D97706] transition-colors">contact@moodbrewer.ai</span>
            </motion.div>
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
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#D97706" }}
                      className="text-sm text-[#E8E3DE]/60 hover:text-[#D97706] transition-colors duration-300 block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-[#D97706]/30 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#E8E3DE]/40 text-center md:text-left">
            © 2025 MoodBrewer. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#D97706]/20 flex items-center justify-center text-[#E8E3DE]/60 hover:bg-gradient-to-r hover:from-[#D97706] hover:to-[#F59E0B] hover:text-[#0A0A0A] hover:border-[#D97706] transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
