import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
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
              Legal & Transparency
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#1a0826] font-display mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 mt-1">Last Updated: November 18, 2026</p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you use InstaFashion, we collect details to fulfill your hyperlocal orders efficiently:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Location Data:</strong> Real-time city coordinates or neighborhood addresses to calculate 30–45 minute delivery routes and assign the nearest rider.</li>
              <li><strong>Contact Information:</strong> Phone number and email for OTP authentication and delivery partner communication.</li>
              <li><strong>Order & Transaction Records:</strong> Order items, selected sizes, payment confirmation status, and store origin.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. How We Share Data with Local Stores & Riders</h2>
            <p>
              InstaFashion operates a strict privacy boundary:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Local merchants only receive item specifications (size, model, color) and order ID to pack the correct goods.</li>
              <li>Delivery partners only receive your doorstep delivery address and phone number until delivery completion.</li>
              <li>We never sell or rent your personal information to third-party ad networks.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Payment Security</h2>
            <p>
              All online payments via UPI, Credit/Debit cards, or Net Banking are processed through RBI-authorized payment gateways with 256-bit encryption. InstaFashion does not store raw credit/debit card numbers on its servers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Contact Data Privacy Officer</h2>
            <p>
              For data requests or questions regarding our privacy practices, contact our Data Protection Team at <strong>privacy@instafashion.in</strong>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
