import { createContext, ReactNode, useEffect, useState } from "react";

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

  useEffect(() => {
    const storedState = localStorage.getItem("@coffee-delivery:cart-1.0.0")

    if (storedState) {
      setCartItems(JSON.parse(storedState))
    }
  }, [])

  useEffect(() => {
    if (cartItems.length > 0) {
      const stateToStore = JSON.stringify(cartItems)

      localStorage.setItem("@coffee-delivery:cart-1.0.0", stateToStore)
    } else {
      localStorage.removeItem("@coffee-delivery:cart-1.0.0")
    }
  }, [cartItems])

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
