import React from "react";
import Image from "next/image";
import { Product } from "../data";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onAddToCart: (id: string) => void;
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-purple-100/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group luxury-card">
      {/* Product Image + Badges + Heart */}
      <div
        className="relative aspect-square w-full bg-gradient-to-b from-purple-50/40 to-slate-50 overflow-hidden"
        style={{ position: "relative" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Favorite Heart Button with Vector SVG */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-rose-500 shadow-sm transition-all z-10 active:scale-90"
          title="Add to Wishlist"
        >
          {isFavorite ? (
            <svg style={{ width: "16px", height: "16px" }} className="text-rose-500 fill-rose-500" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>

        {/* Bottom-left pill badge */}
        {product.badge && (
          <div
            className={`absolute bottom-2.5 left-2.5 ${product.badge.bg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider z-10`}
          >
            {product.badge.text}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <h3 className="text-[15.5px] sm:text-base font-black text-[#1a0826] line-clamp-1 group-hover:text-[#7e22ce] transition-colors leading-snug tracking-tight">
            {product.name}
          </h3>
          <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-semibold flex items-center gap-1.5 h-4.5">
            <svg style={{ width: "11px", height: "11px" }} className="text-purple-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="truncate">{product.shopName}</span>
          </p>
        </div>

        <div>
          {/* Price & Discount */}
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-lg font-black text-[#180d28] tracking-tight">
              ₹{product.price}
            </span>
            <span className="text-xs text-slate-500 line-through font-medium">
              ₹{product.originalPrice}
            </span>
            <span className="text-[12px] font-black text-emerald-600">
              {product.discount}
            </span>
          </div>

          {/* Add Button */}
          <button
            onClick={() => onAddToCart(product.id)}
            className="w-full mt-2.5 bg-[#52136d] hover:bg-[#681989] text-white text-[13px] font-extrabold py-2.5 rounded-xl transition-all active:scale-95 shadow-xs shadow-purple-900/20 cursor-pointer"
          >
            + Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
