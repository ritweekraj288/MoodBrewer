"use client";

import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Clock, Brain, Coffee, Thermometer, Zap, ChevronRight } from "lucide-react";

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

type Reply = {
  recommendation: string;
  reason: string;
  price?: number;
};

function labelize(value: string) {
  return value.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ChatInterface() {
  const [mood, setMood] = useState("");
  const [taste, setTaste] = useState("");
  const [time, setTime] = useState("evening");
  const [temperature, setTemperature] = useState("cold");
  const [caffeine, setCaffeine] = useState("medium");
  const [reply, setReply] = useState<Reply | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function send() {
    if (!mood || !taste) {
      setError("Select mood and taste preferences");
      return;
    }

    try {
      setLoading(true);
      setReply(null);
      setError(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await axios.post(`${apiUrl}/chat`, {
        mood,
        taste,
        time,
        temperature,
        caffeine,
      });

      setReply(res.data);
    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.detail || 
        "Connection error. Ensure backend is running."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <Brain className="w-5 h-5 text-[#D97706]" />
          <span className="text-sm text-[#E8E3DE]/60 uppercase tracking-wider">
            AI Recommendation Engine
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-4">
          Configure Your
          <br />
          <span className="text-[#D97706]">Preference Matrix</span>
        </h2>
        <p className="text-lg text-[#E8E3DE]/60 max-w-2xl mx-auto">
          Define your parameters. Our algorithm will compute the optimal match.
        </p>
      </motion.div>

      {/* Main Interface */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1A1A1A] border border-[#D97706]/20 rounded-sm p-8 md:p-12 space-y-12"
      >
        {/* Mood Section */}
        <Section 
          title="01. MOOD STATE" 
          subtitle="Current emotional context"
          icon={<Brain className="w-5 h-5" />}
        >
          <ChipGroup items={MENU_META.moods} value={mood} onChange={setMood} />
        </Section>

        {/* Taste Section */}
        <Section 
          title="02. TASTE PROFILE" 
          subtitle="Flavor preference"
          icon={<Coffee className="w-5 h-5" />}
        >
          <ChipGroup items={MENU_META.tastes} value={taste} onChange={setTaste} />
        </Section>

        {/* Time Section */}
        <Section 
          title="03. TEMPORAL CONTEXT" 
          subtitle="Time of day"
          icon={<Clock className="w-5 h-5" />}
        >
          <div className="grid grid-cols-5 gap-3">
            {MENU_META.times.map((t) => (
              <motion.button
                key={t}
                onClick={() => setTime(t)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`py-4 px-6 rounded-sm font-medium text-sm transition-all duration-200 uppercase tracking-wide ${
                  time === t
                    ? "bg-[#D97706] text-[#0A0A0A] border border-[#D97706]"
                    : "bg-[#2A2A2A] border border-[#D97706]/20 text-[#E8E3DE] hover:border-[#D97706]/40"
                }`}
              >
                {labelize(t)}
              </motion.button>
            ))}
          </div>
        </Section>

        {/* Temperature & Caffeine */}
        <div className="grid md:grid-cols-2 gap-8">
          <Section 
            title="04. TEMPERATURE" 
            subtitle="Serving preference"
            icon={<Thermometer className="w-5 h-5" />}
          >
            <div className="grid grid-cols-2 gap-3">
              {["hot", "cold"].map((temp) => (
                <motion.button
                  key={temp}
                  onClick={() => setTemperature(temp)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-4 px-6 rounded-sm font-medium text-sm transition-all duration-200 uppercase tracking-wide ${
                    temperature === temp
                      ? "bg-[#D97706] text-[#0A0A0A] border border-[#D97706]"
                      : "bg-[#2A2A2A] border border-[#D97706]/20 text-[#E8E3DE] hover:border-[#D97706]/40"
                  }`}
                >
                  {labelize(temp)}
                </motion.button>
              ))}
            </div>
          </Section>

          <Section 
            title="05. CAFFEINE LEVEL" 
            subtitle="Stimulant requirement"
            icon={<Zap className="w-5 h-5" />}
          >
            <div className="grid grid-cols-4 gap-2">
              {["none", "low", "medium", "high"].map((caf) => (
                <motion.button
                  key={caf}
                  onClick={() => setCaffeine(caf)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-4 px-3 rounded-sm font-medium text-xs transition-all duration-200 uppercase tracking-wide ${
                    caffeine === caf
                      ? "bg-[#D97706] text-[#0A0A0A] border border-[#D97706]"
                      : "bg-[#2A2A2A] border border-[#D97706]/20 text-[#E8E3DE] hover:border-[#D97706]/40"
                  }`}
                >
                  {labelize(caf)}
                </motion.button>
              ))}
            </div>
          </Section>
        </div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-[#2A1A0A] border border-[#D97706]/40 rounded-sm p-4 text-[#D97706] text-sm"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          onClick={send}
          disabled={loading || !mood || !taste}
          whileHover={{ scale: loading ? 1 : 1.01 }}
          whileTap={{ scale: loading ? 1 : 0.99 }}
          className="w-full bg-[#D97706] text-[#0A0A0A] font-bold text-lg py-5 rounded-sm flex items-center justify-center gap-3 hover:bg-[#F59E0B] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Compute Recommendation</span>
              <ChevronRight className="w-5 h-5" />
            </>
          )}
        </motion.button>

        {/* Response Card */}
        <AnimatePresence>
          {reply && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="mt-8 border-t border-[#D97706]/20 pt-8"
            >
              <div className="bg-[#2A2A2A] border border-[#D97706]/30 rounded-sm p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D97706] rounded-sm flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-[#0A0A0A]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="text-xs text-[#D97706] uppercase tracking-wider mb-2">
                        Recommended
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-[#FAF5F0] mb-3">
                        {reply.recommendation}
                      </h3>
                    </div>
                    <p className="text-[#E8E3DE]/80 text-base leading-relaxed">
                      {reply.reason}
                    </p>
                    {reply.price && (
                      <div className="pt-4 border-t border-[#D97706]/20">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm text-[#E8E3DE]/60 uppercase tracking-wider">
                            Price
                          </span>
                          <span className="text-2xl font-bold text-[#D97706]">
                            ₹{reply.price}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function Section({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="text-[#D97706]">{icon}</div>
        <div>
          <h3 className="text-sm font-bold text-[#FAF5F0] uppercase tracking-wider">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-[#E8E3DE]/50 mt-1">{subtitle}</p>
          )}
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[#D97706]/20 to-transparent ml-4" />
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
      {items.map((item, index) => (
        <motion.button
          key={item}
          onClick={() => onChange(item)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.01 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-all duration-200 uppercase tracking-wide ${
            value === item
              ? "bg-[#D97706] text-[#0A0A0A] border border-[#D97706]"
              : "bg-[#2A2A2A] border border-[#D97706]/20 text-[#E8E3DE] hover:border-[#D97706]/40"
          }`}
        >
          {labelize(item)}
        </motion.button>
      ))}
    </div>
  );
}
