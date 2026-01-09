"use client";

import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2, Clock, Heart, Coffee } from "lucide-react";

/* ---------- Hard-coded MENU META ---------- */
const MENU_META = {
  moods: [
    "focused",
    "energetic",
    "sleepy",
    "fresh",
    "light",
    "relaxed",
    "happy",
    "treat",
    "comfort",
    "stressed",
    "snack",
    "meal",
  ],

  tastes: [
    "bold",
    "strong",
    "bitter",
    "refreshing",
    "citrus",
    "fruity",
    "creamy",
    "sweet",
    "nutty",
    "caramel",
    "chocolatey",
    "dessert",
    "rich",
    "smooth",
    "balanced",
    "clean",
    "spicy",
    "salty",
    "savory",
    "plain",
    "herb",
    "buttery",
  ],

  times: ["morning", "afternoon", "evening", "night", "any"],
};

/* ---------- Types ---------- */
type Reply = {
  recommendation: string;
  reason: string;
  price?: number;
};

/* ---------- Helpers ---------- */
function labelize(value: string) {
  return value.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ChatInterface() {
  const [mood, setMood] = useState("");
  const [taste, setTaste] = useState("");
  const [time, setTime] = useState("evening");
  const [reply, setReply] = useState<Reply | null>(null);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!mood || !taste) return;

    try {
      setLoading(true);
      setReply(null);

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
        mood,
        taste,
        time,
        temperature: "cold",
        caffeine: "medium",
      });

      setReply(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-2xl bg-gradient-to-br from-[#592720]/40 via-[#3D2B1F]/40 to-[#592720]/40 border-2 border-[#D4AF37]/20 rounded-3xl shadow-2xl shadow-[#D4AF37]/10 p-8 md:p-10 space-y-8"
      >
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-3xl" />

        {/* Header */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#926644] rounded-2xl shadow-lg shadow-[#D4AF37]/30 mx-auto"
          >
            <Coffee className="w-8 h-8 text-[#1A1110]" strokeWidth={2.5} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6D3]">
            Your Perfect Cup Awaits
          </h2>
          <p className="text-[#F5E6D3]/60 text-lg">
            Share your mood and let our AI barista find your match
          </p>
        </div>

        {/* Mood Section */}
        <Section title="How are you feeling?" icon={<Heart className="w-4 h-4" />}>
          <ChipGroup items={MENU_META.moods} value={mood} onChange={setMood} />
        </Section>

        {/* Taste Section */}
        <Section
          title="Taste preference"
          icon={<Coffee className="w-4 h-4" />}
        >
          <ChipGroup
            items={MENU_META.tastes}
            value={taste}
            onChange={setTaste}
          />
        </Section>

        {/* Time Section */}
        <Section title="Time of day" icon={<Clock className="w-4 h-4" />}>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {MENU_META.times.map((t) => (
              <motion.button
                key={t}
                onClick={() => setTime(t)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                  time === t
                    ? "bg-[#D4AF37] text-[#1A1110] shadow-lg shadow-[#D4AF37]/30 border-2 border-[#D4AF37]"
                    : "bg-[#592720]/30 border-2 border-[#D4AF37]/20 text-[#F5E6D3] hover:border-[#D4AF37]/50 hover:bg-[#592720]/50"
                }`}
              >
                {labelize(t)}
              </motion.button>
            ))}
          </div>
        </Section>

        {/* Submit Button */}
        <motion.button
          onClick={send}
          disabled={loading || !mood || !taste}
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          className="w-full bg-gradient-to-r from-[#D4AF37] via-[#926644] to-[#D4AF37] text-[#1A1110] font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#D4AF37]/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-6 h-6" />
              <span>Crafting Your Perfect Cup...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-6 h-6" />
              <span>Get My Recommendation</span>
            </>
          )}
        </motion.button>

        {/* Response Card */}
        <AnimatePresence>
          {reply && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative mt-8"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-[#926644]/20 to-[#D4AF37]/20 rounded-2xl blur-xl" />
              
              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-[#3D2B1F] via-[#592720] to-[#3D2B1F] border-2 border-[#D4AF37] rounded-2xl p-8 shadow-2xl shadow-[#D4AF37]/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center shadow-lg">
                    <Coffee className="w-7 h-7 text-[#1A1110]" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37]">
                      {reply.recommendation}
                    </h3>
                    <p className="text-[#F5E6D3]/80 text-base md:text-lg leading-relaxed">
                      {reply.reason}
                    </p>
                    {reply.price && (
                      <div className="flex items-center gap-2 pt-2">
                        <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
                        <p className="text-2xl font-bold text-[#D4AF37]">
                          ₹{reply.price}
                        </p>
                        <div className="h-px flex-1 bg-gradient-to-l from-[#D4AF37]/50 to-transparent" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Decorative Corner Accents */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-lg" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ---------- Small Components ---------- */

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="text-[#D4AF37]">{icon}</div>
        <h3 className="text-lg font-semibold text-[#F5E6D3] tracking-wide">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
      </div>
      {children}
    </div>
  );
}

function ChipGroup({
  items,
  value,
  onChange,
}: {
  items: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <motion.button
          key={item}
          onClick={() => onChange(item)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            value === item
              ? "bg-[#F5E6D3] text-[#1A1110] shadow-lg shadow-[#F5E6D3]/20 border-2 border-[#F5E6D3]"
              : "bg-[#592720]/30 border-2 border-[#D4AF37]/20 text-[#F5E6D3] hover:border-[#D4AF37]/50 hover:bg-[#592720]/50"
          }`}
        >
          {labelize(item)}
        </motion.button>
      ))}
    </div>
  );
}