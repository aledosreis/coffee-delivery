import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import imageSuccess from "../../../assets/success-illustration.svg";

import styles from "./Success.module.css";

export function Success() {
  return (
    <div className={styles.container}>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.icon}>
              <MapPin size={16} weight="fill" />
            </span>
            <div className={styles.info}>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre</span>
            </div>
          </div>

          <div className={styles.detail}>
            <span className={styles.icon}>
              <Timer size={16} weight="fill" />
            </span>
            <div className={styles.info}>
              <span>
                Previsão de entrega
              </span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          
          <div className={styles.detail}>
            <span className={styles.icon}>
              <CurrencyDollar size={16} />
            </span>
            <div className={styles.info}>
              <span>
                Pagamento na entrega
              </span>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>

        <img src={imageSuccess} />
      </div>
    </div>
  );
}
