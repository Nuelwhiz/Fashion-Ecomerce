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
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            Product not found
          </h1>

          <button
            onClick={() => router.push("/shop")}
            className="mt-4 underline"
          >
            Back to Shop
          </button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 md:grid-cols-2">
        
        {/* Product Image */}
        <div className="overflow-hidden bg-zinc-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full min-h-[500px] w-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            {product.category}
          </p>

          <h1 className="mt-4 text-4xl font-medium tracking-tight">
            {product.name}
          </h1>

          <p className="mt-6 text-xl">
            ₦{product.price.toLocaleString()}
          </p>

          <div className="my-8 border-t border-zinc-200" />

          {/* <p className="max-w-xl leading-7 text-zinc-600">
            {product.description}
          </p> */}

          {/* Quantity */}
          <div className="mt-10">
            <p className="mb-4 text-sm uppercase tracking-[0.2em]">
              Quantity
            </p>

            <div className="flex w-fit items-center border border-zinc-300">
              {/* Minus */}
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) =>
                    Math.max(1, current - 1)
                  )
                }
                className="px-5 py-3 text-xl transition hover:bg-zinc-100"
                aria-label="Decrease quantity"
              >
                −
              </button>

              {/* Quantity number */}
              <span className="min-w-[50px] text-center">
                {quantity}
              </span>

              {/* Plus */}
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => current + 1)
                }
                className="px-5 py-3 text-xl transition hover:bg-zinc-100"
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
            className="mt-8 w-full bg-black px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800"
          >
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}