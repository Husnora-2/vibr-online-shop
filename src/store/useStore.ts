// import { create } from "zustand";
// import type { Product } from "@/data/catalog";

// type CartItem = { product: Product; qty: number };

// type Store = {
//   cart: CartItem[];
//   wishlist: string[];
//   cartOpen: boolean;
//   addToCart: (p: Product) => void;
//   removeFromCart: (id: string) => void;
//   setQty: (id: string, qty: number) => void;
//   toggleWishlist: (id: string) => void;
//   setCartOpen: (open: boolean) => void;
// };

// export const useStore = create<Store>((set) => ({
//   cart: [],
//   wishlist: [],
//   cartOpen: false,
//   addToCart: (p) =>
//     set((s) => {
//       const existing = s.cart.find((i) => i.product.id === p.id);
//       if (existing) {
//         return { cart: s.cart.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i)), cartOpen: true };
//       }
//       return { cart: [...s.cart, { product: p, qty: 1 }], cartOpen: true };
//     }),
//   removeFromCart: (id) => set((s) => ({ cart: s.cart.filter((i) => i.product.id !== id) })),
//   setQty: (id, qty) =>
//     set((s) => ({ cart: s.cart.map((i) => (i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)) })),
//   toggleWishlist: (id) =>
//     set((s) => ({
//       wishlist: s.wishlist.includes(id) ? s.wishlist.filter((x) => x !== id) : [...s.wishlist, id],
//     })),
//   setCartOpen: (cartOpen) => set({ cartOpen }),
// }));












import { create } from "zustand";
import type { Product } from "@/data/catalog";

type CartItem = { product: Product; qty: number };

// Foydalanuvchi tipi
type User = {
  email: string;
  name: string;
} | null;

type Store = {
  user: User; // Foydalanuvchi ma'lumoti
  cart: CartItem[];
  wishlist: string[];
  cartOpen: boolean;
  setUser: (user: User) => void; // Login qilish uchun
  logout: () => void; // Chiqish uchun
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  setCartOpen: (open: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  // LocalStorage orqali foydalanuvchini eslab qolamiz
  user: JSON.parse(localStorage.getItem("maison_user") || "null"),
  cart: [],
  wishlist: [],
  cartOpen: false,

  setUser: (user) => {
    set({ user });
    localStorage.setItem("maison_user", JSON.stringify(user));
  },

  logout: () => {
    set({ user: null });
    localStorage.removeItem("maison_user");
  },

  addToCart: (p) =>
    set((s) => {
      const existing = s.cart.find((i) => i.product.id === p.id);
      if (existing) {
        return { cart: s.cart.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i)), cartOpen: true };
      }
      return { cart: [...s.cart, { product: p, qty: 1 }], cartOpen: true };
    }),
  removeFromCart: (id) => set((s) => ({ cart: s.cart.filter((i) => i.product.id !== id) })),
  setQty: (id, qty) =>
    set((s) => ({ cart: s.cart.map((i) => (i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)) })),
  toggleWishlist: (id) =>
    set((s) => ({
      wishlist: s.wishlist.includes(id) ? s.wishlist.filter((x) => x !== id) : [...s.wishlist, id],
    })),
  setCartOpen: (cartOpen) => set({ cartOpen }),
}));











