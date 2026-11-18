"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
  const [isPhoneMode, setIsPhoneMode] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-purple-100 shadow-xl shadow-purple-900/5 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#52136d] to-[#9333ea] flex items-center justify-center text-white mx-auto shadow-md">
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-[#1a0826] font-display">
              Welcome to InstaFashion
            </h1>
            <p className="text-xs text-slate-500">
              Sign in to order fashion & essentials in 30-40 minutes
            </p>
          </div>

          {/* Toggle Email / Phone OTP */}
          <div className="grid grid-cols-2 p-1 bg-purple-50 rounded-2xl text-xs font-bold text-slate-600">
            <button
              onClick={() => setIsPhoneMode(false)}
              className={`py-2 rounded-xl transition-all cursor-pointer ${
                !isPhoneMode ? "bg-white text-[#52136d] shadow-xs" : "hover:text-[#52136d]"
              }`}
            >
              Email & Password
            </button>
            <button
              onClick={() => setIsPhoneMode(true)}
              className={`py-2 rounded-xl transition-all cursor-pointer ${
                isPhoneMode ? "bg-white text-[#52136d] shadow-xs" : "hover:text-[#52136d]"
              }`}
            >
              Phone (Quick OTP)
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto">
                ✓
              </div>
              <h3 className="font-bold text-base text-slate-900">Signed In Successfully</h3>
              <p className="text-xs text-slate-500">Redirecting to your local city stores...</p>
              <Link
                href="/"
                className="inline-block mt-3 bg-[#52136d] text-white text-xs font-bold px-6 py-2.5 rounded-full"
              >
                Go to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  {isPhoneMode ? "Mobile Number" : "Email Address"}
                </label>
                <input
                  type={isPhoneMode ? "tel" : "email"}
                  required
                  placeholder={isPhoneMode ? "e.g. 98765 43210" : "you@example.com"}
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full bg-purple-50/50 border border-purple-100 focus:border-purple-400 focus:bg-white rounded-xl px-4 py-3 text-xs font-medium focus:outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {!isPhoneMode && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700">Password</label>
                    <Link
                      href="/forgot-password"
                      className="text-[11px] font-bold text-[#7e22ce] hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-purple-50/50 border border-purple-100 focus:border-purple-400 focus:bg-white rounded-xl px-4 py-3 text-xs font-medium focus:outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#52136d] to-[#7e22ce] hover:from-[#430c5a] hover:to-[#6b21a8] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-purple-900/20 transition-all cursor-pointer"
              >
                {isPhoneMode ? "⚡ Send OTP" : "Sign In to InstaFashion"}
              </button>

              <div className="text-center text-xs text-slate-500 pt-2">
                Don&apos;t have an account?{" "}
                <Link href="/login" className="font-bold text-[#7e22ce] hover:underline">
                  Create Account
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
