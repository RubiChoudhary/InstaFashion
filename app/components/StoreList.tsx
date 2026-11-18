"use client";

import React from "react";
import Image from "next/image";

interface StoreItem {
  id: string;
  name: string;
  category: string;
  image: string;
  svgIcon: React.ReactNode;
}

const CITY_STORES: StoreItem[] = [
  {
    id: "s1",
    name: "M.G. Road Boutiques",
    category: "Women's Fashion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=80",
    svgIcon: (
      <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: "s2",
    name: "Sarafa Bazaar Jewellers",
    category: "Artificial Jewellery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80",
    svgIcon: (
      <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: "s3",
    name: "Linking Road Footwear",
    category: "Shoes & Footwear",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=80",
    svgIcon: (
      <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    id: "s4",
    name: "University Circle Stationery",
    category: "Books & Study",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&auto=format&fit=crop&q=80",
    svgIcon: (
      <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "s5",
    name: "Main Chowk Bartan Bhandar",
    category: "Kitchen & Utensils",
    image: "https://images.unsplash.com/photo-1584990347449-3a85b9679808?w=500&auto=format&fit=crop&q=80",
    svgIcon: (
      <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function StoreList() {
  return (
    <section className="container py-6">
      {/* 1. TOP LOCAL STORES CARD */}
      <div className="bg-gradient-to-r from-[#fbf8fe] via-[#f7f0fe] to-[#f5ecfc] border border-purple-200/70 rounded-3xl p-6 sm:p-7 shadow-xs relative overflow-hidden">
        {/* Soft Background City Silhouette Motif */}
        <div className="absolute left-8 bottom-0 opacity-15 pointer-events-none hidden sm:block">
          <svg style={{ width: "160px", height: "90px" }} viewBox="0 0 200 120" fill="none" stroke="#6b1187" strokeWidth="1.5">
            <path d="M10 110 L10 70 L30 70 L30 40 L50 40 L50 110" />
            <path d="M50 110 L50 30 L80 10 L110 30 L110 110" />
            <path d="M110 110 L110 50 L140 50 L140 110" />
            <path d="M140 110 L140 60 L180 60 L180 110" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          {/* Left Intro Column */}
          <div className="lg:col-span-3 space-y-3">
            {/* Real Store Vector Icon + rule */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-purple-100/80 flex items-center justify-center text-[#52136d]">
                <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="w-8 h-1 bg-[#52136d] rounded-full inline-block" />
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#240b3b] font-display leading-[1.2]">
              Shop from Your City&apos;s <br />
              <span className="text-[#52136d]">Top Local Stores</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Boutiques, jewellery, footwear hubs, stationers, and utensil shops — all in one place.
            </p>

            <div className="pt-2">
              <button className="bg-[#52136d] hover:bg-[#681989] text-white font-extrabold px-6 py-3 rounded-full text-sm flex items-center gap-2 shadow-md shadow-purple-900/20 transition-transform active:scale-95 cursor-pointer">
                <span>Explore Local Stores</span>
                <svg style={{ width: "15px", height: "15px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right 5 Stores Row */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {CITY_STORES.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
              >
                {/* Store image */}
                <div
                  className="relative h-24 sm:h-28 w-full bg-slate-100 overflow-hidden"
                  style={{ position: "relative" }}
                >
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="p-3.5 space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-5 h-5 rounded-md bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                        {store.svgIcon}
                      </span>
                      <h3 className="font-extrabold text-[12.5px] sm:text-[13px] text-slate-900 line-clamp-1">
                        {store.name}
                      </h3>
                    </div>
                    {/* Circle Arrow Vector */}
                    <span className="w-5 h-5 rounded-full bg-purple-50 text-purple-700 group-hover:bg-[#52136d] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <svg style={{ width: "10px", height: "10px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-[11.5px] text-slate-500 line-clamp-1 pl-6.5 font-medium">
                    {store.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. VALUE PROPOSITION ROW (HORIZONTAL 4 PILLARS) WITH CLEAN VECTOR SVGS */}
      <div className="bg-white rounded-3xl border border-purple-100 shadow-2xs p-5 sm:p-6 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Pillar 1: 1-Day Express Delivery */}
          <div className="flex items-center gap-3.5 px-2 sm:px-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#52136d] flex items-center justify-center shrink-0">
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                1-Day Express
              </h4>
              <p className="text-[12.5px] text-slate-600 font-semibold mt-0.5">
                Guaranteed Delivery
              </p>
            </div>
          </div>

          {/* Pillar 2: Real Local City Stores */}
          <div className="flex items-center gap-3.5 px-2 sm:px-4 pt-3 md:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#52136d] flex items-center justify-center shrink-0">
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                Real Local
              </h4>
              <p className="text-[12.5px] text-slate-600 font-semibold mt-0.5">
                City Stores
              </p>
            </div>
          </div>

          {/* Pillar 3: Wide Variety & Sizes */}
          <div className="flex items-center gap-3.5 px-2 sm:px-4 pt-3 md:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#52136d] flex items-center justify-center shrink-0">
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                Wide
              </h4>
              <p className="text-[12.5px] text-slate-600 font-semibold mt-0.5">
                Variety & Sizes
              </p>
            </div>
          </div>

          {/* Pillar 4: Safe & Secure Payments */}
          <div className="flex items-center gap-3.5 px-2 sm:px-4 pt-3 md:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#52136d] flex items-center justify-center shrink-0">
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                Safe & Secure
              </h4>
              <p className="text-[12.5px] text-slate-600 font-semibold mt-0.5">
                Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
