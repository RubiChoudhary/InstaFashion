import React from "react";

export default function FeaturesBar() {
  return (
    <section className="container py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex items-center gap-3 shadow-2xs">
          <span className="text-2xl">🛵</span>
          <div>
            <h4 className="text-xs font-bold text-slate-900">30-45 Min</h4>
            <p className="text-[11px] text-slate-500">Express Delivery</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex items-center gap-3 shadow-2xs">
          <span className="text-2xl">🏬</span>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Real Local</h4>
            <p className="text-[11px] text-slate-500">City Stores</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex items-center gap-3 shadow-2xs">
          <span className="text-2xl">🛍️</span>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Wide</h4>
            <p className="text-[11px] text-slate-500">Variety & Sizes</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex items-center gap-3 shadow-2xs">
          <span className="text-2xl">🛡️</span>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Safe &</h4>
            <p className="text-[11px] text-slate-500">Secure Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
