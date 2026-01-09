"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChatInterface from "./components/ChatInterface";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1110]">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ChatInterface />
      </main>
      <Footer />
    </div>
  );
}