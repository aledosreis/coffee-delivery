import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react";

import tradicional from "../../assets/Expresso.png";
import latte from "../../assets/Latte.png";

import styles from "./Checkout.module.css";

export function Checkout() {
  const navigate = useNavigate()

  function handleCheckoutSubmit(e: FormEvent) {
    e.preventDefault()
    navigate('/checkout/success')
  }

  return (
    <form className={styles.checkout} onSubmit={handleCheckoutSubmit}>
      <div>
        <strong>Complete seu pedido</strong>

        <div className={styles.address}>
          <div className={styles.info}>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <div className={styles.inputs}>
            <div className={styles.group}>
              <input type="text" placeholder="CEP" />
            </div>
            <div className={styles.group}>
              <input type="text" placeholder="Rua" />
            </div>
            <div className={styles.group}>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento (opcional)" />
            </div>
            <div className={styles.group}>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </div>
        </div>

        <div className={styles.payment}>
          <div className={styles.info}>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <div className={styles.options}>
            <select name="payment" id="payment">
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
              <option value="money">Dinheiro</option>
            </select>
            <div className={styles.option} data-selected="true">
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </div>
            <div className={styles.option}>
              <Bank size={16} />
              <span>Cartão de débito</span>
            </div>
            <div className={styles.option}>
              <Money size={16} />
              <span>Dinheiro</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <strong>Cafés selecionados</strong>

        <div className={styles.price}>
          <div className={styles.coffee}>
            <img src={tradicional} />
            <div className={styles.coffeeInfo}>
              <span>Expresso Tradicional</span>
              <div className={styles.actions}>
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
                  <Trash weight="bold" size={16} />
                  Remover
                </button>
              </div>
            </div>
            <span>R$ 9,90</span>
          </div>
          <div className={styles.separator} />
          <div className={styles.coffee}>
            <img src={latte} />
            <div className={styles.coffeeInfo}>
              <span>Latte</span>
              <div className={styles.actions}>
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
                  <Trash weight="bold" size={16} />
                  Remover
                </button>
              </div>
            </div>
            <span>R$ 19,80</span>
          </div>
          <div className={styles.separator} />
          <table>
            <tbody>
              <tr>
                <td>Total de itens</td>
                <td>R$ 29,70</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>R$ 3,50</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>R$ 33,20</td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Confirmar pedido</button>
        </div>
      </div>
    </form>
  );
}
