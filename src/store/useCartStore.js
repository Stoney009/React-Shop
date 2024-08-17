import { create } from "zustand";

const useCartStore = create((set) => ({
  carts: [
    
  ],
  addCart: (newCart) =>
    set((state) => ({
      carts: [...state.carts, newCart],
    })),
  quantityHandler: (id, amount) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id == id ? { ...el, quantity: el.quantity + amount } : el
      ),
    })),
  removeCart: (id) =>
    set((state) => ({
      carts: state.carts.filter((el) => el.id !== id),
    })),
}));

export default useCartStore;
