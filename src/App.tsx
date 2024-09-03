import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartProvider } from "./contexts/CartProvider";

export function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartProvider>
  )
}
