import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function PedidoFinalizado() {
    const {nome, cpf, filmeTitulo, hora, data, lugar} = useLocation().state;

    return (
        <Sucesso>
            <h1>Pedido feito com sucesso!</h1>

            <div className="info">
                <h2>Filme e sessão</h2>
                <p data-identifier="movie-session-infos-reserve-finished">{filmeTitulo}</p>
                <p data-identifier="movie-session-infos-reserve-finished">{data} - {hora}</p>
            </div>

            <div className="info">
                <h2>Ingressos</h2>

                {lugar.map((assento, index) => (
                    <p data-identifier="seat-infos-reserve-finished" key={index}>Assento {assento}</p>
                ))}
                
            </div>

            <div className="info">
                <h2>Comprador</h2>
                <p data-identifier="buyer-infos-reserve-finished">Nome: {nome}</p>
                <p data-identifier="buyer-infos-reserve-finished">CPF: {cpf}</p>
            </div>

            <Link to="/">
                <div className="botao-home">
                    <button data-identifier="back-to-home-btn">Voltar para o início</button>
                </div>
            </Link>

        </Sucesso>
    )
}

const Sucesso = styled.div`
    width: 100%;
    min-width: 375px;
    margin-top: 110px;
    padding: 0px 20px;
    line-height: 1.5;
    font-size: 16px;
    
    h1 {
    height: 40px;
    font-weight: 700;
    color: #247A6B;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    }

    .info {
    margin-bottom: 20px;
    text-align: left;

        h2 {
        font-weight: 700;
        font-size: 18px;
        }
    }

    .botao-home {
    display: flex;
    justify-content: center;

        button {
        width: 180px;
        height: 42px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        font-size: 15px;
        color: #FFFFFF;
        cursor: pointer;
        margin-top: 10px;
        }
    }
`