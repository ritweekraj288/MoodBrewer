"use client";

import { motion } from "framer-motion";
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    "Quick Links": ["Home", "Menu", "About Us", "Careers"],
    "Services": ["AI Barista", "Catering", "Gift Cards", "Delivery"],
    "Support": ["FAQ", "Contact", "Privacy Policy", "Terms of Service"],
  };

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1A1110] to-[#0D0907] border-t border-[#D4AF37]/20 mt-20">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <Coffee className="w-10 h-10 text-[#D4AF37]" strokeWidth={2} />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rounded-full blur-sm"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#D4AF37]">MoodBrewer</h2>
                <p className="text-xs text-[#F5E6D3]/60 tracking-widest">
                  AI COFFEE CURATOR
                </p>
              </div>
            </motion.div>
            <p className="text-[#F5E6D3]/70 leading-relaxed">
              Crafting personalized coffee experiences with the power of AI.
              Every cup tells a story, every sip is an experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#F5E6D3]/70">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm">123 Coffee Lane, Brew City, BC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-[#F5E6D3]/70">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-[#F5E6D3]/70">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm">hello@moodbrewer.com</span>
              </div>
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
              <h3 className="text-[#D4AF37] font-semibold text-lg">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#F5E6D3]/70 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
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
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#F5E6D3]/60 text-sm text-center md:text-left">
            © 2025 MoodBrewer. All rights reserved. Crafted with{" "}
            <span className="text-[#D4AF37]">♥</span> and caffeine.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-[#592720]/50 border border-[#D4AF37]/30 flex items-center justify-center text-[#F5E6D3] hover:bg-[#D4AF37] hover:text-[#1A1110] transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#926644] to-[#D4AF37]" />
    </footer>
  );
}