"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-purple-100 shadow-xl shadow-purple-900/5 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#52136d] flex items-center justify-center text-xl mx-auto shadow-xs">
              🔑
            </div>
            <h1 className="text-2xl font-black tracking-tight text-[#1a0826] font-display">
              Forgot Password?
            </h1>
            <p className="text-xs text-slate-500">
              Enter your registered email address to receive password reset instructions.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto">
                ✉️
              </div>
              <h3 className="font-bold text-base text-slate-900">Check Your Email</h3>
              <p className="text-xs text-slate-500">
                We have sent a reset link to <strong>{email}</strong>.
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <Link
                  href="/change-password"
                  className="bg-[#52136d] text-white text-xs font-bold px-6 py-2.5 rounded-full"
                >
                  Proceed to Reset Code
                </Link>
                <Link
                  href="/login"
                  className="text-xs font-bold text-[#7e22ce] hover:underline"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-purple-50/50 border border-purple-100 focus:border-purple-400 focus:bg-white rounded-xl px-4 py-3 text-xs font-medium focus:outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#52136d] to-[#7e22ce] hover:from-[#430c5a] hover:to-[#6b21a8] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Send Reset Link
              </button>

              <div className="text-center text-xs text-slate-500 pt-2">
                Remember your password?{" "}
                <Link href="/login" className="font-bold text-[#7e22ce] hover:underline">
                  Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
