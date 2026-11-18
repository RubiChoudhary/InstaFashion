"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import TopTicker from "../components/TopTicker";
import Footer from "../components/Footer";

export default function PartnerWithUsPage() {
  const [partnerType, setPartnerType] = useState<"store" | "rider">("rider");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8fc] text-[#1a0826] font-sans antialiased flex flex-col">
      <TopTicker />
      <Navbar
        selectedLocation="Koramangala, Bengaluru"
        setSelectedLocation={() => {}}
        searchQuery=""
        setSearchQuery={() => {}}
        cartCount={3}
        onOpenCart={() => {}}
        onSelectCategory={() => {}}
      />

      <main className="flex-1 py-10">
        <div className="container space-y-10">
          
          {/* ========================================================= */}
          {/* 1. HERO SECTION WITH 3D LOCAL STOREFRONT ILLUSTRATION     */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 bg-purple-100/70 border border-purple-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[#7e22ce]">
                <span>CITY MERCHANT NETWORK</span>
                <span className="text-[10px]">→</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#1a0826] font-display leading-[1.15] tracking-tight">
                Partner with <span className="text-[#6b1187]">InstaFashion</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
                Transform your local brick-and-mortar boutique or shop into a 30-minute quick-commerce powerhouse.
              </p>

              <div className="flex items-center gap-4 pt-2 flex-wrap">
                <a
                  href="#application-form"
                  className="bg-[#52136d] hover:bg-[#681989] text-white font-extrabold px-6 py-3 rounded-full text-[13.5px] flex items-center gap-2 shadow-md shadow-purple-900/20 transition-transform active:scale-95 cursor-pointer"
                >
                  <span>Become a Partner</span>
                  <span>→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="bg-white hover:bg-purple-50 text-slate-800 border border-purple-200 font-bold px-6 py-3 rounded-full text-[13.5px] shadow-2xs transition-all cursor-pointer"
                >
                  Know the Benefits
                </a>
              </div>
            </div>

            {/* Right Column: 3D Boutique / Storefront Presentation Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-purple-200/80 shadow-xl bg-gradient-to-tr from-[#ede4f8] to-[#fcfbff] p-2 aspect-[4/3] flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ position: "relative" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1000&auto=format&fit=crop&q=80"
                    alt="City Boutique Storefront"
                    fill
                    priority
                    className="object-cover"
                  />
                  {/* Floating Bag Logo Badge */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[#52136d] text-white flex items-center justify-center shadow-xl border-2 border-white z-10">
                    <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. THREE SUMMARY METRIC CARDS ROW                         */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: 3x Daily Order Volume */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-xs flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-purple-50 text-[#6b1187] flex items-center justify-center shrink-0">
                <svg style={{ width: "26px", height: "26px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-black text-[#1a0826] leading-none block">3x</span>
                <h3 className="font-extrabold text-[14px] text-slate-900 mt-1">Daily Order Volume</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                  Reach customers across your city within a 10 km delivery radius.
                </p>
              </div>
            </div>

            {/* Card 2: 30 Mins Instant Fleet Pickup */}
            <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <svg style={{ width: "26px", height: "26px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-black text-emerald-800 leading-none block">30 Mins</span>
                <h3 className="font-extrabold text-[14px] text-slate-900 mt-1">Instant Fleet Pickup</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                  Dedicated fleet riders arrive at your counter within 7 minutes of order ping.
                </p>
              </div>
            </div>

            {/* Card 3: 0% First 30 Days Commission */}
            <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-xs flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-pink-50 text-[#be185d] flex items-center justify-center shrink-0">
                <svg style={{ width: "26px", height: "26px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-black text-[#be185d] leading-none block">0%</span>
                <h3 className="font-extrabold text-[14px] text-slate-900 mt-1">First 30 Days Commission</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed">
                  Free onboarding, free item photography, and next-day bank settlements.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. PARTNER ONBOARDING APPLICATION FORM WITH MODEL AVATAR  */}
          {/* ========================================================= */}
          <div id="application-form" className="bg-white rounded-3xl border border-purple-100 shadow-md p-6 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Friendly Store Owner Avatar with Checklist */}
              <div className="lg:col-span-4 relative flex flex-col items-center">
                <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-purple-100" style={{ position: "relative" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                    alt="Store Owner Partner"
                    fill
                    className="object-cover object-top"
                  />

                  {/* Checklist overlay badges */}
                  <div className="absolute left-3 bottom-3 space-y-1.5 z-10">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-100 shadow-sm flex items-center gap-2 text-[11px] font-extrabold text-slate-800">
                      <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</span>
                      <span>Grow Your Business</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-100 shadow-sm flex items-center gap-2 text-[11px] font-extrabold text-slate-800">
                      <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</span>
                      <span>Get More Customers</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-100 shadow-sm flex items-center gap-2 text-[11px] font-extrabold text-slate-800">
                      <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</span>
                      <span>Quick Order Fulfillment</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-purple-100 shadow-sm flex items-center gap-2 text-[11px] font-extrabold text-slate-800">
                      <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">✓</span>
                      <span>Secure & Fast Payments</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form with Toggle */}
              <div className="lg:col-span-8">
                {/* Switcher Pill (Local Store Owner vs Delivery Rider Partner) */}
                <div className="flex bg-[#f3ecf8] p-1.5 rounded-2xl max-w-md ml-auto mb-6">
                  <button
                    type="button"
                    onClick={() => setPartnerType("store")}
                    className={`flex-1 py-2 text-xs sm:text-[13px] font-extrabold rounded-xl transition-all cursor-pointer ${
                      partnerType === "store"
                        ? "bg-[#52136d] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Local Store Owner
                  </button>
                  <button
                    type="button"
                    onClick={() => setPartnerType("rider")}
                    className={`flex-1 py-2 text-xs sm:text-[13px] font-extrabold rounded-xl transition-all cursor-pointer ${
                      partnerType === "rider"
                        ? "bg-[#52136d] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Delivery Rider Partner
                  </button>
                </div>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center text-emerald-900 animate-fade-in">
                    <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg style={{ width: "28px", height: "28px" }} className="text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-black">Application Received!</h3>
                    <p className="text-xs sm:text-sm text-emerald-700 mt-2 max-w-md mx-auto">
                      Our regional onboarding manager will contact you within 24 hours to verify KYC, set up your device, and activate your store catalog.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-5 bg-[#52136d] text-white font-extrabold px-6 py-2 rounded-xl text-xs cursor-pointer shadow-xs"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-[#f8f5fc] text-[13.5px] px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Owner / Contact Person <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Amit Verma"
                          className="w-full bg-[#f8f5fc] text-[13.5px] px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number (WhatsApp Enabled) <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#f8f5fc] text-[13.5px] px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          City & Market Locality <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. M.G. Road Market, Bengaluru"
                          className="w-full bg-[#f8f5fc] text-[13.5px] px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Shop / Complete Address <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Shop No., Complex, Street name, Near Landmark..."
                        className="w-full bg-[#f8f5fc] text-[13.5px] px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#52136d] hover:bg-[#681989] text-white font-black py-3.5 rounded-2xl text-[14.5px] shadow-md shadow-purple-900/25 transition-transform active:scale-95 cursor-pointer mt-2"
                    >
                      Submit Partner Application →
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* 4. HOW IT WORKS: GET STARTED IN 4 SIMPLE STEPS            */}
          {/* ========================================================= */}
          <div id="how-it-works" className="bg-gradient-to-r from-[#fbf8fe] via-[#f7f0fe] to-[#f5ecfc] rounded-3xl p-7 sm:p-10 border border-purple-200/70 shadow-xs relative overflow-hidden">
            {/* Header: HOW IT WORKS + Line */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#7e22ce]">
                HOW IT WORKS
              </span>
              <span className="w-10 h-0.5 bg-[#7e22ce] rounded-full inline-block" />
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-[#1a0826] font-display mb-10">
              Get Started in <span className="text-[#6b1187]">4 Simple Steps</span>
            </h2>

            {/* 4 Steps Row with Connecting Dotted Lines and Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
              
              {/* Step 1: Submit KYC */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-purple-100/80 border border-purple-200 flex items-center justify-center text-[#6b1187] shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#6b1187] text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                    1
                  </span>
                </div>

                <h3 className="text-base font-black text-[#1a0826]">
                  Submit KYC
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mt-1.5 max-w-[210px]">
                  Fill out the quick 2-minute registration above.
                </p>

                <div className="hidden lg:block absolute top-8 left-[65%] w-[70%] border-t-2 border-dotted border-purple-200 pointer-events-none -z-0" />
              </div>

              {/* Step 2: Catalog Scan */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-purple-100/80 border border-purple-200 flex items-center justify-center text-[#6b1187] shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#6b1187] text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                    2
                  </span>
                </div>

                <h3 className="text-base font-black text-[#1a0826]">
                  Catalog Scan
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mt-1.5 max-w-[210px]">
                  Our field agent lists and prices your in-stock merchandise.
                </p>

                <div className="hidden lg:block absolute top-8 left-[65%] w-[70%] border-t-2 border-dotted border-purple-200 pointer-events-none -z-0" />
              </div>

              {/* Step 3: Receive Orders */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-purple-100/80 border border-purple-200 flex items-center justify-center text-[#6b1187] shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#6b1187] text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                    3
                  </span>
                </div>

                <h3 className="text-base font-black text-[#1a0826]">
                  Receive Orders
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mt-1.5 max-w-[210px]">
                  Get instant audio alerts on your merchant app whenever an order pings.
                </p>

                <div className="hidden lg:block absolute top-8 left-[65%] w-[70%] border-t-2 border-dotted border-purple-200 pointer-events-none -z-0" />
              </div>

              {/* Step 4: Instant Payouts */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-purple-100/80 border border-purple-200 flex items-center justify-center text-[#6b1187] shadow-xs group-hover:scale-105 transition-transform duration-300">
                    <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#6b1187] text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                    4
                  </span>
                </div>

                <h3 className="text-base font-black text-[#1a0826]">
                  Instant Payouts
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed mt-1.5 max-w-[210px]">
                  Daily direct bank transfer with complete tax invoices.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
