"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChatInterface from "./components/ChatInterface";
import MenuPreview from "./components/MenuPreview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <MenuPreview />
        <ChatInterface />
      </main>
      <Footer />
    </div>
  );
}