import { ShoppingCartSimple, Plus, Minus } from "@phosphor-icons/react";

import { Coffee } from "../../data/coffee";

import styles from './CoffeeCard.module.css'

type CoffeCardProps = {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeCardProps) {
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
            R$<strong>{coffee.price.toFixed(2).replace(".", ",")}</strong>
          </span>
          <div>
            <div className={styles.quantity}>
              <button>
                <Plus weight="bold" size={14} />
              </button>
              <span>1</span>
              <button>
                <Minus weight="bold" size={14} />
              </button>
            </div>
            <button>
              <ShoppingCartSimple weight="fill" size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
