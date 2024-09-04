import { ShoppingCartSimple, Plus, Minus } from "@phosphor-icons/react";

import { Coffee } from "../../data/coffee";

import styles from "./CoffeeCard.module.css";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";

type CoffeCardProps = {
  coffee: Coffee;
};

export function CoffeeCard({ coffee }: CoffeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setQuantity(1)
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <img src={coffee.image} alt={coffee.name} />
        <div className={styles.tags}>
          {coffee.tag.map((tag) => (
            <span key={tag}>{tag}</span>
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
              <button onClick={decrementQuantity}>
                <Minus weight="bold" size={14} />
              </button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>
                <Plus weight="bold" size={14} />
              </button>
            </div>
            <button onClick={handleAddItem}>
              <ShoppingCartSimple weight="fill" size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
