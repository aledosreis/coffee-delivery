import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

export function Checkout() {
  return (
    <form className="checkout">
      <div>
        <strong>Complete seu pedido</strong>

        <div className="address">
          <div className="info">
            <MapPinLine />
            <div>
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <div className="inputs">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div className="group">
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento opcional" />
            </div>
            <div className="group">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </div>
        </div>

        <div className="payment">
          <div className="info">
            <CurrencyDollar />
            <div>
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <div className="options">
            <div>
              <CreditCard />
              <span>Cartão de crédito</span>
            </div>
            <div>
              <Bank />
              <span>Cartão de crédito</span>
            </div>
            <div>
              <Money />
              <span>Cartão de crédito</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <strong>Cafés selecionados</strong>

        <div className="price">
          Cafés
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
          <button type="submit">Confirmar pedido</button>
        </div>
      </div>
    </form>
  );
}
