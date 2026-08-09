import ProductCard from "./ProductCard";

const products = [
  {
    id: "senator-001",
    name: "Classic Senator Set",
    category: "Senator Wears",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "native-001",
    name: "Royal Native Outfit",
    category: "Native Wears",
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "casual-001",
    name: "Premium Casual Set",
    category: "Casual",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "senator-002",
    name: "Executive Senator",
    category: "Senator Wears",
    price: 110000,
    image:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "native-002",
    name: "Royal Heritage",
    category: "Native Wears",
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "casual-002",
    name: "Signature Casual",
    category: "Casual",
    price: 70000,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "custom-001",
    name: "Bespoke Classic",
    category: "Custom Designs",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "native-003",
    name: "Heritage Collection",
    category: "Native Wears",
    price: 135000,
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Our Collection
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Featured Pieces
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500 sm:text-right">
            Explore our carefully crafted collection of premium pieces
            designed for elegance, comfort, and confidence.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-14">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}