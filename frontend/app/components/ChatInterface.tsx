"use client";

import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Sparkles, Coffee, ChevronRight, RotateCcw } from "lucide-react";

// Types
type Reply = {
  recommendation: string;
  reason: string;
  price?: number;
};

// Data
const MOODS = [
  "Focused", "Energetic", "Sleepy", "Fresh", "Light", "Relaxed",
  "Happy", "Treat", "Comfort", "Stressed", "Snack", "Meal"
];

const TASTES = [
  "Bold", "Strong", "Bitter", "Refreshing", "Citrus", "Fruity",
  "Creamy", "Sweet", "Nutty", "Caramel", "Chocolatey", "Dessert",
  "Rich", "Smooth", "Balanced", "Clean", "Spicy", "Salty", "Savory",
  "Plain", "Herb", "Buttery"
];

const TIMES = ["Morning", "Afternoon", "Evening", "Night", "Any"];
const TEMPS = ["Hot", "Cold"];
const CAFFEINE = ["None", "Low", "Medium", "High"];

export default function ChatInterface() {
  const [mood, setMood] = useState("");
  const [taste, setTaste] = useState("");
  const [time, setTime] = useState("Evening");
  const [temperature, setTemperature] = useState("Hot");
  const [caffeine, setCaffeine] = useState("Medium");
  const [reply, setReply] = useState<Reply | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function send() {
    if (!mood || !taste) {
      setError("Please select both a mood and a taste.");
      return;
    }

    try {
      setLoading(true);
      setReply(null);
      setError(null);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await axios.post(`${apiUrl}/chat`, {
        mood: mood.toLowerCase(),
        taste: taste.toLowerCase(),
        time: time.toLowerCase(),
        temperature: temperature.toLowerCase(),
        caffeine: caffeine.toLowerCase(),
      });

      setReply(res.data);
    } catch (err: any) {
      console.error(err);
      setError("Our barista is currently unavailable. Please check backend connection.");
    } finally {
      setLoading(false);
    }
  }

  const reset = () => {
    setReply(null);
    setMood("");
    setTaste("");
    setError(null);
  };

  const OptionGroup = ({ label, options, current, onChange }: { label: string, options: string[], current: string, onChange: (v: string) => void }) => (
    <div className="space-y-3">
      <label className="text-xs uppercase text-[#C69C6D] tracking-widest font-semibold ml-1">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 border ${current === opt
                ? 'bg-[#C69C6D] text-[#241A15] border-[#C69C6D] font-medium shadow-[0_0_15px_rgba(198,156,109,0.3)]'
                : 'bg-white/5 border-white/10 text-white/60 hover:border-[#C69C6D]/50 hover:text-[#F5E6D3]'
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div id="chat-interface" className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-[#050505]">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(198,156,109,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10 my-12">

        {/* Header */}
        <motion.div
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#F5E6D3]">The Concierge</h2>
          <p className="text-[#C69C6D] uppercase tracking-widest text-xs">Curate your perfect cup</p>
        </motion.div>

        {/* Main Card */}
        <div className="bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative min-h-[500px]">

          <AnimatePresence mode="wait">

            {/* RESPONSE VIEW */}
            {reply ? (
              <motion.div
                key="response"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="text-center space-y-8 py-8"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-[#C69C6D] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                  <Coffee className="w-12 h-12 text-[#241A15]" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[#C69C6D] uppercase tracking-widest">Recommended Blend</h3>
                  <h1 className="text-5xl md:text-7xl font-serif text-[#F5E6D3]">{reply.recommendation}</h1>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/5 max-w-2xl mx-auto">
                  <p className="text-xl text-white/80 leading-relaxed font-serif italic">
                    &ldquo;{reply.reason}&rdquo;
                  </p>
                </div>

                {reply.price && (
                  <div className="text-[#D4AF37] font-serif text-3xl">
                    ₹{reply.price}
                  </div>
                )}

                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#C69C6D] text-[#C69C6D] hover:bg-[#C69C6D] hover:text-[#241A15] transition-all uppercase tracking-widest text-xs font-bold mt-8"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Over
                </button>
              </motion.div>
            ) : loading ? (
              /* LOADING VIEW */
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 gap-6"
              >
                <div className="relative">
                  <div className="w-20 h-20 border-2 border-[#C69C6D]/20 border-t-[#C69C6D] rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-[#D4AF37] animate-pulse" />
                  </div>
                </div>
                <p className="text-[#F5E6D3] font-serif text-xl tracking-wide">Consulting the archives...</p>
              </motion.div>

            ) : (
              /* FULL FORM VIEW */
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column: Primary Selections */}
                  <div className="space-y-8">
                    <OptionGroup label=" Current Mood" options={MOODS} current={mood} onChange={setMood} />
                    <OptionGroup label=" Desired Taste" options={TASTES} current={taste} onChange={setTaste} />
                  </div>

                  {/* Right Column: Context */}
                  <div className="space-y-8 lg:border-l lg:border-white/5 lg:pl-12">
                    <OptionGroup label=" Time of Day" options={TIMES} current={time} onChange={setTime} />
                    <OptionGroup label=" Temperature" options={TEMPS} current={temperature} onChange={setTemperature} />
                    <OptionGroup label=" Caffeine Level" options={CAFFEINE} current={caffeine} onChange={setCaffeine} />
                  </div>
                </div>

                <div className="pt-4 flex flex-col items-center gap-4">
                  {error && <p className="text-red-400 text-sm animate-pulse">{error}</p>}

                  <button
                    onClick={send}
                    disabled={!mood || !taste}
                    className="group relative px-12 py-5 bg-gradient-to-r from-[#C69C6D] to-[#D4AF37] text-[#241A15] rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                  >
                    <span className="flex items-center gap-3">
                      Brew My Recommendation
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
