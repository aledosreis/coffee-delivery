import { Outlet } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import logo from "../../assets/logo.svg";

import styles from "./Layout.module.css";

export function DefaultLayout() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} />
        <div className={styles.actions}>
          <button>
            <MapPin weight="fill" size={22} />
            Araraquara, SP
          </button>
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </div>
      </header>

      <Outlet />
    </>
  )
}