import { createContext, ReactNode, useEffect, useState } from "react";
import { CheckoutFormInputs } from "../pages/Checkout";

interface CartItem {
  id: number;
  quantity: number;
}

interface Order extends CheckoutFormInputs {
  id: number,
  items: CartItem[]
}

interface CartState {
  cartItems: CartItem[]
  orders: Order[]
}

interface CartContextType {
  cartItems: CartItem[];
  orders: Order[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: CartItem["id"]) => void;
  incrementItemQuantity: (itemId: CartItem["id"]) => void;
  decrementItemQuantity: (itemId: CartItem["id"]) => void;
  checkout: (order: Order) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, setCartState] = useState<CartState>({ cartItems: [], orders: [] });

  const { cartItems, orders } = cartState

  useEffect(() => {
    const storedState = localStorage.getItem("@coffee-delivery:cart-1.0.0")

    if (storedState) {
      setCartState(JSON.parse(storedState))
    }
  }, [])

  useEffect(() => {
    if (cartState.cartItems.length > 0 || cartState.orders.length > 0) {
      const stateToStore = JSON.stringify(cartState)

      localStorage.setItem("@coffee-delivery:cart-1.0.0", stateToStore)
    } else {
      localStorage.removeItem("@coffee-delivery:cart-1.0.0")
    }
  }, [cartState])

  function checkout(order: Order) {
    setCartState((state) => {
      return {
        cartItems: [],
        orders: [...state.orders, order]
      }
    })
  }

  function addItem(item: CartItem) {
    setCartState((state) => {
      const itemAlreadyAdded = state.cartItems.find(old => old.id === item.id)

      if (itemAlreadyAdded) {
        return {
          ...state,
          cartItems: state.cartItems.map(old => {
            if (old.id === item.id) {
              const quantity = item.quantity
              return { ...old, quantity}
            }

            return old
          })
        }
      } else {
        return { ...state, cartItems: [item, ...state.cartItems] }
      }
    })
  }

  function removeItem(itemId: CartItem["id"]) {
    setCartState((state) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== itemId)
      }
    })
  }

  function incrementItemQuantity(itemId: CartItem["id"]) {
    setCartState((state) => {
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === itemId) {
            const quantity = item.quantity + 1
            return { ...item, quantity}
          }

          return item
        })
      }
    })
  }

  function decrementItemQuantity(itemId: CartItem["id"]) {
    setCartState((state) => {
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === itemId) {
            if (item.quantity > 1) {
              const quantity = item.quantity - 1
              return { ...item, quantity}
            }
          }

          return item
        })
      }
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
