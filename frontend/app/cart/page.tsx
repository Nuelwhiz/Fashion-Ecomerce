"use client";

import { useCartStore } from "@/store/cart-store";
import { products } from "@/data/product";
import Link from "next/link";

export default function CartPage() {
  const items = useCartStore((state) => state.items);

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b8860b]">
            Emifex
          </p>

          <h1 className="mt-3 text-3xl font-medium text-[#171717]">
            Your Cart
          </h1>

          <p className="mt-4 text-[#737373]">
            Your cart is currently empty.
          </p>

          <Link
            href="/shop"
            className="mt-7 inline-block rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#b8860b]"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[#e5e1d8] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b8860b]">
              Emifex
            </p>

            <h1 className="mt-3 text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl">
              Your Cart
            </h1>

            <p className="mt-2 text-sm text-[#737373]">
              Review your selected pieces before checkout.
            </p>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="w-fit text-sm text-[#737373] underline underline-offset-4 transition hover:text-[#b8860b]"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items */}
        <div className="mt-10 space-y-8">
          {items.map((item) => {
            const product = products.find(
              (product) => product.id === item.id
            );

            if (!product) return null;

            return (
              <div
                key={item.id}
                className="flex flex-col gap-6 border-b border-[#e5e1d8] pb-8 sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Product */}
                <div className="flex items-center gap-5">

                  {/* Product Image */}
                  <div className="relative aspect-3/4 w-28 shrink-0 overflow-hidden rounded-sm bg-[#f1eee7]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Information */}
                  <div>
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#b8860b]">
                      Selected Piece
                    </p>

                    <h2 className="text-lg font-medium text-[#171717]">
                      {product.name}
                    </h2>

                    <p className="mt-2 text-[#525252]">
                      ₦{product.price.toLocaleString()}
                    </p>

                    <p className="mt-2 text-sm text-[#a3a3a3]">
                      Item total: ₦
                      {(
                        product.price * item.quantity
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Quantity + Remove */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center overflow-hidden rounded-lg border border-[#d6d1c7] bg-white">

                    {/* Minus */}
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="px-4 py-2 text-lg text-[#404040] transition hover:bg-[#f8f1df] hover:text-[#b8860b]"
                      aria-label={`Decrease ${product.name} quantity`}
                    >
                      −
                    </button>

                    {/* Quantity */}
                    <span className="min-w-12.5 text-center text-sm font-medium text-[#171717]">
                      {item.quantity}
                    </span>

                    {/* Plus */}
                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="px-4 py-2 text-lg text-[#404040] transition hover:bg-[#f8f1df] hover:text-[#b8860b]"
                      aria-label={`Increase ${product.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="text-sm text-[#737373] underline underline-offset-4 transition hover:text-[#b8860b]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cart Summary */}
        <div className="mt-12 flex justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-[#e5e1d8] bg-white p-6 shadow-sm">

            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#b8860b]">
              Order Summary
            </p>

            <h2 className="mt-2 text-xl font-semibold text-[#171717]">
              Cart Total
            </h2>

            <div className="my-6 border-t border-[#e5e1d8]" />

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-lg text-[#525252]">
                Total
              </span>

              <span className="text-xl font-semibold text-[#b8860b]">
                ₦{total.toLocaleString()}
              </span>
            </div>

            {/* Checkout */}
            <Link
              href="/checkout"
              className="mt-7 block w-full rounded-lg bg-[#171717] px-6 py-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#b8860b]"
            >
              Proceed to Checkout
            </Link>

            {/* Continue Shopping */}
            <Link
              href="/shop"
              className="mt-5 block text-center text-sm text-[#737373] transition hover:text-[#b8860b]"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}