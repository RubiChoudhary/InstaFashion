import React from "react";
import Image from "next/image";
import { Product } from "../data";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLocation: string;
  cartItemsList: { product: Product; qty: number }[];
  subtotal: number;
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  selectedLocation,
  cartItemsList,
  subtotal,
  onAddToCart,
  onRemoveFromCart,
  onCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#52136d] flex items-center justify-center">
              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                Your InstaFashion Bag
              </h3>
              <p className="text-[11px] text-slate-500">{selectedLocation}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700 font-bold cursor-pointer"
          >
            <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartItemsList.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-400 flex items-center justify-center">
                <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-sm font-bold text-slate-700">
                Your bag is empty
              </p>
              <p className="text-xs text-slate-400">
                Add local kurtis, shoes, jewellery or utensils!
              </p>
            </div>
          ) : (
            cartItemsList.map(({ product, qty }) => (
              <div
                key={product.id}
                className="flex gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3"
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                      {product.name}
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      {product.shopName}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-black text-slate-900">
                      ₹{product.price * qty}
                    </span>
                    <div className="flex items-center border border-slate-300 bg-white rounded-md overflow-hidden text-xs">
                      <button
                        onClick={() => onRemoveFromCart(product.id)}
                        className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 font-bold"
                      >
                        -
                      </button>
                      <span className="px-2 font-bold">{qty}</span>
                      <button
                        onClick={() => onAddToCart(product.id)}
                        className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total & Checkout */}
        {cartItemsList.length > 0 && (
          <div className="border-t border-slate-200 p-4 bg-slate-50 space-y-3 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>30-min Delivery</span>
              <span className="text-emerald-600 font-bold">FREE</span>
            </div>
            <div className="flex justify-between font-bold text-sm text-slate-900 pt-2 border-t border-slate-200">
              <span>To Pay</span>
              <span>₹{subtotal}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3 bg-[#581c87] hover:bg-[#6b21a8] text-white font-bold rounded-xl shadow-md text-sm transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Place Express Order (UPI / Cash)</span>
              <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
