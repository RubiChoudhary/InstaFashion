"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MEGA_MENU_DATA } from "../megaMenuData";

interface NavbarProps {
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onSelectCategory: (cat: string) => void;
}

const CATEGORY_TABS = [
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
  { id: "footwear", label: "Footwear" },
  { id: "jewellery", label: "Jewellery" },
  { id: "stationery", label: "Stationery" },
  { id: "utensils", label: "Kitchen & Utensils" },
];

export default function Navbar({
  selectedLocation,
  setSelectedLocation,
  searchQuery,
  setSearchQuery,
  cartCount,
  onOpenCart,
  onSelectCategory,
}: NavbarProps) {
  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(null);

  const currentMega = activeMegaCategory ? MEGA_MENU_DATA[activeMegaCategory] : null;

  return (
    <header
      className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-purple-100 shadow-xs"
      onMouseLeave={() => setActiveMegaCategory(null)}
    >
      <div className="container">
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-[56px] gap-3 sm:gap-6">
          {/* Logo with purple outline bag */}
          <Link
            href="/"
            className="flex items-center gap-2.5 cursor-pointer shrink-0"
            onClick={() => onSelectCategory("all")}
          >
            <div className="w-9 h-9 rounded-xl bg-[#52136d] flex items-center justify-center text-white shadow-md shadow-purple-900/20">
              <svg
                style={{ width: "20px", height: "20px" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <div>
              <span className="text-[22px] font-black tracking-tight text-[#1a0826] font-display">
                InstaFashion
              </span>
              <span className="text-[9.5px] block font-black text-[#7e22ce] uppercase tracking-wider -mt-1">
                Local Stores • Quick Delivery
              </span>
            </div>
          </Link>

          {/* Location Selector Pill */}
          <div className="hidden md:flex items-center gap-1.5 bg-[#f6f2fb] hover:bg-[#eee5f7] px-3 py-1.5 rounded-full border border-purple-200/90 text-xs font-semibold text-[#1a0826] cursor-pointer transition-colors shrink-0">
            <svg style={{ width: "13px", height: "13px" }} className="text-[#6b1187]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <select
              aria-label="Delivery Area"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-transparent font-bold focus:outline-none cursor-pointer pr-1 text-xs text-[#1a0826]"
            >
              <option value="Koramangala, Bengaluru">Koramangala, Bengaluru</option>
              <option value="MG Road, Bengaluru">MG Road, Bengaluru</option>
              <option value="Indiranagar, Bengaluru">Indiranagar, Bengaluru</option>
              <option value="Jayanagar, Bengaluru">Jayanagar, Bengaluru</option>
            </select>
            <svg
              style={{ width: "10px", height: "10px" }}
              className="text-[#6b1187] pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Pill Search Bar */}
          <div className="flex-1 max-w-xl hidden sm:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  style={{ width: "17px", height: "17px" }}
                  className="text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for kurtis, shoes, jewellery, utensils..."
                className="w-full bg-[#f8f5fc] text-[13.5px] font-medium pl-11 pr-4 py-2 rounded-full border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400 shadow-2xs"
              />
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Wishlist */}
            <Link
              href="/profile"
              className="p-1.5 text-slate-700 hover:text-purple-800 transition-colors"
              title="Wishlist"
            >
              <svg
                style={{ width: "23px", height: "23px" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </Link>

            {/* Profile Avatar */}
            <Link
              href="/profile"
              className="p-1.5 text-slate-700 hover:text-purple-800 transition-colors"
              title="My Account"
            >
              <svg
                style={{ width: "23px", height: "23px" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative bg-[#52136d] hover:bg-[#681989] text-white px-4 py-2 rounded-full flex items-center gap-2 text-[13px] font-extrabold shadow-md shadow-purple-900/20 transition-transform active:scale-95 cursor-pointer"
              title="View Cart"
            >
              <svg
                style={{ width: "17px", height: "17px" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Cart</span>
              <span className="bg-[#f43f5e] text-white text-[11px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Sub-nav Category Tabs */}
        <nav className="flex items-center justify-between py-1.5 border-t border-purple-100/70 overflow-x-auto no-scrollbar relative">
          <div className="flex items-center gap-6 sm:gap-8">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeMegaCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onMouseEnter={() => setActiveMegaCategory(tab.id)}
                  onClick={() => {
                    onSelectCategory(tab.id);
                    setActiveMegaCategory(null);
                  }}
                  className={`transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 py-1 text-sm tracking-tight relative ${
                    isActive
                      ? "text-[#621683] font-black"
                      : "text-slate-800 font-bold hover:text-[#7e22ce]"
                  }`}
                >
                  <span className="text-[13.5px] leading-tight">{tab.label}</span>
                  <svg
                    style={{ width: "11px", height: "11px" }}
                    className={`transition-transform duration-200 ${
                      isActive ? "rotate-180 text-[#7e22ce]" : "text-slate-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7e22ce] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Deals & Offers Tag Pill */}
          <button
            onClick={() => {
              onSelectCategory("all");
              setActiveMegaCategory(null);
            }}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#fdf2f8] hover:bg-[#fce7f3] text-[#be185d] px-3.5 py-1 rounded-full text-xs font-black border border-pink-200 transition-all shrink-0 cursor-pointer shadow-2xs"
          >
            <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="text-[12px] font-extrabold tracking-tight">Deals & Offers</span>
          </button>
        </nav>
      </div>

      {/* ========================================================== */}
      {/* ULTRA-PREMIUM MEGA MENU FLYOUT PANEL                       */}
      {/* ========================================================== */}
      {currentMega && (
        <div
          className="absolute left-0 right-0 top-full bg-white/98 backdrop-blur-2xl border-b border-purple-200/90 shadow-[0_30px_60px_-15px_rgba(82,19,109,0.22)] transition-all duration-300 z-50 animate-fade-in"
          onMouseEnter={() => setActiveMegaCategory(currentMega.id)}
          onMouseLeave={() => setActiveMegaCategory(null)}
        >
          <div className="container py-7">
            <div className="grid grid-cols-12 gap-8 items-start">
              
              {/* Category Columns (3 Columns with Badges & Hover Cards) */}
              <div className="col-span-12 lg:col-span-7 grid grid-cols-3 gap-6 divide-x divide-purple-100/70">
                {currentMega.columns.map((col, idx) => (
                  <div key={idx} className={`${idx > 0 ? "pl-6" : ""} space-y-3`}>
                    <div className="flex items-center gap-2 pb-2 border-b border-purple-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7e22ce]" />
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-[#340c49]">
                        {col.title}
                      </h4>
                    </div>

                    <ul className="space-y-1">
                      {col.items.map((item, i) => (
                        <li key={i}>
                          <button
                            onClick={() => {
                              onSelectCategory(currentMega.id);
                              setSearchQuery(item.name);
                              setActiveMegaCategory(null);
                            }}
                            className="group flex items-center justify-between w-full text-left py-1 px-2 rounded-lg text-xs text-slate-700 hover:text-[#52136d] hover:bg-purple-50/80 transition-all cursor-pointer font-medium"
                          >
                            <span className="group-hover:translate-x-1 transition-transform truncate pr-1">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full bg-pink-100 text-pink-700 border border-pink-200/70 shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right Dual Showcase: 1) Featured Boutique + 2) Trending Spotlight Item */}
              <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Featured Local Boutique Card */}
                <div className="relative rounded-2xl overflow-hidden border border-purple-200/80 shadow-md flex flex-col justify-between group min-h-[240px]">
                  {/* Background Store Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={currentMega.featuredStore.image}
                      alt={currentMega.featuredStore.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.78]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b0326] via-[#1b0326]/60 to-black/30" />
                  </div>

                  {/* Top pill badges */}
                  <div className="relative z-10 p-3.5 flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-wider text-purple-200 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                      Local Boutique
                    </span>
                    <span className="text-[10px] font-black text-amber-300 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-amber-300/30">
                      {currentMega.featuredStore.rating}
                    </span>
                  </div>

                  {/* Bottom Store Details */}
                  <div className="relative z-10 p-3.5 text-white">
                    <h5 className="font-extrabold text-sm text-white drop-shadow-sm line-clamp-1">
                      {currentMega.featuredStore.name}
                    </h5>
                    <div className="flex items-center gap-1.5 text-[11px] text-purple-200/90 mt-0.5">
                      <svg style={{ width: "11px", height: "11px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{currentMega.featuredStore.locality}</span>
                      <span>•</span>
                      <span className="text-emerald-300 font-bold">{currentMega.featuredStore.deliveryTime}</span>
                    </div>

                    <div className="mt-2 pt-2 border-t border-white/15 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-pink-300">
                        {currentMega.featuredStore.offer}
                      </span>
                      <button
                        onClick={() => {
                          onSelectCategory(currentMega.id);
                          setActiveMegaCategory(null);
                        }}
                        className="bg-white hover:bg-purple-50 text-[#52136d] text-[11px] font-black px-2.5 py-1 rounded-lg shadow-sm transition-transform active:scale-95 cursor-pointer flex items-center gap-1"
                      >
                        <span>Visit</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Highlight Product Express Card */}
                <div className="bg-gradient-to-b from-[#faf6fd] to-white rounded-2xl p-3.5 border border-purple-200/80 shadow-md flex flex-col justify-between group min-h-[240px]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#7e22ce] bg-purple-100/70 px-2 py-0.5 rounded-full border border-purple-200/80">
                        {currentMega.highlightProduct.tag}
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        30m Drop
                      </span>
                    </div>

                    <div className="relative h-28 w-full rounded-xl overflow-hidden mb-2 border border-purple-100 shadow-inner" style={{ position: "relative" }}>
                      <Image
                        src={currentMega.highlightProduct.image}
                        alt={currentMega.highlightProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h5 className="font-extrabold text-xs text-[#1a0826] line-clamp-1">
                      {currentMega.highlightProduct.name}
                    </h5>

                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-sm font-black text-[#52136d]">
                        ₹{currentMega.highlightProduct.price}
                      </span>
                      <span className="text-[11px] text-slate-400 line-through">
                        ₹{currentMega.highlightProduct.originalPrice}
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-600">
                        {Math.round(((currentMega.highlightProduct.originalPrice - currentMega.highlightProduct.price) / currentMega.highlightProduct.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onSelectCategory(currentMega.id);
                      setActiveMegaCategory(null);
                    }}
                    className="mt-2.5 w-full bg-[#52136d] hover:bg-[#681989] text-white font-bold py-1.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                  >
                    <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Instant Order</span>
                  </button>
                </div>

              </div>

            </div>

            {/* Bottom Luxury Footer Strip */}
            <div className="mt-5 pt-3 border-t border-purple-100/90 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-[#52136d] text-[11px]">
                  {currentMega.tagline}
                </span>
              </div>
              <button
                onClick={() => {
                  onSelectCategory(currentMega.id);
                  setActiveMegaCategory(null);
                }}
                className="text-xs font-bold text-[#7e22ce] hover:text-[#52136d] cursor-pointer flex items-center gap-1 group"
              >
                <span>Explore all in {currentMega.label}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
