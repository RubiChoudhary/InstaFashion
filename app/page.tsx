"use client";

import React, { useState } from "react";
import TopTicker from "./components/TopTicker";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import CategoryCircles from "./components/CategoryCircles";
import StoreList from "./components/StoreList";
import ProductCard from "./components/ProductCard";
import AppBanner from "./components/AppBanner";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import { TRENDING_PRODUCTS, Product } from "./data";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState("Koramangala, Bengaluru");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{ [id: string]: number }>({
    tp1: 1,
    tp4: 1,
    tp5: 1,
  });
  const [favorites, setFavorites] = useState<{ [id: string]: boolean }>({});
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("all");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Cart helper calculations
  const totalCartCount = Object.values(cart).reduce((sum, q) => sum + q, 0);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  // Products filtering
  const displayedProducts = TRENDING_PRODUCTS.filter((prod) => {
    const matchesCategory =
      activeCategoryFilter === "all" || prod.category === activeCategoryFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shopName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartItemsList = Object.entries(cart)
    .map(([id, qty]) => {
      const prod = TRENDING_PRODUCTS.find((p) => p.id === id);
      return prod ? { product: prod, qty } : null;
    })
    .filter(Boolean) as { product: Product; qty: number }[];

  const subtotal = cartItemsList.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-[#faf8fc] text-[#1a0826] font-sans antialiased flex flex-col">
      {/* 0. Top Deep Purple Announcement Bar */}
      <TopTicker />

      {/* 1. Header Navigation */}
      <Navbar
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={(cat) => setActiveCategoryFilter(cat)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Banner with Swiper, Glowing Podiums & Delivery timer */}
        <HeroBanner
          onShopNowClick={() => {
            const el = document.getElementById("trending-section");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 3. Circular Category Grid */}
        <CategoryCircles
          onSelectCategory={(catId) => setActiveCategoryFilter(catId)}
        />

        {/* 4. Local Stores Spotlight & 4 Value Highlights Row */}
        <StoreList />

        {/* 5. Trending Products Grid */}
        <section
          id="trending-section"
          className="container py-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-[#52136d] shrink-0">
                  <svg style={{ width: "17px", height: "17px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <h2 className="section-title">
                  Trending Near You
                </h2>
              </div>
              <p className="text-caption mt-1 pl-10 text-slate-500 font-medium">
                Most loved styles from local stores in your city
              </p>
            </div>
            <button
              onClick={() => setActiveCategoryFilter("all")}
              className="text-[13px] font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <svg style={{ width: "12px", height: "12px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {displayedProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                isFavorite={!!favorites[prod.id]}
                onToggleFavorite={toggleFavorite}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* 6. App Download Banner */}
        <AppBanner />
      </main>

      {/* 7. Modern Deep Footer */}
      <Footer />

      {/* 8. Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        selectedLocation={selectedLocation}
        cartItemsList={cartItemsList}
        subtotal={subtotal}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={() => {
          setOrderSuccess(true);
          setCart({});
        }}
      />

      {/* Success Modal */}
      {orderSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Order Placed Successfully!
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Your order is being packed at {selectedLocation}. Your package will be delivered via 1-Day Express Delivery.
              </p>
            </div>
            <button
              onClick={() => {
                setOrderSuccess(false);
                setIsCartOpen(false);
              }}
              className="w-full py-2 bg-[#581c87] text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
