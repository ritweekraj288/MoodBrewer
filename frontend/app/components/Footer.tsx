"use client";

import { MessageCircle, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col items-center md:items-start gap-1">
          <h4 className="text-[#F5E6D3] font-serif text-lg">MoodBrewer</h4>
          <p className="text-xs text-white/30">AI-Powered Coffee Curator</p>
        </div>

        {/* <div className="flex gap-6">
          <a href="#" className="text-white/40 hover:text-[#C69C6D] transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-white/40 hover:text-[#C69C6D] transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-white/40 hover:text-[#C69C6D] transition-colors"><MessageCircle className="w-5 h-5" /></a>
        </div> */}

        <div className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} MoodBrewer AI
        </div>

      </div>
    </footer>
  );
}
