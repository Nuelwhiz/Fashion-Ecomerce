import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addToCart: (id: number, quantity: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartCount: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      // Add a product to the cart
      addToCart: (id, quantity) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === id
          );

          // If product already exists, increase its quantity
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: item.quantity + quantity,
                    }
                  : item
              ),
            };
          }

          // Otherwise add it as a new item
          return {
            items: [
              ...state.items,
              {
                id,
                quantity,
              },
            ],
          };
        });
      },

      // Increase quantity
      increaseQuantity: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        }));
      },

      // Decrease quantity
      decreaseQuantity: (id) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        }));
      },

      // Remove product completely
      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      // Empty the cart
      clearCart: () => {
        set({ items: [] });
      },

      // Total number of products in cart
      cartCount: () => {
        return get().items.reduce(
          (total, item) => total + item.quantity,
          0
        );
      },
    }),
    {
      name: "emifex-cart",
    }
  )
);