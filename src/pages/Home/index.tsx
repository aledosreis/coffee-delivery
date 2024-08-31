import {
  Coffee,
  Package,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from "@phosphor-icons/react";

import introImg from "../../assets/intro-image.png";

import { coffees } from "../../data/coffee";

import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.intro}>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className={styles.items}>
            <div className={styles.item}>
              <span className={`${styles.icon} ${styles.cart}`}>
                <ShoppingCart weight="fill" size={16} />
              </span>
              <span>Compra simples e segura</span>
            </div>

            <div className={styles.item}>
              <span className={`${styles.icon} ${styles.package}`}>
                <Package weight="fill" size={16} />
              </span>
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div className={styles.item}>
              <span className={`${styles.icon} ${styles.timer}`}>
                <Timer weight="fill" size={16} />
              </span>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div className={styles.item}>
              <span className={`${styles.icon} ${styles.coffee}`}>
                <Coffee weight="fill" size={16} />
              </span>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>

        <img src={introImg} />
      </div>

      <div className={styles.coffeeList}>
        <div className={styles.head}>
          <h2>Nossos cafés</h2>
          <div className={styles.filters}>
            <span>TRADICIONAL</span>
            <span>ESPECIAL</span>
            <span>COM LEITE</span>
            <span>ALCOÓLICO</span>
            <span>GELADO</span>
          </div>
        </div>

        <div className={styles.list}>
          {coffees.map((coffee) => {
            return (
              <div className={styles.card}>
                <div className={styles.cardWrapper}>
                  <img src={coffee.image} alt={coffee.name} />
                  <div className={styles.tags}>
                    {coffee.tag.map((tag) => (
                      <span>{tag}</span>
                    ))}
                  </div>
                  <strong>{coffee.name}</strong>
                  <span>{coffee.description}</span>
                  <div className={styles.buy}>
                    <span>
                      R$<strong>{coffee.price.toFixed(2).replace('.',',')}</strong>
                    </span>
                    <div>
                      <div className={styles.quantity}>
                        <button>+</button>
                        <span>1</span>
                        <button>-</button>
                      </div>
                      <button>
                        <ShoppingCartSimple weight="fill" size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
