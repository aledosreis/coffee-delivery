import { Outlet } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import { useCart } from "../../hooks/useCart";

import logo from "../../assets/logo.svg";

import styles from "./Layout.module.css";

export function DefaultLayout() {
  const { cartItems } = useCart()

  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <img src={logo} />
        </a>
        <div className={styles.actions}>
          <span>
            <MapPin weight="fill" size={22} />
            Araraquara, SP
          </span>
          <a href="/checkout">
            <ShoppingCart weight="fill" size={22} />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </a>
        </div>
      </header>

      <Outlet />
    </>
  )
}