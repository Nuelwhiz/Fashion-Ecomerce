import Image from "next/image";

const products = [
  {
    id: 1,
    name: "The Classic Senator",
    category: "Senator Collection",
    price: "₦85,000",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    name: "Heritage Native",
    category: "Heritage Collection",
    price: "₦95,000",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    name: "Modern Classic",
    category: "Contemporary Collection",
    price: "₦75,000",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    name: "Executive Heritage",
    category: "Premium Collection",
    price: "₦120,000",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-amber-600">
              The Collection
            </p>

            <h2 className="max-w-xl text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Pieces made to be remembered.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-zinc-500">
            Discover carefully crafted pieces designed around timeless
            style, exceptional craftsmanship, and effortless confidence.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="group">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Details */}
              <div className="pt-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-3">
                  <h3 className="text-sm font-medium text-zinc-950 sm:text-base">
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

        {/* View Collection */}
        <div className="mt-14 text-center">
          <button
            type="button"
            className="border-b border-zinc-950 pb-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-950 transition-colors hover:border-amber-600 hover:text-amber-600"
          >
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}