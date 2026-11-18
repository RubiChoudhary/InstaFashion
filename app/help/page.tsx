"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import TopTicker from "../components/TopTicker";
import Footer from "../components/Footer";

export default function HelpSupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const faqs = [
    {
      q: "How does 30-45 minute express delivery work?",
      a: "InstaFashion partners directly with top neighborhood stores in your city. When you place an order, the merchant packs the item immediately, and an InstaFashion rider picks it up to deliver directly to your doorstep within 30-45 minutes.",
    },
    {
      q: "Can I try clothes or shoes before accepting delivery?",
      a: "Yes! With our 'Try & Buy' promise, our delivery partner waits for 5 minutes outside your door while you verify the size and fit. If it doesn't fit, you can hand it right back with zero return fees.",
    },
    {
      q: "What payment methods are supported?",
      a: "We accept UPI (Google Pay, PhonePe, Paytm), Credit & Debit cards, Netbanking, and Cash on Delivery (COD) for all city deliveries.",
    },
    {
      q: "How do I exchange or return an item?",
      a: "Navigate to your Profile -> Orders -> Click 'Instant Exchange'. A rider will arrive at your address with the replacement size in 45 minutes.",
    },
    {
      q: "What if my item arrives damaged or incorrect?",
      a: "We guarantee 100% store-verified genuine products. Contact our live rider or reach our priority chat support below for an immediate refund or replacement within 15 minutes.",
    },
  ];

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
          <div className="text-center mb-10">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#7e22ce] bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200">
              Customer Support & Concierge
            </span>
            <h1 className="heading-1 mt-3">How Can We Help You Today?</h1>
            <p className="text-body mt-2">
              Instant assistance for your quick-commerce orders, exchanges, and city merchant queries.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#52136d] flex items-center justify-center mb-3">
                <svg style={{ width: "22px", height: "22px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="card-title text-base">Phone Hotline</h3>
              <p className="text-caption mt-1">Available 8 AM - 11 PM</p>
              <a href="tel:+918001234567" className="mt-3 text-sm font-extrabold text-[#7e22ce] hover:underline">
                +91 800 123 4567
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <svg style={{ width: "22px", height: "22px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="card-title text-base">Live WhatsApp</h3>
              <p className="text-caption mt-1">Typical reply in 2 mins</p>
              <a href="https://wa.me/919876543210" target="_blank" className="mt-3 text-sm font-extrabold text-emerald-600 hover:underline">
                Chat on WhatsApp →
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#be185d] flex items-center justify-center mb-3">
                <svg style={{ width: "22px", height: "22px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="card-title text-base">Email Concierge</h3>
              <p className="text-caption mt-1">Official tickets & receipts</p>
              <a href="mailto:support@instafashion.in" className="mt-3 text-sm font-extrabold text-[#be185d] hover:underline">
                support@instafashion.in
              </a>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm mb-10">
            <h2 className="section-title mb-6">Frequently Asked Questions</h2>
            <div className="divide-y divide-purple-100/80">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="py-4">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between text-left font-extrabold text-[15px] sm:text-base text-slate-900 cursor-pointer group"
                    >
                      <span className="group-hover:text-[#7e22ce] transition-colors pr-4">
                        {faq.q}
                      </span>
                      <svg
                        style={{ width: "16px", height: "16px" }}
                        className={`text-slate-400 group-hover:text-[#7e22ce] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#7e22ce]" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <p className="text-body mt-2.5 text-slate-600 leading-relaxed pl-1">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit a Help Ticket Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm">
            <h2 className="section-title mb-2">Send Us a Direct Message</h2>
            <p className="text-caption mb-6">Have an issue with an ongoing delivery or refund? Drop us a note.</p>

            {ticketSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-800">
                <svg style={{ width: "32px", height: "32px" }} className="mx-auto text-emerald-600 mb-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <h4 className="font-extrabold text-base">Ticket Received!</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Our city support agent will contact you on WhatsApp/Phone within 15 minutes.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setTicketSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Priyanshu Kumar"
                      className="w-full bg-[#f8f5fc] text-[13.5px] px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#f8f5fc] text-[13.5px] px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Order ID (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. IF-847291"
                    className="w-full bg-[#f8f5fc] text-[13.5px] px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    How can we assist you?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your issue with order size, delivery speed, or refund request..."
                    className="w-full bg-[#f8f5fc] text-[13.5px] px-4 py-2.5 rounded-xl border border-purple-200 focus:border-purple-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#52136d] hover:bg-[#681989] text-white font-extrabold px-6 py-3 rounded-xl text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  Submit Support Ticket
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
