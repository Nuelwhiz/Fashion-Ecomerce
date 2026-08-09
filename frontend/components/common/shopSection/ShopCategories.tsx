"use client";

import Image from "next/image";

const categories = [
  {
    title: "Senator Wears",
    description: "Refined silhouettes for every occasion.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Native Wears",
    description: "Traditional influence, contemporary expression.",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Custom Designs",
    description: "Made around your style and personality.",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function ShopCategories() {
  return (
    <section className="bg-zinc-50 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-600">
            Shop by Category
          </p>

          <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Find your signature style.
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-200">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                    Collection
                  </p>

                  <h3 className="text-2xl font-medium tracking-tight">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-5 text-white/70">
                    {category.description}
                  </p>

                  <span className="mt-5 inline-block border-b border-white/70 pb-1 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors group-hover:border-amber-400 group-hover:text-amber-400">
                    Explore
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}