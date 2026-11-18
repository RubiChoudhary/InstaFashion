import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a0b2e] text-slate-300 pt-16 pb-12 border-t border-purple-900/40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-900/50">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7c3aed] to-[#d946ef] flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                <svg
                  style={{ width: "22px", height: "22px" }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white font-display">
                  InstaFashion
                </span>
                <span className="text-[10px] block font-semibold text-fuchsia-400 -mt-0.5 tracking-wider uppercase">
                  Hyperlocal City Fashion & Lifestyle
                </span>
              </div>
            </div>

            <p className="text-[13.5px] text-slate-300 leading-relaxed max-w-sm">
              Your city&apos;s local boutiques, shoe hubs, artificial jewelers, stationeries, and utensil stores delivered directly to your doorstep with <strong className="text-white">1-Day Guaranteed Delivery</strong>.
            </p>

            <div className="flex items-center gap-3 text-[13px] text-slate-300 pt-2">
              <Link
                href="/express-delivery"
                className="inline-flex items-center gap-1.5 bg-purple-950/80 text-fuchsia-300 hover:text-white px-3.5 py-1.5 rounded-full border border-purple-800/50 transition-colors font-medium"
              >
                <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>1-Day Delivery Guarantee</span>
              </Link>
              <span className="inline-flex items-center gap-1.5 bg-purple-950/80 text-emerald-300 px-3.5 py-1.5 rounded-full border border-purple-800/50 font-medium">
                <svg style={{ width: "13px", height: "13px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Genuine Stores</span>
              </span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-4">
            <h4 className="text-[13px] font-black uppercase tracking-wider text-fuchsia-400">
              Categories
            </h4>
            <ul className="space-y-2.5 text-[13.5px] font-medium text-slate-200">
              <li>
                <Link href="/#women" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Women&apos;s Kurtis & Dresses
                </Link>
              </li>
              <li>
                <Link href="/#men" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Men&apos;s Shirts & Ethnic
                </Link>
              </li>
              <li>
                <Link href="/#footwear" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Footwear & Sneakers
                </Link>
              </li>
              <li>
                <Link href="/#jewellery" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Artificial & Kundan Jewellery
                </Link>
              </li>
              <li>
                <Link href="/#stationery" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Stationery & Study Supplies
                </Link>
              </li>
              <li>
                <Link href="/#utensils" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Kitchen Cookware & Utensils
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Account */}
          <div className="space-y-4">
            <h4 className="text-[13px] font-black uppercase tracking-wider text-fuchsia-400">
              My Account
            </h4>
            <ul className="space-y-2.5 text-[13.5px] font-medium text-slate-200">
              <li>
                <Link href="/profile" className="hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-2">
                  <svg style={{ width: "15px", height: "15px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>My Profile & Orders</span>
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-2">
                  <svg style={{ width: "15px", height: "15px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Sign In / Register</span>
                </Link>
              </li>
              <li>
                <Link href="/change-password" className="hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-2">
                  <svg style={{ width: "15px", height: "15px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Change Password</span>
                </Link>
              </li>
              <li>
                <Link href="/express-delivery" className="hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-2">
                  <svg style={{ width: "15px", height: "15px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Express 30-Min Delivery</span>
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white hover:translate-x-0.5 transition-all flex items-center gap-2">
                  <svg style={{ width: "15px", height: "15px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span>Shipping & Charges</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Partner & Help */}
          <div className="space-y-4">
            <h4 className="text-[13px] font-black uppercase tracking-wider text-fuchsia-400">
              For Retailers & Help
            </h4>
            <p className="text-[13px] text-slate-300 leading-relaxed font-normal">
              Are you a local fashion, shoe, utensil, or stationery store owner?
            </p>
            <Link
              href="/partner"
              className="inline-block bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-extrabold px-5 py-2.5 rounded-xl text-[13px] shadow-md shadow-purple-900/50 transition-all active:scale-95 cursor-pointer"
            >
              Partner With Us
            </Link>
            <div className="pt-2 text-[12.5px] text-slate-300 space-y-1 font-medium">
              <div>Help: <Link href="/help" className="text-white font-bold hover:underline">support@instafashion.in</Link></div>
              <div>Available 8:00 AM – 11:00 PM</div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[13px] text-slate-400 gap-4 font-medium">
          <p>© 2026 InstaFashion Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link>
            <Link href="/express-delivery" className="hover:text-white transition-colors">30-Min Express</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
