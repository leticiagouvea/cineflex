import styled from "styled-components"

export default function PedidoFinalizado() {
    return (
        <Sucesso>
            <h1>Pedido feito com sucesso!</h1>
        </Sucesso>
    )
}

const Sucesso = styled.div`
    margin-top: 120px;
    width: 100%;
    min-width: 375px;
    display: flex;
    justify-content: center;
`