"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

export default function PaymentPage() {
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f6] px-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#b08d57]">
          Emifex
        </p>

        <h1 className="text-3xl font-semibold text-zinc-950">
          Your cart is empty
        </h1>

        <p className="mt-3 text-gray-500">
          There is no order to make payment for.
        </p>

        <Link
          href="/shop"
          className="mt-6 rounded-lg bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b08d57]"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  const handlePayment = () => {
    // Real payment integration will be added here.
    alert("Payment integration coming next.");
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b08d57]">
            Emifex
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Payment
          </h1>

          <p className="mt-2 text-gray-500">
            Review your order and complete your payment.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Payment Section */}
          <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-2 sm:p-8">
            {/* Section Header */}
            <div className="border-b border-zinc-100 pb-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#b08d57]">
                Step 03
              </p>

              <h2 className="mt-2 text-xl font-semibold text-zinc-950">
                Payment Method
              </h2>
            </div>

            {/* Online Payment */}
            <div className="mt-6 rounded-xl border border-[#b08d57] bg-[#b08d57]/40 p-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#b08d57]">
                  <div className="h-2 w-2 rounded-full bg-[#b08d57]" />
                </div>

                <div>
                  <p className="font-medium text-zinc-950">
                    Online Payment
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Pay securely with your card or supported
                    payment method.
                  </p>
                </div>
              </div>
            </div>

            {/* Secure Payment Information */}
            <div className="mt-8 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b08d57]/40 text-[#b08d57]">
                  ✓
                </div>

                <div>
                  <p className="font-medium text-zinc-950">
                    Secure Payment
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    You will be redirected to our secure payment
                    gateway to complete your transaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              type="button"
              onClick={handlePayment}
              className="mt-8 w-full rounded-lg bg-zinc-950 px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#b08d57]"
            >
              Pay ₦{subtotal.toLocaleString()}
            </button>

            {/* Back to Checkout */}
            <Link
              href="/checkout"
              className="mt-5 block text-center text-sm text-gray-500 transition hover:text-[#b08d57]"
            >
              ← Back to Checkout
            </Link>
          </section>

          {/* Order Summary */}
          <aside className="h-fit overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            {/* Header */}
            <div className="border-b border-zinc-100 p-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#b08d57]">
                Your Order
              </p>

              <h2 className="mt-2 text-xl font-semibold text-zinc-950">
                Order Summary
              </h2>
            </div>

            {/* Products */}
            <div className="p-6">
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between gap-4"
                  >
                    <div>
                      <p className="font-medium text-zinc-950">
                        {item.name}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="whitespace-nowrap text-sm font-medium text-zinc-950">
                      ₦
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-zinc-200" />

              {/* Items */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Items
                </span>

                <span className="font-medium text-zinc-950">
                  {totalItems}
                </span>
              </div>

              {/* Subtotal */}
              <div className="mt-4 flex justify-between">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-medium text-zinc-950">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>

              {/* Delivery */}
              <div className="mt-4 flex justify-between">
                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="text-sm font-medium text-[#b08d57]">
                  Calculated later
                </span>
              </div>

              <div className="my-6 border-t border-zinc-200" />

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-zinc-950">
                  Total
                </span>

                <span className="text-xl font-semibold text-[#b08d57]">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}