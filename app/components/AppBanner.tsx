import React from "react";

export default function AppBanner() {
  return (
    <section className="container py-8 mb-8">
      <div className="bg-gradient-to-r from-purple-100/70 via-fuchsia-100/60 to-purple-200/50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-200/60 shadow-xs">
        {/* Smartphone representation */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-24 rounded-2xl bg-[#1e142e] border-2 border-slate-700 flex flex-col items-center justify-center p-2 shadow-xl">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold">
              IF
            </div>
            <span className="text-[7px] text-slate-300 font-bold mt-1 text-center">
              InstaFashion
            </span>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[#2e1065]">
              Get the InstaFashion App
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Shop from your city&apos;s local stores, anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Feature Highlights with Vector SVGs */}
        <div className="flex items-center gap-6 text-xs text-[#4c1d95] font-semibold">
          <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-8 h-8 rounded-xl bg-purple-200/70 flex items-center justify-center text-[#52136d]">
              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span>Faster Ordering</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-8 h-8 rounded-xl bg-purple-200/70 flex items-center justify-center text-[#52136d]">
              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Real-Time Delivery</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-8 h-8 rounded-xl bg-purple-200/70 flex items-center justify-center text-[#52136d]">
              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <span>Exclusive Deals</span>
          </div>
        </div>

        {/* Download App Pill Button */}
        <div>
          <button className="bg-[#581c87] hover:bg-[#6b21a8] text-white text-xs font-bold px-6 py-3 rounded-full flex items-center gap-2.5 shadow-md shadow-purple-900/20 transition-transform active:scale-95 cursor-pointer">
            <span>Download App</span>
            <svg style={{ width: "14px", height: "14px" }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.65-.79 1.08-1.89.96-2.99-1 .04-2.14.65-2.81 1.44-.59.69-1.11 1.8-1.01 2.88 1.13.09 2.21-.54 2.86-1.33z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
