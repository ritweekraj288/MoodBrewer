"use client";

import { Coffee, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#1A1110]/80 border-b border-[#D4AF37]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <Coffee className="w-8 h-8 text-[#D4AF37]" strokeWidth={2} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] rounded-full blur-sm"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#D4AF37] tracking-tight">
                MoodBrewer
              </h1>
              <p className="text-xs text-[#F5E6D3]/60 tracking-widest">
                AI COFFEE CURATOR
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-[#F5E6D3] hover:text-[#D4AF37] transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-[#1A1110] px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
            >
              Order Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F5E6D3] hover:text-[#D4AF37] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#592720]/95 backdrop-blur-xl border-t border-[#D4AF37]/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-[#F5E6D3] hover:text-[#D4AF37] transition-colors duration-300 py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-[#D4AF37] text-[#1A1110] px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}