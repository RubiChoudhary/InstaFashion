"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SlideData {
  id: number;
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  highlightText: string;
  subCategories: string;
  image: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    tagline: "SHOP FROM YOUR CITY'S LOCAL STORES",
    titleLine1: "Top Footwear & Ethnic",
    titleLine2: "Styles, Delivered in.",
    highlightText: "1-Day Delivery",
    subCategories: "Footwear • Ethnic Wear • Jewellery • Stationery • Kitchen & More",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    tagline: "CURATED WOMEN'S & MEN'S FASHION",
    titleLine1: "Trending Kurtis & Casual",
    titleLine2: "Apparel, Delivered in.",
    highlightText: "1-Day Express",
    subCategories: "Kurtis • Shirts • Trousers • Sarees • Dupattas • Footwear",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    tagline: "SARAFA BAZAAR JEWELLERY & UTENSILS",
    titleLine1: "Kundan Jewellery & Steel",
    titleLine2: "Cookware, Delivered in.",
    highlightText: "1-Day Delivery",
    subCategories: "Jhumkas • Chokers • Bangles • Copperware • Tri-ply Utensils",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
  },
];

interface HeroBannerProps {
  onShopNowClick: () => void;
}

export default function HeroBanner({ onShopNowClick }: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#eddffc] via-[#f7f0fe] to-[#ecddfc] border-b border-purple-200/50 py-10 sm:py-16">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-fuchsia-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5">
            {/* Tagline with subtle divider line */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-black tracking-widest text-[#52136d] uppercase">
                {slide.tagline}
              </span>
              <span className="w-8 h-0.5 bg-[#52136d]/50 rounded-full inline-block" />
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] text-[#220738] font-display">
                {slide.titleLine1} <br />
                {slide.titleLine2}
              </h1>
              <div className="text-3xl sm:text-5xl font-black italic tracking-tight bg-gradient-to-r from-[#d946ef] via-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent pt-1 flex items-center gap-3">
                <span>{slide.highlightText}</span>
                {/* Express delivery rider vector */}
                <svg style={{ width: "36px", height: "36px" }} className="text-[#8b5cf6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* Categories bullet line */}
            <p className="text-xs sm:text-sm font-semibold text-slate-600 tracking-tight">
              {slide.subCategories}
            </p>

            {/* Action CTA + Swiper Dots */}
            <div className="pt-2 flex items-center gap-5">
              <button
                onClick={onShopNowClick}
                className="bg-gradient-to-r from-[#52136d] to-[#6d1b8f] hover:from-[#430c5a] hover:to-[#5c157a] text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-purple-900/25 flex items-center gap-2 text-sm transition-transform active:scale-95 cursor-pointer"
              >
                <span>Shop Now</span>
                <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Swiper Dots */}
              <div className="flex items-center gap-2">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx
                        ? "w-6 bg-[#52136d]"
                        : "w-2 bg-purple-300 hover:bg-purple-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Product Spotlight with Neon Circle & 3D Podium */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Glowing Circular Ring Behind Product */}
            <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full border-2 border-white/90 shadow-[0_0_60px_rgba(255,255,255,0.85)] pointer-events-none" />

            {/* Product Card with 3D Oval Podium */}
            <div className="relative w-full max-w-[420px] flex flex-col items-center">
              {/* Main Product Image on Podium */}
              <div
                className="relative w-72 sm:w-80 h-64 sm:h-72 rounded-3xl overflow-hidden drop-shadow-2xl z-10 group"
                style={{ position: "relative" }}
              >
                <Image
                  key={slide.image}
                  src={slide.image}
                  alt={slide.titleLine1}
                  fill
                  priority
                  className="object-cover transition-all duration-700 hover:scale-105"
                />
              </div>

              {/* 3D Oval Podium Base */}
              <div className="w-80 sm:w-96 h-14 bg-gradient-to-b from-[#e3cffa] to-[#c7a9f2] rounded-[100%] shadow-xl -mt-6 border border-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
