"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { products } from "@/data/product";

const categories = [
  "All",
  "Senator Wears",
  "Native Wears",
  "Casual",
];

export default function ProductCatalogue() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result =
      category === "All"
        ? [...products]
        : products.filter((product) => product.category === category);

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, sort]);

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-8 border-b border-zinc-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-600">
              Shop All
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl">
              The Collection
            </h2>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400"
            >
              Sort
            </label>

            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="border-0 bg-transparent py-2 pr-8 text-sm text-zinc-900 outline-none focus:ring-0"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mt-8 flex gap-6 overflow-x-auto border-b border-zinc-100 pb-5">
          {categories.map((item) => {
            const active = category === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap text-xs font-medium transition-colors ${
                  active
                    ? "text-zinc-950"
                    : "text-zinc-400 hover:text-zinc-900"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Product Count */}
        <div className="py-6">
          <p className="text-xs text-zinc-400">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {filteredProducts.map((product) => (
            <article key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-3">
                  <h3 className="text-sm font-medium text-zinc-950 sm:text-base">
                    {product.name}
                  </h3>

                  <p className="whitespace-nowrap text-sm text-zinc-600">
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}