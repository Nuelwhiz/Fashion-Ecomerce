"use client";

import { useState } from "react";

const categories = [
  "All",
  "Senator Wears",
  "Native Wears",
  "Casual",
  "Custom Designs",
];

export default function ProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <aside className="w-full">
      {/* Categories */}
      <div>
        <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400">
          Category
        </h3>

        <nav className="mt-5">
          <ul className="space-y-4">
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className="group flex items-center gap-3 text-left"
                  >
                    {/* Active indicator */}
                    <span
                      className={`h-px transition-all duration-300 ${
                        active
                          ? "w-6 bg-zinc-950"
                          : "w-0 bg-zinc-400 group-hover:w-4"
                      }`}
                    />

                    <span
                      className={`text-sm transition-colors duration-300 ${
                        active
                          ? "font-medium text-zinc-950"
                          : "text-zinc-500 group-hover:text-zinc-900"
                      }`}
                    >
                      {category}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-zinc-200" />

      {/* Price */}
      <div>
        <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400">
          Price
        </h3>

        <div className="mt-5 space-y-3">
          <button
            type="button"
            className="block text-sm text-zinc-500 transition-colors hover:text-zinc-950"
          >
            Under ₦50,000
          </button>

          <button
            type="button"
            className="block text-sm text-zinc-500 transition-colors hover:text-zinc-950"
          >
            ₦50,000 – ₦100,000
          </button>

          <button
            type="button"
            className="block text-sm text-zinc-500 transition-colors hover:text-zinc-950"
          >
            ₦100,000 – ₦150,000
          </button>

          <button
            type="button"
            className="block text-sm text-zinc-500 transition-colors hover:text-zinc-950"
          >
            ₦150,000+
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-zinc-200" />

      {/* Size */}
      <div>
        <h3 className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400">
          Size
        </h3>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              type="button"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}