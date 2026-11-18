import React from "react";
import Image from "next/image";
import { CIRCLE_CATEGORIES } from "../data";

interface CategoryCirclesProps {
  onSelectCategory: (catId: string) => void;
}

export default function CategoryCircles({ onSelectCategory }: CategoryCirclesProps) {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6">
        {CIRCLE_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div
              className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-purple-50 border-2 border-purple-100 group-hover:border-purple-500 group-hover:shadow-lg transition-all duration-300"
              style={{ position: "relative" }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-3.5 whitespace-pre-line leading-snug">
              {cat.name}
            </h3>

            <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-sm font-black mt-2 group-hover:bg-[#581c87] group-hover:text-white transition-colors">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
