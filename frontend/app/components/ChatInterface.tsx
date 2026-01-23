"use client";

import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Clock, Brain, Coffee, Thermometer, Zap, ChevronRight, Sparkles } from "lucide-react";

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
    <div className="max-w-6xl mx-auto px-6 py-20 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#D97706]/20 to-[#F59E0B]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-[#D97706]/20 to-[#F59E0B]/20 border border-[#D97706]/30 rounded-full backdrop-blur-sm"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Brain className="w-5 h-5 text-[#D97706]" />
          </motion.div>
          <span className="text-sm text-[#E8E3DE]/80 uppercase tracking-wider font-medium">
            AI Recommendation Engine
          </span>
          <Sparkles className="w-4 h-4 text-[#F59E0B]" />
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-bold text-[#FAF5F0] mb-6">
          Configure Your
          <br />
          <span className="bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
            Preference Matrix
          </span>
        </h2>
        <p className="text-lg md:text-xl text-[#E8E3DE]/70 max-w-2xl mx-auto">
          Define your parameters. Our algorithm will compute the optimal match.
        </p>
      </motion.div>

      {/* Main Interface */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#2A2A2A] border border-[#D97706]/30 rounded-2xl p-8 md:p-12 space-y-12 shadow-2xl shadow-[#D97706]/10 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D97706]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-[#F59E0B]/5 to-transparent rounded-full blur-3xl" />

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
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`py-4 px-6 rounded-xl font-medium text-sm transition-all duration-200 uppercase tracking-wide relative overflow-hidden ${
                  time === t
                    ? "bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0A0A0A] border-2 border-[#D97706] shadow-lg shadow-[#D97706]/30"
                    : "bg-[#2A2A2A] border-2 border-[#D97706]/20 text-[#E8E3DE] hover:border-[#D97706]/50 hover:bg-[#2A2A2A]/80"
                }`}
              >
                {time === t && (
                  <motion.div
                    layoutId="timeButton"
                    className="absolute inset-0 bg-gradient-to-r from-[#D97706] to-[#F59E0B]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{labelize(t)}</span>
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
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-4 px-6 rounded-xl font-medium text-sm transition-all duration-200 uppercase tracking-wide relative overflow-hidden ${
                    temperature === temp
                      ? "bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0A0A0A] border-2 border-[#D97706] shadow-lg shadow-[#D97706]/30"
                      : "bg-[#2A2A2A] border-2 border-[#D97706]/20 text-[#E8E3DE] hover:border-[#D97706]/50"
                  }`}
                >
                  {temperature === temp && (
                    <motion.div
                      layoutId="tempButton"
                      className="absolute inset-0 bg-gradient-to-r from-[#D97706] to-[#F59E0B]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{labelize(temp)}</span>
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
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-4 px-3 rounded-xl font-medium text-xs transition-all duration-200 uppercase tracking-wide relative overflow-hidden ${
                    caffeine === caf
                      ? "bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0A0A0A] border-2 border-[#D97706] shadow-lg shadow-[#D97706]/30"
                      : "bg-[#2A2A2A] border-2 border-[#D97706]/20 text-[#E8E3DE] hover:border-[#D97706]/50"
                  }`}
                >
                  {caffeine === caf && (
                    <motion.div
                      layoutId="caffeineButton"
                      className="absolute inset-0 bg-gradient-to-r from-[#D97706] to-[#F59E0B]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{labelize(caf)}</span>
                </motion.button>
              ))}
            </div>
          </Section>
        </div>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="bg-gradient-to-r from-[#2A1A0A] to-[#3D2817] border-2 border-[#D97706]/50 rounded-xl p-4 text-[#D97706] text-sm backdrop-blur-sm"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <motion.button
          onClick={send}
          disabled={loading || !mood || !taste}
          whileHover={{ scale: loading ? 1 : 1.02, y: -2 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          className="w-full bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-[#0A0A0A] font-bold text-lg py-6 rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#D97706]/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#F59E0B]"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 100%" }}
          />
          <span className="relative z-10 flex items-center gap-3">
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Compute Recommendation</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </span>
        </motion.button>

        {/* Response Card */}
        <AnimatePresence>
          {reply && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="mt-8 border-t-2 border-[#D97706]/30 pt-8"
            >
              <div className="bg-gradient-to-br from-[#2A2A2A] via-[#1A1A1A] to-[#2A2A2A] border-2 border-[#D97706]/40 rounded-2xl p-8 shadow-2xl shadow-[#D97706]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/10 rounded-full blur-2xl" />
                <div className="flex items-start gap-6 relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-xl flex items-center justify-center shadow-lg shadow-[#D97706]/30"
                  >
                    <Coffee className="w-8 h-8 text-[#0A0A0A]" strokeWidth={1.5} />
                  </motion.div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="text-xs text-[#D97706] uppercase tracking-wider mb-2 font-semibold">
                        Recommended
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FAF5F0] to-[#E8E3DE] bg-clip-text text-transparent mb-3">
                        {reply.recommendation}
                      </h3>
                    </div>
                    <p className="text-[#E8E3DE]/80 text-base leading-relaxed">
                      {reply.reason}
                    </p>
                    {reply.price && (
                      <div className="pt-4 border-t border-[#D97706]/20">
                        <div className="flex items-baseline gap-3">
                          <span className="text-sm text-[#E8E3DE]/60 uppercase tracking-wider">
                            Price
                          </span>
                          <span className="text-3xl font-bold bg-gradient-to-r from-[#D97706] to-[#F59E0B] bg-clip-text text-transparent">
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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-[#D97706]"
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="text-sm font-bold text-[#FAF5F0] uppercase tracking-wider">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-[#E8E3DE]/50 mt-1">{subtitle}</p>
          )}
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[#D97706]/30 via-[#F59E0B]/30 to-transparent ml-4" />
      </div>
      {children}
    </motion.div>
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
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <motion.button
          key={item}
          onClick={() => onChange(item)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.02, type: "spring" }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 uppercase tracking-wide relative overflow-hidden ${
            value === item
              ? "bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0A0A0A] border-2 border-[#D97706] shadow-lg shadow-[#D97706]/30"
              : "bg-[#2A2A2A] border-2 border-[#D97706]/20 text-[#E8E3DE] hover:border-[#D97706]/50 hover:bg-[#2A2A2A]/80"
          }`}
        >
          {value === item && (
            <motion.div
              layoutId="selectedChip"
              className="absolute inset-0 bg-gradient-to-r from-[#D97706] to-[#F59E0B]"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative z-10">{labelize(item)}</span>
        </motion.button>
      ))}
    </div>
  );
}
