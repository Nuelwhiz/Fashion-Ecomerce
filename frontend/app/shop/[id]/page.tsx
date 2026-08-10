import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/product";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        {/* Back to Shop */}
        <Link
          href="/shop"
          className="mb-10 inline-flex text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-zinc-950"
        >
          ← Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-3/4 overflow-hidden bg-zinc-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-amber-600">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-tight text-zinc-950 sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-6 text-xl text-zinc-700">
              ₦{product.price.toLocaleString()}
            </p>

            <div className="my-8 h-px bg-zinc-200" />

            <p className="max-w-lg text-sm leading-7 text-zinc-500">
              A carefully crafted Emifex piece designed with attention to
              detail, comfort, and timeless style.
            </p>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                Quantity
              </p>

              <div className="mt-3 flex h-11 w-fit items-center border border-zinc-200">
                <button
                  type="button"
                  className="px-4 text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  −
                </button>

                <span className="px-4 text-sm text-zinc-950">
                  1
                </span>

                <button
                  type="button"
                  className="px-4 text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              className="mt-8 w-full bg-zinc-950 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-amber-600"
            >
              Add to Cart
            </button>

            {/* Product Details */}
            <div className="mt-10 border-t border-zinc-200">
              <div className="flex justify-between border-b border-zinc-100 py-4">
                <span className="text-xs text-zinc-400">
                  Category
                </span>

                <span className="text-xs text-zinc-900">
                  {product.category}
                </span>
              </div>

              <div className="flex justify-between py-4">
                <span className="text-xs text-zinc-400">
                  Product ID
                </span>

                <span className="text-xs text-zinc-900">
                  #{product.id}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}