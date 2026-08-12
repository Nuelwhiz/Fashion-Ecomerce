"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/data/product";
import { useCartStore } from "@/store/cart-store";

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#B08D57]">
            Emifex
          </p>

          <h1 className="mt-4 text-2xl font-semibold text-zinc-950">
            Product not found
          </h1>

          <button
            type="button"
            onClick={() => router.push("/shop")}
            className="mt-6 rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#B08D57]"
          >
            Back to Shop
          </button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(
      product.id,
      product.name,
      product.price,
      quantity
    );
  };

  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-12 lg:px-8 lg:py-16">
        
        {/* Product Image */}
        <div className="overflow-hidden rounded-2xl bg-zinc-100">
          <div className="aspect-[4/5] w-full">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          
          {/* Category */}
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#B08D57]">
            {product.category}
          </p>

          {/* Product Name */}
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            {product.name}
          </h1>

          {/* Price */}
          <p className="mt-6 text-xl font-medium text-zinc-900 sm:text-2xl">
            ₦{product.price.toLocaleString()}
          </p>

          <div className="my-8 border-t border-zinc-200" />

          {/* Quantity */}
          <div className="mt-4">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-700">
              Quantity
            </p>

            <div className="flex w-fit items-center overflow-hidden rounded-lg border border-zinc-300 bg-white">
              
              {/* Minus */}
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) =>
                    Math.max(1, current - 1)
                  )
                }
                className="px-5 py-3 text-xl text-zinc-700 transition hover:bg-[#f6f0e5] hover:text-[#B08D57]"
                aria-label="Decrease quantity"
              >
                −
              </button>

              {/* Quantity */}
              <span className="min-w-[55px] text-center text-sm font-medium text-zinc-950">
                {quantity}
              </span>

              {/* Plus */}
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => current + 1)
                }
                className="px-5 py-3 text-xl text-zinc-700 transition hover:bg-[#f6f0e5] hover:text-[#B08D57]"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-8 w-full rounded-lg bg-[#B08D57] px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#967442]"
          >
            Add to Cart
          </button>

          {/* Continue Shopping */}
          <button
            type="button"
            onClick={() => router.push("/shop")}
            className="mt-5 text-center text-sm text-zinc-500 transition hover:text-[#B08D57]"
          >
            ← Continue Shopping
          </button>
        </div>
      </section>
    </main>
  );
}