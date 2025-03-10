import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Product, ShoppingCart } from "./schema";

interface Store {
  total: number;
  contents: ShoppingCart;
  addToCart: (product: Product) => void;
  updateQuantity: (id: Product["id"], quantity: number) => void;
  removeFromCart: (id: Product["id"]) => void;
  calculateTotal: () => void;
}

export const useStore = create<Store>()(
  devtools((set, get) => ({
    total: 0,
    contents: [],
    addToCart: (product) => {
      const { id: productId, categoryId, ...data } = product;

      let contents: ShoppingCart = [];

      const duplicated = get().contents.findIndex(
        (item) => item.productId === productId,
      );
      if (duplicated >= 0) {
        if (
          get().contents[duplicated].quantity >=
          get().contents[duplicated].inventory
        )
          return;

        contents = get().contents.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      } else {
        contents = [
          ...get().contents,
          {
            ...data,
            productId,
            quantity: 1,
          },
        ];
      }

      set(() => ({
        contents,
      }));

      get().calculateTotal();
    },
    updateQuantity: (id, quantity) => {
      const contents = get().contents.map((item) =>
        item.productId === id
          ? {
              ...item,
              quantity,
            }
          : item,
      );

      set(() => ({
        contents,
      }));
      get().calculateTotal();
    },
    removeFromCart: (id) => {
      const contents = get().contents.filter((item) => item.productId !== id);

      set(() => ({
        contents,
      }));
      get().calculateTotal();
    },
    calculateTotal: () => {
      const total = get().contents.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );

      set(() => ({
        total,
      }));
    },
  })),
);

