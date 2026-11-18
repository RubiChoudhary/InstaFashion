"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import TopTicker from "../components/TopTicker";
import Footer from "../components/Footer";

interface Address {
  id: string;
  tag: "Home" | "Work" | "Other";
  recipient: string;
  phone: string;
  line1: string;
  locality: string;
  city: string;
  pincode: string;
  isDefault: boolean;
}

export default function ProfilePage() {
  const [activeSidebarTab, setActiveSidebarTab] = useState("orders");
  const [orderFilter, setOrderFilter] = useState("all");
  const [activeOrderStatus, setActiveOrderStatus] = useState<"placed" | "out" | "delivered">("out");

  // Interactive Saved Addresses State
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "addr1",
      tag: "Home",
      recipient: "Priyanshu Kumar",
      phone: "+91 98765 43210",
      line1: "Flat 402, Royal Palms Residency, 7th Main",
      locality: "4th Block, Koramangala",
      city: "Bengaluru",
      pincode: "560034",
      isDefault: true,
    },
    {
      id: "addr2",
      tag: "Work",
      recipient: "Priyanshu Kumar",
      phone: "+91 98765 43210",
      line1: "WeWork Galaxy, 43 Residency Road",
      locality: "Shanthala Nagar, Ashok Nagar",
      city: "Bengaluru",
      pincode: "560025",
      isDefault: false,
    },
  ]);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newTag, setNewTag] = useState<"Home" | "Work" | "Other">("Home");
  const [newLine1, setNewLine1] = useState("");
  const [newLocality, setNewLocality] = useState("");
  const [newPincode, setNewPincode] = useState("");

  // Account Settings state
  const [profileName, setProfileName] = useState("Priyanshu Kumar");
  const [profileEmail, setProfileEmail] = useState("priyanshu@example.com");
  const [profilePhone, setProfilePhone] = useState("+91 98765 43210");
  const [savedSettingsSuccess, setSavedSettingsSuccess] = useState(false);

  // Re-order toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLine1 || !newLocality) return;
    const newAddr: Address = {
      id: "addr-" + Date.now(),
      tag: newTag,
      recipient: profileName,
      phone: profilePhone,
      line1: newLine1,
      locality: newLocality,
      city: "Bengaluru",
      pincode: newPincode || "560001",
      isDefault: false,
    };
    setAddresses([...addresses, newAddr]);
    setIsAddingAddress(false);
    setNewLine1("");
    setNewLocality("");
    setNewPincode("");
    showToast("Address saved successfully!");
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter((a) => a.id !== id));
    showToast("Address removed.");
  };

  const handleSetDefaultAddress = (id: string) => {
    setAddresses(
      addresses.map((a) => ({
        ...a,
        isDefault: a.id === id,
      }))
    );
    showToast("Default delivery address updated.");
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSettingsSuccess(true);
    setTimeout(() => setSavedSettingsSuccess(false), 3000);
    showToast("Profile details updated successfully!");
  };

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

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1a0826] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-purple-500/30 animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Main Profile Container */}
      <main className="flex-1 container py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SIDEBAR NAVIGATION CARD (STICKY) */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 bg-white rounded-3xl p-3 border border-purple-100 shadow-sm space-y-1 z-20">
            <button
              onClick={() => setActiveSidebarTab("orders")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[13.5px] font-bold transition-all cursor-pointer ${
                activeSidebarTab === "orders"
                  ? "bg-[#79248d] text-white shadow-md shadow-purple-900/20"
                  : "text-slate-700 hover:bg-purple-50 hover:text-[#79248d]"
              }`}
            >
              <svg style={{ width: "17px", height: "17px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>My Orders</span>
            </button>

            <button
              onClick={() => setActiveSidebarTab("addresses")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[13.5px] font-bold transition-all cursor-pointer ${
                activeSidebarTab === "addresses"
                  ? "bg-[#79248d] text-white shadow-md shadow-purple-900/20"
                  : "text-slate-700 hover:bg-purple-50 hover:text-[#79248d]"
              }`}
            >
              <svg style={{ width: "17px", height: "17px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Saved Addresses</span>
            </button>

            <button
              onClick={() => setActiveSidebarTab("account")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[13.5px] font-bold transition-all cursor-pointer ${
                activeSidebarTab === "account"
                  ? "bg-[#79248d] text-white shadow-md shadow-purple-900/20"
                  : "text-slate-700 hover:bg-purple-50 hover:text-[#79248d]"
              }`}
            >
              <svg style={{ width: "17px", height: "17px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Account Settings</span>
            </button>

            <Link
              href="/change-password"
              className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[13.5px] font-bold text-slate-700 hover:bg-purple-50 hover:text-[#79248d] transition-all cursor-pointer"
            >
              <svg style={{ width: "17px", height: "17px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Change Password</span>
            </Link>

            <Link
              href="/help"
              className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[13.5px] font-bold text-slate-700 hover:bg-purple-50 hover:text-[#79248d] transition-all cursor-pointer"
            >
              <svg style={{ width: "17px", height: "17px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Help & Support</span>
            </Link>

            <div className="pt-2 border-t border-purple-50">
              <Link
                href="/login"
                className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[13.5px] font-bold text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-all cursor-pointer"
              >
                <svg style={{ width: "17px", height: "17px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Log Out</span>
              </Link>
            </div>
          </div>

          {/* RIGHT MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-6">

            {/* 1. TOP USER HERO BANNER */}
            <div className="bg-gradient-to-r from-[#f7f0fe] via-[#f5eefc] to-[#ebdcfb] rounded-3xl p-6 sm:p-7 border border-purple-200/60 shadow-xs relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row z-10">
                <div className="w-16 h-16 rounded-full bg-[#40124c] text-white flex items-center justify-center text-xl font-black shadow-md shrink-0">
                  PK
                </div>
                <div>
                  <h1 className="text-2xl font-black text-[#1a0826] font-display">
                    {profileName}
                  </h1>
                  <p className="text-xs font-medium text-slate-600 mt-0.5">
                    {profileEmail} <span className="mx-1 text-slate-300">|</span> {profilePhone}
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2.5 mt-2.5 flex-wrap">
                    <span className="bg-[#eafbf0] text-[#16a34a] text-[11px] font-black px-3 py-1 rounded-full border border-emerald-200/70 flex items-center gap-1.5 shadow-2xs">
                      <svg style={{ width: "12px", height: "12px" }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      <span>InstaFashion Prime Member</span>
                    </span>
                    <span className="bg-white/80 text-[#6b1187] text-[11px] font-black px-3 py-1 rounded-full border border-purple-200/80 flex items-center gap-1.5 shadow-2xs">
                      <svg style={{ width: "12px", height: "12px" }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Koramangala, Bengaluru</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Shopping Bags Representation */}
              <div className="relative w-36 h-24 hidden md:flex items-end justify-end gap-2 shrink-0">
                <div className="w-16 h-20 rounded-2xl bg-gradient-to-b from-purple-500 to-[#79248d] shadow-md flex items-center justify-center text-white">
                  <svg style={{ width: "22px", height: "22px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div className="w-14 h-16 rounded-2xl bg-gradient-to-b from-pink-400 to-pink-600 shadow-md flex items-center justify-center text-white">
                  <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 2. FOUR SUMMARY METRIC CARDS ROW */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              <button
                onClick={() => {
                  setActiveSidebarTab("orders");
                  setOrderFilter("all");
                }}
                className="bg-white hover:bg-purple-50/50 transition-colors rounded-3xl p-4 sm:p-5 border border-purple-100/80 shadow-2xs flex items-center gap-3.5 text-left cursor-pointer"
              >
                <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                  <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900 leading-none">3</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-1">Total Orders</div>
                </div>
              </button>

              <button
                onClick={() => {
                  setActiveSidebarTab("orders");
                  setOrderFilter("active");
                }}
                className="bg-[#f0fbf5] hover:bg-[#e4f8ec] transition-colors rounded-3xl p-4 sm:p-5 border border-emerald-100 shadow-2xs flex items-center gap-3.5 text-left cursor-pointer"
              >
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-black text-emerald-900 leading-none">1</div>
                  <div className="text-[11px] font-semibold text-emerald-700 mt-1">Active Order</div>
                </div>
              </button>

              <button
                onClick={() => setActiveSidebarTab("addresses")}
                className="bg-[#fdf6f7] hover:bg-[#fcecef] transition-colors rounded-3xl p-4 sm:p-5 border border-rose-100 shadow-2xs flex items-center gap-3.5 text-left cursor-pointer"
              >
                <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                  <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-black text-rose-900 leading-none">{addresses.length}</div>
                  <div className="text-[11px] font-semibold text-rose-700 mt-1">Saved Addresses</div>
                </div>
              </button>

              <Link
                href="/express-delivery"
                className="bg-gradient-to-br from-purple-50 to-fuchsia-50 hover:from-purple-100 hover:to-fuchsia-100 transition-colors rounded-3xl p-4 sm:p-5 border border-purple-100 shadow-2xs flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-2xl bg-purple-100 text-[#79248d] flex items-center justify-center shrink-0">
                  <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-black text-[#52136d] leading-tight">Prime Member</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">Faster Delivery & Deals</div>
                </div>
              </Link>
            </div>

            {/* TAB 1: MY ORDERS VIEW */}
            {activeSidebarTab === "orders" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pt-2">
                  <h2 className="text-xl font-black text-[#1a0826] font-display">
                    My Orders
                  </h2>
                  <div className="relative">
                    <select
                      aria-label="Filter orders"
                      value={orderFilter}
                      onChange={(e) => setOrderFilter(e.target.value)}
                      className="bg-white border border-purple-100 hover:border-purple-300 rounded-full px-4 py-1.5 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer shadow-2xs"
                    >
                      <option value="all">All Orders</option>
                      <option value="active">Active Orders</option>
                      <option value="delivered">Delivered Orders</option>
                    </select>
                  </div>
                </div>

                {/* ORDER CARD 1: ACTIVE LIVE EXPRESS ORDER */}
                {(orderFilter === "all" || orderFilter === "active") && (
                  <div className="bg-white rounded-3xl p-5 sm:p-6 border border-purple-200/90 shadow-sm space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="relative w-16 h-18 sm:w-18 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs">
                            <Image
                              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80"
                              alt="Embroidered Kurti"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="relative w-16 h-18 sm:w-18 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs">
                            <Image
                              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=80"
                              alt="Kundan Jhumkas"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm sm:text-base font-black text-slate-900">
                            Order #IF-847291
                          </h3>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">
                            Placed Today, 2:15 PM
                          </p>
                          <p className="text-xs font-semibold text-slate-700 mt-1 line-clamp-1">
                            1x Embroidered Kurti (Size M) + 1x Kundan Jhumkas
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end justify-between gap-3">
                        <div className="flex items-center justify-between sm:justify-end gap-3 w-full">
                          <span className="bg-[#fcf2f9] text-[#be185d] border border-pink-200 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-ping" />
                            <span>LIVE EXPRESS DELIVERY</span>
                          </span>
                          <span className="text-lg font-black text-slate-900">
                            ₹1,798
                          </span>
                        </div>

                        <Link
                          href="/track-order"
                          className="inline-flex items-center justify-center gap-1.5 border border-purple-200 hover:border-purple-400 bg-white text-[#52136d] hover:bg-purple-50 text-xs font-bold px-4 py-2 rounded-full transition-all shadow-2xs cursor-pointer"
                        >
                          <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Live Tracking</span>
                        </Link>
                      </div>
                    </div>

                    {/* Interactive Progress Timeline (Clickable stages) */}
                    <div className="pt-2 pb-1 px-2 sm:px-6">
                      <div className="relative flex items-center justify-between">
                        <div className="absolute left-6 right-6 top-3 h-1 bg-slate-200 -z-0">
                          <div
                            className={`h-full bg-gradient-to-r from-[#79248d] to-[#9333ea] transition-all duration-500 ${
                              activeOrderStatus === "placed"
                                ? "w-0"
                                : activeOrderStatus === "out"
                                ? "w-1/2"
                                : "w-full"
                            }`}
                          />
                        </div>

                        {/* Step 1 */}
                        <button
                          onClick={() => setActiveOrderStatus("placed")}
                          className="flex flex-col items-center text-center relative z-10 cursor-pointer group"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#79248d] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                            <svg style={{ width: "12px", height: "12px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[11px] font-black text-slate-900 mt-1.5">Order Placed</span>
                          <span className="text-[10px] text-slate-400">2:15 PM</span>
                        </button>

                        {/* Step 2 */}
                        <button
                          onClick={() => setActiveOrderStatus("out")}
                          className="flex flex-col items-center text-center relative z-10 cursor-pointer group"
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md transition-all ${
                              activeOrderStatus === "out" || activeOrderStatus === "delivered"
                                ? "bg-[#79248d] text-white animate-pulse"
                                : "bg-slate-200 text-slate-400"
                            }`}
                          >
                            <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="text-[11px] font-black text-[#79248d] mt-1">Out for Delivery</span>
                          <span className="text-[10px] font-extrabold text-[#79248d]">
                            {activeOrderStatus === "delivered" ? "Arrived" : "Arriving in 18 mins"}
                          </span>
                        </button>

                        {/* Step 3 */}
                        <button
                          onClick={() => setActiveOrderStatus("delivered")}
                          className="flex flex-col items-center text-center relative z-10 cursor-pointer group"
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              activeOrderStatus === "delivered"
                                ? "bg-emerald-600 text-white"
                                : "bg-slate-200 text-slate-400"
                            }`}
                          >
                            {activeOrderStatus === "delivered" ? (
                              <svg style={{ width: "12px", height: "12px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg style={{ width: "12px", height: "12px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-[11px] font-bold mt-1.5 ${activeOrderStatus === "delivered" ? "text-emerald-700" : "text-slate-400"}`}>
                            Delivered
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {activeOrderStatus === "delivered" ? "2:45 PM" : "--:--"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ORDER CARD 2: DELIVERED WITH WORKING ORDER AGAIN */}
                {(orderFilter === "all" || orderFilter === "delivered") && (
                  <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                          <Image
                            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=80"
                            alt="White Sneakers"
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-sm sm:text-base font-black text-slate-900">
                            Order #IF-772183
                          </h3>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">
                            Delivered Yesterday at 6:40 PM
                          </p>
                          <p className="text-xs font-semibold text-slate-700 mt-1">
                            1x White Sneakers (UK 8) from Linking Road Footwear
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end justify-between gap-3">
                        <div className="flex items-center justify-between sm:justify-end gap-3 w-full">
                          <span className="bg-[#eafbf0] text-[#16a34a] border border-emerald-200 text-[11px] font-black px-3 py-1 rounded-full flex items-center gap-1">
                            <svg style={{ width: "12px", height: "12px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Delivered</span>
                          </span>
                          <span className="text-lg font-black text-slate-900">
                            ₹1,499
                          </span>
                        </div>

                        <button
                          onClick={() => showToast("Added 1x White Sneakers (UK 8) to your cart!")}
                          className="inline-flex items-center justify-center gap-1.5 border border-purple-200 hover:border-purple-400 bg-white text-[#52136d] hover:bg-purple-50 text-xs font-bold px-4 py-2 rounded-full transition-all shadow-2xs cursor-pointer active:scale-95"
                        >
                          <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <span>Order Again</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: SAVED ADDRESSES VIEW (FULL CRUD & DEFAULT TOGGLE) */}
            {activeSidebarTab === "addresses" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <h2 className="text-xl font-black text-[#1a0826] font-display">
                      Saved Addresses
                    </h2>
                    <p className="text-caption mt-0.5">Manage delivery locations for 30-minute doorstep courier</p>
                  </div>
                  <button
                    onClick={() => setIsAddingAddress(!isAddingAddress)}
                    className="bg-[#52136d] hover:bg-[#681989] text-white font-extrabold text-xs px-4 py-2 rounded-full flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow-xs"
                  >
                    <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span>{isAddingAddress ? "Cancel" : "Add New Address"}</span>
                  </button>
                </div>

                {/* Add Address Form Modal / Inline Box */}
                {isAddingAddress && (
                  <form onSubmit={handleAddAddress} className="bg-white rounded-3xl p-6 border border-purple-200 shadow-sm space-y-4">
                    <h3 className="card-title text-base">Add New Delivery Location</h3>
                    <div className="flex gap-2">
                      {(["Home", "Work", "Other"] as const).map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setNewTag(tag)}
                          className={`px-3 py-1 text-xs font-bold rounded-lg border cursor-pointer ${
                            newTag === tag
                              ? "bg-purple-100 text-[#52136d] border-purple-300 font-extrabold"
                              : "bg-slate-50 text-slate-600 border-slate-200"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">House / Flat / Building No.</label>
                      <input
                        type="text"
                        required
                        value={newLine1}
                        onChange={(e) => setNewLine1(e.target.value)}
                        placeholder="e.g. Flat 301, Silver Oak Apartments"
                        className="w-full bg-[#f8f5fc] text-[13px] px-3.5 py-2 rounded-xl border border-purple-200 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Street / Locality</label>
                        <input
                          type="text"
                          required
                          value={newLocality}
                          onChange={(e) => setNewLocality(e.target.value)}
                          placeholder="e.g. 5th Block, Koramangala"
                          className="w-full bg-[#f8f5fc] text-[13px] px-3.5 py-2 rounded-xl border border-purple-200 focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Pincode</label>
                        <input
                          type="text"
                          required
                          value={newPincode}
                          onChange={(e) => setNewPincode(e.target.value)}
                          placeholder="e.g. 560034"
                          className="w-full bg-[#f8f5fc] text-[13px] px-3.5 py-2 rounded-xl border border-purple-200 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#52136d] text-white font-extrabold px-5 py-2 rounded-xl text-xs cursor-pointer shadow-xs"
                    >
                      Save Address
                    </button>
                  </form>
                )}

                {/* Address Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className={`bg-white rounded-3xl p-5 border transition-all flex flex-col justify-between ${
                        addr.isDefault
                          ? "border-[#79248d] shadow-sm ring-1 ring-[#79248d]"
                          : "border-purple-100 shadow-2xs"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-100 text-[#52136d]">
                            {addr.tag}
                          </span>
                          {addr.isDefault && (
                            <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              Default Address
                            </span>
                          )}
                        </div>

                        <h4 className="font-extrabold text-sm text-slate-900">{addr.recipient}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {addr.line1}, {addr.locality}, {addr.city} - {addr.pincode}
                        </p>
                        <p className="text-xs font-semibold text-slate-500 mt-1">Phone: {addr.phone}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                        {!addr.isDefault ? (
                          <button
                            onClick={() => handleSetDefaultAddress(addr.id)}
                            className="text-[#79248d] hover:underline cursor-pointer"
                          >
                            Set as Default
                          </button>
                        ) : (
                          <span className="text-emerald-600 text-[11px]">Primary delivery</span>
                        )}
                        <button
                          onClick={() => handleDeleteAddress(addr.id)}
                          className="text-rose-500 hover:text-rose-700 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: ACCOUNT SETTINGS VIEW */}
            {activeSidebarTab === "account" && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm space-y-6">
                <div>
                  <h2 className="text-xl font-black text-[#1a0826] font-display">
                    Account Settings
                  </h2>
                  <p className="text-caption mt-0.5">Manage your personal information and contact preferences</p>
                </div>

                {savedSettingsSuccess && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2.5 rounded-xl text-xs font-bold">
                    Profile updated successfully!
                  </div>
                )}

                <form onSubmit={handleSaveProfile} className="space-y-4 max-w-lg">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      className="w-full bg-[#f8f5fc] text-[13.5px] font-semibold px-4 py-2.5 rounded-xl border border-purple-200 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={profileEmail}
                      onChange={(e) => setProfileEmail(e.target.value)}
                      className="w-full bg-[#f8f5fc] text-[13.5px] font-semibold px-4 py-2.5 rounded-xl border border-purple-200 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Mobile Phone (WhatsApp Active)</label>
                    <input
                      type="tel"
                      required
                      value={profilePhone}
                      onChange={(e) => setProfilePhone(e.target.value)}
                      className="w-full bg-[#f8f5fc] text-[13.5px] font-semibold px-4 py-2.5 rounded-xl border border-purple-200 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#52136d] hover:bg-[#681989] text-white font-extrabold px-6 py-2.5 rounded-xl text-xs transition-transform active:scale-95 cursor-pointer shadow-xs"
                    >
                      Save Profile Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
