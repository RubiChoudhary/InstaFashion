import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ExpressDeliveryPage() {
  return (
    <div className="min-h-screen bg-[#faf8fc] text-[#1a0826] font-sans antialiased flex flex-col">
      <Navbar
        selectedLocation="Koramangala, Bengaluru"
        setSelectedLocation={() => {}}
        searchQuery=""
        setSearchQuery={() => {}}
        cartCount={0}
        onOpenCart={() => {}}
        onSelectCategory={() => {}}
      />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-10">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-[#52136d] px-4 py-1.5 rounded-full text-xs font-bold border border-purple-200">
            <span>⚡ Guaranteed 30-45 Minute Express Delivery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#1a0826] font-display tracking-tight leading-tight">
            Urgent Fashion & Essentials, <br />
            <span className="bg-gradient-to-r from-[#d946ef] via-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent italic">
              Delivered in Under 45 Mins
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Need matching jhumkas for tonight&apos;s function? An interview shirt? Emergency exam stationery or cookware? Get it right from your local market.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-block bg-[#52136d] hover:bg-[#681989] text-white font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm shadow-lg shadow-purple-900/20 transition-all cursor-pointer"
            >
              Order Express Now →
            </Link>
          </div>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-xs space-y-2">
            <span className="text-3xl">⏱</span>
            <h3 className="font-bold text-sm text-slate-900">30–45 Mins Average</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Dispatched directly from local boutiques within 2 to 5 kms of your location.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-xs space-y-2">
            <span className="text-3xl">🔄</span>
            <h3 className="font-bold text-sm text-slate-900">Try & Exchange</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              If a size doesn&apos;t fit, request an instant exchange from the same store.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-xs space-y-2">
            <span className="text-3xl">🏬</span>
            <h3 className="font-bold text-sm text-slate-900">Local City Brands</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Empowering local high-street cloth merchants, shoe stalls, and utensil shops.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-purple-100 shadow-xs space-y-2">
            <span className="text-3xl">📍</span>
            <h3 className="font-bold text-sm text-slate-900">Live GPS Tracking</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Watch your rider pick up the item and navigate to your gate on a live map.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-xs overflow-x-auto">
          <h3 className="text-base font-bold text-slate-900 mb-4">
            How InstaFashion Compares to Traditional E-Commerce
          </h3>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-purple-100 text-slate-400">
                <th className="py-3 px-4 font-bold">Feature</th>
                <th className="py-3 px-4 font-bold text-[#52136d] bg-purple-50/70 rounded-t-xl">InstaFashion</th>
                <th className="py-3 px-4 font-bold">Other E-commerce (Amazon, Myntra)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-3 px-4 font-semibold">Delivery Time</td>
                <td className="py-3 px-4 font-black text-emerald-600 bg-purple-50/30">⚡ 30 - 45 Minutes</td>
                <td className="py-3 px-4 text-slate-500">3 - 5 Business Days</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Store Origin</td>
                <td className="py-3 px-4 font-bold bg-purple-50/30">Your Local City Shops & Boutiques</td>
                <td className="py-3 px-4 text-slate-500">Out-of-state Warehouse Hubs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Emergency Needs</td>
                <td className="py-3 px-4 font-bold text-[#52136d] bg-purple-50/30">Immediate Same-Day Fulfillment</td>
                <td className="py-3 px-4 text-slate-500">Not Feasible</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">Local Economy</td>
                <td className="py-3 px-4 font-bold bg-purple-50/30">100% supports local city retailers</td>
                <td className="py-3 px-4 text-slate-500">Centralized corporate sellers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}
