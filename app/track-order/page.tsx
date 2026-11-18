"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import TopTicker from "../components/TopTicker";
import Footer from "../components/Footer";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("IF-847291");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [hasSearched, setHasSearched] = useState(true);

  // Mock live timeline steps
  const steps = [
    { label: "Order Placed", time: "2:15 PM", completed: true, active: false, desc: "Received by Vogue City Boutique" },
    { label: "Item Packed", time: "2:22 PM", completed: true, active: false, desc: "Quality verified & sealed in eco-pack" },
    { label: "Rider Picked Up", time: "2:28 PM", completed: true, active: false, desc: "Rider Suresh K. assigned (KA-01-EQ-4921)" },
    { label: "Out for Delivery", time: "2:34 PM", completed: true, active: true, desc: "On the way • 1.2 km away from your address" },
    { label: "Delivered", time: "Est. 2:45 PM", completed: false, active: false, desc: "Doorstep OTP verification pending" },
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8fc] text-[#1a0826] font-sans flex flex-col">
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
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#7e22ce] bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200">
              Live Hyperlocal Dispatch
            </span>
            <h1 className="heading-1 mt-3">Track Your Express Order</h1>
            <p className="text-body mt-2">
              Real-time rider GPS tracking from city boutique to your doorstep in 30-45 mins.
            </p>
          </div>

          {/* Search Form Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm mb-8">
            <form onSubmit={handleTrack} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
              <div className="sm:col-span-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Order ID
                </label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="e.g. IF-847291"
                  className="w-full bg-[#f8f5fc] text-[13.5px] font-semibold px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="sm:col-span-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#f8f5fc] text-[13.5px] font-semibold px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#52136d] hover:bg-[#681989] text-white font-extrabold py-2.5 rounded-xl text-[13.5px] shadow-sm transition-transform active:scale-95 cursor-pointer"
                >
                  Track Now
                </button>
              </div>
            </form>
          </div>

          {/* Live Order Status Display */}
          {hasSearched && (
            <div className="space-y-6">
              {/* Order Overview Banner */}
              <div className="bg-gradient-to-r from-[#4a0d67] to-[#7e22ce] text-white rounded-3xl p-6 sm:p-8 shadow-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full">
                      On Time • 30-Min Courier
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white mt-2">
                      Order #{orderId}
                    </h2>
                    <p className="text-purple-200 text-xs mt-1">
                      From: <strong className="text-white">Vogue City Boutique</strong> (M.G. Road)
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-center sm:text-right">
                    <span className="text-xs text-purple-200 block">Estimated Arrival</span>
                    <span className="text-2xl font-black text-amber-300">In 11 Mins</span>
                  </div>
                </div>

                {/* Rider Card */}
                <div className="mt-6 pt-5 border-t border-white/20 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-white text-[#52136d] font-black flex items-center justify-center text-sm">
                      SK
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-sm text-white">Suresh K.</h4>
                        <span className="bg-emerald-500 text-white text-[10px] font-black px-1.5 py-0.2 rounded-full">
                          4.9 ★ Rider
                        </span>
                      </div>
                      <p className="text-xs text-purple-200">Delivery Partner (KA-01-EQ-4921)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href="tel:+919876543210"
                      className="bg-white text-[#52136d] hover:bg-purple-50 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-xs"
                    >
                      <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Rider</span>
                    </a>
                    <Link
                      href="/help"
                      className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-xl text-xs border border-white/20 transition-all"
                    >
                      Need Help?
                    </Link>
                  </div>
                </div>
              </div>

              {/* Step Timeline */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm">
                <h3 className="card-title mb-6">Delivery Progress</h3>

                <div className="space-y-8 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-purple-100">
                  {steps.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-4 pl-1">
                      {/* Circle Dot */}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                          step.completed
                            ? "bg-[#7e22ce] text-white ring-4 ring-purple-100"
                            : "bg-slate-200 text-slate-400"
                        }`}
                      >
                        {step.completed ? (
                          <svg style={{ width: "12px", height: "12px" }} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-slate-400" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 -mt-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-[15px] font-extrabold ${step.completed ? "text-[#1a0826]" : "text-slate-400"}`}>
                            {step.label}
                          </h4>
                          <span className="text-xs font-bold text-slate-500">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-caption mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Items in this Order */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm">
                <h3 className="card-title mb-4">Items in Package</h3>
                <div className="divide-y divide-slate-100">
                  <div className="py-3 flex items-center justify-between">
                    <div>
                      <h5 className="font-extrabold text-[14px]">Embroidered Kurti (Size M)</h5>
                      <span className="text-caption">From Vogue City Boutique • Qty: 1</span>
                    </div>
                    <span className="font-black text-[15px]">₹799</span>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <div>
                      <h5 className="font-extrabold text-[14px]">Kundan Jhumkas</h5>
                      <span className="text-caption">From Sarafa Bazaar Jewellers • Qty: 1</span>
                    </div>
                    <span className="font-black text-[15px]">₹999</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-purple-100 flex items-center justify-between font-black text-base">
                  <span>Total Paid (COD/UPI)</span>
                  <span className="text-[#52136d]">₹1,798</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
