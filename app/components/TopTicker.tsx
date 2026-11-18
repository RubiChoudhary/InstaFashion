"use client";

import React from "react";
import Link from "next/link";

export default function TopTicker() {
  return (
    <div className="bg-[#4a0d67] text-white text-[12.5px] font-medium py-1.5 px-4 border-b border-purple-900/30">
      <div className="container flex items-center justify-between gap-4">
        {/* Left: Express Delivery Tag */}
        <div className="flex items-center gap-2 font-bold tracking-tight">
          <svg style={{ width: "15px", height: "15px" }} className="text-amber-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <span className="text-[13px]">1-Day Express Delivery in Your City</span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-5 sm:gap-6 text-[12px] font-semibold text-purple-100">
          <Link
            href="/track-order"
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span>Track Order</span>
          </Link>
          <span className="text-purple-300/50">|</span>
          <Link
            href="/help"
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Help & Support</span>
          </Link>
          <Link
            href="/partner"
            className="bg-white hover:bg-purple-50 text-[#4a0d67] font-extrabold px-3.5 py-1 rounded-full text-[12px] flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
          >
            <span>Become a Store Partner</span>
            <svg style={{ width: "11px", height: "11px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
