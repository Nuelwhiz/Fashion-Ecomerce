"use client";

import { useCartStore } from "@/store/cart-store";
import { products } from "@/data/product";

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

  const total = items.reduce((sum, item) => {
    const product = products.find(
      (product) => product.id === item.id
    );

    if (!product) return sum;

    return sum + product.price * item.quantity;
  }, 0);

  if (items.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-medium">
            Your Cart
          </h1>

          <p className="mt-4 text-zinc-500">
            Your cart is currently empty.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-medium">
            Your Cart
          </h1>

          <button
            type="button"
            onClick={clearCart}
            className="text-sm text-zinc-500 underline hover:text-black"
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
                className="flex flex-col gap-6 border-b border-zinc-200 pb-8 sm:flex-row sm:items-center sm:justify-between"
              >
                {/* Product */}
                <div className="flex items-center gap-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-28 w-24 object-cover bg-zinc-100"
                  />

                  <div>
                    <h2 className="text-lg font-medium">
                      {product.name}
                    </h2>

                    <p className="mt-2 text-zinc-500">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Quantity + Remove */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-zinc-300">
                    {/* Minus */}
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="px-4 py-2 text-lg hover:bg-zinc-100"
                      aria-label={`Decrease ${product.name} quantity`}
                    >
                      −
                    </button>

                    {/* Quantity */}
                    <span className="min-w-11.25 text-center">
                      {item.quantity}
                    </span>

                    {/* Plus */}
                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="px-4 py-2 text-lg hover:bg-zinc-100"
                      aria-label={`Increase ${product.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="text-sm text-zinc-500 underline hover:text-black"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total */}
        <div className="mt-10 flex justify-end">
          <div className="w-full max-w-sm">
            <div className="flex justify-between border-t border-zinc-300 pt-5">
              <span className="text-lg">Total</span>

              <span className="text-lg font-medium">
                ₦{total.toLocaleString()}
              </span>
            </div>

            <button
              type="button"
              className="mt-6 w-full bg-black px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}