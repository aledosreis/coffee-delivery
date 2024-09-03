import { createContext, ReactNode, useState } from "react";

interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: CartItem["id"]) => void;
  incrementItemQuantity: (itemId: CartItem["id"]) => void;
  decrementItemQuantity: (itemId: CartItem["id"]) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addItem(item: CartItem) {
    setCartItems((state) => [...state.filter(old => old.id !== item.id), item]);
  }

  function removeItem(itemId: CartItem["id"]) {
    setCartItems((state) => state.filter((item) => item.id !== itemId));
  }

  function incrementItemQuantity(itemId: CartItem["id"]) {
    setCartItems((state) =>
      state.map((item) => {
        if (item.id === itemId) {
          const quantity = item.quantity + 1;
          return { ...item, quantity };
        }

        return item;
      })
    );
  }

  function decrementItemQuantity(itemId: CartItem["id"]) {
    setCartItems((state) =>
      state.map((item) => {
        if (item.id === itemId) {
          const quantity = item.quantity - 1;
          return { ...item, quantity };
        }

        return item;
      })
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
