import ButtonVs from "../buttonVs"
import CardCart from "./cardCart"

export default function Cart(){
    return(
        <div>
            <div>
                <h2>Carrinho</h2>
                <div>
                    <CardCart/>
                    <CardCart/>
                    <CardCart/>
                </div>
                <div>
                    <ButtonVs text="Adicionar mais produtos" pageName="/carrinho"/>
                </div>
            </div>
            <div>
                <ButtonVs text="Comprar" pageName="/carrinho"/>
                <h3>Resumo do pedido</h3>
                <div>
                    <p>3 produtos</p>
                    <p>Total: R$2400,00</p>
                </div>
            </div>
        </div>
    )
}