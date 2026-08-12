"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cart-store";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleContinueToPayment = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state
    ) {
      alert("Please complete all required fields.");
      return;
    }

    window.location.href = "/payment";
  };

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f6] px-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#b08d57]">
          Emifex
        </p>

        <h1 className="text-3xl font-semibold text-[#211a14]">
          Your Cart Is Empty
        </h1>

        <p className="mt-3 text-[#756b61]">
          Add some products before proceeding to checkout.
        </p>

        <Link
          href="/shop"
          className="mt-6 rounded-lg bg-[#211a14] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b08d57]"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] px-5 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b08d57]">
            Emifex
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#211a14] sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-2 text-[#756b61]">
            Complete your information to place your order.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Customer Information */}
          <section className="rounded-2xl border border-[#e5ddd1] bg-white p-6 shadow-sm lg:col-span-2 sm:p-8">

            {/* Section Header */}
            <div className="border-b border-[#eee7dc] pb-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#b08d57]">
                Step 01
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[#211a14]">
                Customer Information
              </h2>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">

              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-[#332a23]"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full rounded-lg border border-[#d9d0c4] bg-white px-4 py-3 text-sm text-[#211a14] outline-none transition placeholder:text-[#aaa096] focus:border-[#b08d57] focus:ring-1 focus:ring-[#b08d57]"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-[#332a23]"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full rounded-lg border border-[#d9d0c4] bg-white px-4 py-3 text-sm text-[#211a14] outline-none transition placeholder:text-[#aaa096] focus:border-[#b08d57] focus:ring-1 focus:ring-[#b08d57]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#332a23]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-[#d9d0c4] bg-white px-4 py-3 text-sm text-[#211a14] outline-none transition placeholder:text-[#aaa096] focus:border-[#b08d57] focus:ring-1 focus:ring-[#b08d57]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[#332a23]"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="08012345678"
                  className="w-full rounded-lg border border-[#d9d0c4] bg-white px-4 py-3 text-sm text-[#211a14] outline-none transition placeholder:text-[#aaa096] focus:border-[#b08d57] focus:ring-1 focus:ring-[#b08d57]"
                />
              </div>
            </div>

            {/* Delivery Information */}
            <div className="mt-12">

              <div className="border-b border-[#eee7dc] pb-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#b08d57]">
                  Step 02
                </p>

                <h2 className="mt-2 text-xl font-semibold text-[#211a14]">
                  Delivery Information
                </h2>
              </div>

              <div className="mt-6 space-y-5">

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-[#332a23]"
                  >
                    Address
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your delivery address"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-[#d9d0c4] bg-white px-4 py-3 text-sm text-[#211a14] outline-none transition placeholder:text-[#aaa096] focus:border-[#b08d57] focus:ring-1 focus:ring-[#b08d57]"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* City */}
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-medium text-[#332a23]"
                    >
                      City
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Lagos"
                      className="w-full rounded-lg border border-[#d9d0c4] bg-white px-4 py-3 text-sm text-[#211a14] outline-none transition placeholder:text-[#aaa096] focus:border-[#b08d57] focus:ring-1 focus:ring-[#b08d57]"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label
                      htmlFor="state"
                      className="mb-2 block text-sm font-medium text-[#332a23]"
                    >
                      State
                    </label>

                    <input
                      id="state"
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Lagos State"
                      className="w-full rounded-lg border border-[#d9d0c4] bg-white px-4 py-3 text-sm text-[#211a14] outline-none transition placeholder:text-[#aaa096] focus:border-[#b08d57] focus:ring-1 focus:ring-[#b08d57]"
                    />
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Order Summary */}
          <aside className="h-fit overflow-hidden rounded-2xl border border-[#e5ddd1] bg-white shadow-sm">

            {/* Summary Header */}
            <div className="border-b border-[#eee7dc] bg-[#f5efe5] p-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#b08d57]">
                Your Order
              </p>

              <h2 className="mt-2 text-xl font-semibold text-[#211a14]">
                Order Summary
              </h2>
            </div>

            {/* Products */}
            <div className="p-6">

              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="font-medium text-[#211a14]">
                        {item.name}
                      </p>

                      <p className="mt-1 text-sm text-[#756b61]">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="whitespace-nowrap text-sm font-medium text-[#211a14]">
                      ₦
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-[#e5ddd1]" />

              {/* Items */}
              <div className="flex justify-between text-sm">
                <span className="text-[#756b61]">
                  Items
                </span>

                <span className="font-medium text-[#211a14]">
                  {totalItems}
                </span>
              </div>

              {/* Subtotal */}
              <div className="mt-4 flex justify-between">
                <span className="text-[#756b61]">
                  Subtotal
                </span>

                <span className="font-medium text-[#211a14]">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>

              {/* Delivery */}
              <div className="mt-4 flex justify-between">
                <span className="text-[#756b61]">
                  Delivery
                </span>

                <span className="text-sm font-medium text-[#b08d57]">
                  Calculated later
                </span>
              </div>

              <div className="my-6 border-t border-[#e5ddd1]" />

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-[#211a14]">
                  Total
                </span>

                <span className="text-xl font-semibold text-[#b08d57]">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>

              {/* Payment Button */}
              <button
                type="button"
                onClick={handleContinueToPayment}
                className="mt-7 w-full rounded-lg bg-[#211a14] px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#b08d57]"
              >
                Continue to Payment
              </button>

              {/* Back */}
              <Link
                href="/cart"
                className="mt-5 block text-center text-sm text-[#756b61] transition hover:text-[#b08d57]"
              >
                ← Back to Cart
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}