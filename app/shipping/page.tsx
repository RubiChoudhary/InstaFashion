import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ShippingPolicyPage() {
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

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-xl shadow-purple-900/5 space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="border-b border-purple-100 pb-4">
            <span className="text-xs font-bold text-[#7e22ce] uppercase tracking-wider">
              Logistics & Fulfillment
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#1a0826] font-display mt-1">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xs text-slate-400 mt-1">Hyperlocal Express Model Explained</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 text-center space-y-1">
              <span className="text-2xl">⚡</span>
              <h3 className="font-bold text-slate-900 text-xs">Express Window</h3>
              <p className="text-[11px] text-slate-500">30 - 45 Minutes</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 text-center space-y-1">
              <span className="text-2xl">🛵</span>
              <h3 className="font-bold text-slate-900 text-xs">Delivery Fleet</h3>
              <p className="text-[11px] text-slate-500">Dedicated InstaRiders</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 text-center space-y-1">
              <span className="text-2xl">🏷️</span>
              <h3 className="font-bold text-slate-900 text-xs">Free Delivery</h3>
              <p className="text-[11px] text-slate-500">On all orders ₹499+</p>
            </div>
          </div>

          <section className="space-y-2 pt-4">
            <h2 className="text-base font-bold text-slate-900">How Hyperlocal Shipping Operates</h2>
            <p>
              Unlike conventional e-commerce companies that warehouse inventory in distant hubs outside city limits (taking 3 to 5 business days), InstaFashion partners with trusted retail store owners located directly inside your city limits.
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Instant Store Notification:</strong> When you place an order, the local boutique/shop receives the order on their merchant tablet within 10 seconds.</li>
              <li><strong>5-Minute Packing:</strong> The merchant packs the item with tamper-evident seals.</li>
              <li><strong>Rider Pickup:</strong> The nearest InstaRider reaches the store within 8-12 minutes to collect the package.</li>
              <li><strong>Express Doorstep Drop:</strong> The rider navigates directly to your coordinates with real-time GPS tracking enabled on your screen.</li>
            </ol>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">Shipping Fees</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Orders above <strong>₹499</strong>: <strong>FREE Delivery</strong>.</li>
              <li>Orders below <strong>₹499</strong>: Nominal fee of <strong>₹29</strong> for express delivery.</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
