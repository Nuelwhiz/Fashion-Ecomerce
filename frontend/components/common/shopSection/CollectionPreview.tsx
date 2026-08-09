import Image from "next/image";

const products = [
  {
    name: "Executive Senator",
    category: "Senator Wears",
    price: "₦120,000",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Heritage Native",
    category: "Native Wears",
    price: "₦95,000",
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Modern Classic",
    category: "Contemporary",
    price: "₦75,000",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "The Signature Set",
    category: "Premium Collection",
    price: "₦110,000",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Classic Heritage",
    category: "Native Wears",
    price: "₦90,000",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Emifex Essential",
    category: "Everyday Collection",
    price: "₦65,000",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function CollectionPreview() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-600">
              The Collection
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl">
              Explore our pieces
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-zinc-500">
            From everyday essentials to statement pieces, discover
            clothing designed to become part of your personal style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {products.map((product) => (
            <article key={product.name} className="group">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="mt-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
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

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="border border-zinc-950 px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-950 transition-all duration-300 hover:bg-zinc-950 hover:text-white"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}