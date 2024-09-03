import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { coffees } from "../../data/coffee";
import { useCart } from "../../hooks/useCart";

import styles from "./Checkout.module.css";
import { Fragment } from "react/jsx-runtime";

const checkoutFormSchema = z.object({
  cep: z.string(),
  street: z.string().min(1),
  number: z.number().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  state: z.string().length(2),
  paymentMethod: z.enum(["credit", "debit", "money"]),
});

type CheckoutFormInputs = z.infer<typeof checkoutFormSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue } =
    useForm<CheckoutFormInputs>({
      resolver: zodResolver(checkoutFormSchema),
    });
  const { cartItems, incrementItemQuantity, decrementItemQuantity, removeItem } = useCart();

  const coffeesInCart = cartItems.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    return {
      ...coffeeInfo,
      quantity: item.quantity,
      totalPrice: coffeeInfo!.price * item.quantity
    };
  });

  const selectedPayment = watch("paymentMethod");

  function handleIncrementItem(itemId: number) {
    incrementItemQuantity(itemId)
  }

  function handleDecrementItem(itemId: number) {
    decrementItemQuantity(itemId)
  }

  function handleRemoveItem(itemId: number) {
    removeItem(itemId)
  }

  function handleCheckoutSubmit(data: CheckoutFormInputs) {
    console.log(data);
    navigate("/checkout/success");
  }

  return (
    <form
      className={styles.checkout}
      onSubmit={handleSubmit(handleCheckoutSubmit)}
    >
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
              <input type="number" placeholder="CEP" {...register("cep")} />
            </div>
            <div className={styles.group}>
              <input type="text" placeholder="Rua" {...register("street")} />
            </div>
            <div className={styles.group}>
              <input
                type="number"
                placeholder="Número"
                {...register("number", { valueAsNumber: true })}
              />
              <input
                type="text"
                placeholder="Complemento (opcional)"
                {...register("complement")}
              />
            </div>
            <div className={styles.group}>
              <input
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
              />
              <input type="text" placeholder="Cidade" {...register("city")} />
              <input type="text" placeholder="UF" {...register("state")} />
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
            <select id="paymentMethod" {...register("paymentMethod")}>
              <option value="">Selecione...</option>
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
              <option value="money">Dinheiro</option>
            </select>
            <div
              className={styles.option}
              data-selected={selectedPayment === "credit"}
              onClick={() => setValue("paymentMethod", "credit")}
            >
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </div>
            <div
              className={styles.option}
              data-selected={selectedPayment === "debit"}
              onClick={() => setValue("paymentMethod", "debit")}
            >
              <Bank size={16} />
              <span>Cartão de débito</span>
            </div>
            <div
              className={styles.option}
              data-selected={selectedPayment === "money"}
              onClick={() => setValue("paymentMethod", "money")}
            >
              <Money size={16} />
              <span>Dinheiro</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <strong>Cafés selecionados</strong>

        <div className={styles.price}>
          {coffeesInCart.map((coffee) => {
            return (
              <Fragment key={coffee.id}>
                <div className={styles.coffee}>
                  <img src={coffee.image} />
                  <div className={styles.coffeeInfo}>
                    <span>{coffee.name}</span>
                    <div className={styles.actions}>
                      <div className={styles.quantity}>
                        <button onClick={() => handleDecrementItem(coffee.id!)}>
                          <Minus weight="bold" size={14} />
                        </button>
                        <span>{coffee.quantity}</span>
                        <button onClick={() => handleIncrementItem(coffee.id!)}>
                          <Plus weight="bold" size={14} />
                        </button>
                      </div>
                      <button onClick={() => handleRemoveItem(coffee.id!)}>
                        <Trash weight="bold" size={16} />
                        Remover
                      </button>
                    </div>
                  </div>
                  <span>R$ {coffee.totalPrice?.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className={styles.separator} />
              </Fragment>
            );
          })}
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
