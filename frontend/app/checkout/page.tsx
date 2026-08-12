"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-semibold">Your cart is empty</h1>

        <p className="mt-3 text-gray-500">
          Add some products before proceeding to checkout.
        </p>

        <Link
          href="/shop"
          className="mt-6 rounded-lg bg-black px-6 py-3 text-white"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold">Checkout</h1>

        <p className="mt-2 text-gray-500">
          Complete your information to place your order.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {/* Customer Information */}
          <section className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Customer Information
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="08012345678"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />
              </div>
            </div>

            {/* Delivery Information */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold">
                Delivery Information
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Address
                  </label>

                  <textarea
                    placeholder="Enter your delivery address"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      City
                    </label>

                    <input
                      type="text"
                      placeholder="Lagos"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      State
                    </label>

                    <input
                      type="text"
                      placeholder="Lagos State"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Order Summary */}
          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-medium">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-6 border-t" />

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Items
              </span>

              <span>{totalItems}</span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-gray-500">
                Subtotal
              </span>

              <span className="font-medium">
                ₦{subtotal.toLocaleString()}
              </span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-gray-500">
                Delivery
              </span>

              <span className="font-medium">
                Calculated later
              </span>
            </div>

            <div className="my-6 border-t" />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>

              <span>₦{subtotal.toLocaleString()}</span>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Continue to Payment
            </button>

            <Link
              href="/cart"
              className="mt-4 block text-center text-sm text-gray-500 hover:text-black"
            >
              ← Back to Cart
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}