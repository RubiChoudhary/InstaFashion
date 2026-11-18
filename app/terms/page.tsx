import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndConditionsPage() {
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
              Platform Agreement
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#1a0826] font-display mt-1">
              Terms & Conditions
            </h1>
            <p className="text-xs text-slate-400 mt-1">Effective Date: November 18, 2026</p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Nature of the Marketplace</h2>
            <p>
              InstaFashion is a hyperlocal marketplace platform connecting consumers with independently owned local city retail shops (boutiques, footwear stores, jewelers, stationeries, and utensil shops). InstaFashion provides technology, listing, and last-mile logistics dispatch.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Order Acceptance & Inventory Real-Time Check</h2>
            <p>
              Items displayed on InstaFashion reflect active inventory reported by local merchants. In rare cases where a local merchant experiences immediate in-store footfall depletion of a selected size or variant, our system will notify you within 5 minutes and issue an instant refund if prepaid.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. 30–45 Minute Express Delivery Commitment</h2>
            <p>
              Our delivery partners strive to deliver every order within the stated window (30-45 mins). Extreme weather conditions, flash floods, or civic traffic disruptions may cause unavoidable delays, during which live tracking will provide real-time updates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Returns & Exchanges</h2>
            <p>
              Customers can initiate an instant doorstep return within 24 hours for clothing, footwear, utensils, and stationery if sizing is incorrect or items are damaged, subject to merchant tags remaining intact.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
