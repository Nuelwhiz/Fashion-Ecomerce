"use client";

import Image from "next/image";

const products = [
  {
    name: "Classic Senator",
    category: "Senator Collection",
    price: "₦85,000",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Heritage Native",
    category: "Native Collection",
    price: "₦95,000",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Modern Classic",
    category: "Contemporary Collection",
    price: "₦75,000",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-600">
              Featured Collection
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-medium leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Designed with intention.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500">
            Explore selected pieces from the Emifex collection,
            thoughtfully crafted for those who appreciate timeless
            style and exceptional detail.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => (
            <article key={product.name} className="group">
              {/* Product Image */}
              <div className="relative aspect-4/5 overflow-hidden bg-zinc-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Product Information */}
              <div className="mt-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="text-base font-medium text-zinc-950">
                    {product.name}
                  </h3>

                  <p className="whitespace-nowrap text-sm text-zinc-600">
                    {product.price}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            className="border-b border-zinc-950 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-950 transition-colors duration-300 hover:border-amber-600 hover:text-amber-600"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}