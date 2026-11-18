"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match!");
      return;
    }
    setError("");
    setSuccess(true);
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
              🔒
            </div>
            <h1 className="text-2xl font-black tracking-tight text-[#1a0826] font-display">
              Change Password
            </h1>
            <p className="text-xs text-slate-500">
              Create a new secure password for your InstaFashion account.
            </p>
          </div>

          {success ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto">
                ✓
              </div>
              <h3 className="font-bold text-base text-slate-900">Password Updated!</h3>
              <p className="text-xs text-slate-500">
                Your password has been changed successfully. You can now use it to sign in.
              </p>
              <Link
                href="/profile"
                className="inline-block mt-3 bg-[#52136d] text-white text-xs font-bold px-6 py-2.5 rounded-full"
              >
                Go to Profile
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-rose-50 text-rose-600 border border-rose-200 text-xs p-3 rounded-xl font-semibold">
                  {error}
                </div>
              )}

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Current Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter current password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full bg-purple-50/50 border border-purple-100 focus:border-purple-400 focus:bg-white rounded-xl px-4 py-3 text-xs font-medium focus:outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="At least 8 characters"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-purple-50/50 border border-purple-100 focus:border-purple-400 focus:bg-white rounded-xl px-4 py-3 text-xs font-medium focus:outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-purple-50/50 border border-purple-100 focus:border-purple-400 focus:bg-white rounded-xl px-4 py-3 text-xs font-medium focus:outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#52136d] to-[#7e22ce] hover:from-[#430c5a] hover:to-[#6b21a8] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Update Password
              </button>

              <div className="text-center text-xs text-slate-500 pt-2">
                <Link href="/profile" className="font-bold text-[#7e22ce] hover:underline">
                  Cancel & Return to Profile
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
