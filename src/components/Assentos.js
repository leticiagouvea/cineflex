import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Rodape from "./Rodape";
import Assento from "./Assento";
import InfoCliente from "./InfoCliente";
import iconeCarregando from "../assets/img/carregando.gif";

export default function Assentos() {
    const { sessaoId } = useParams();
    const [hora, setHora] = useState([]);
    const [dia, setDia] = useState([]);
    const [filme, setFilme] = useState([]);
    const [assentos, setAssentos] = useState([]);
    const [numeroAssento, setNumeroAssento] = useState([]);
    const [lugar, setLugar] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);

        promise.then((resposta) => {
            setHora(resposta.data.name)
            setDia(resposta.data.day)
            setFilme(resposta.data.movie)
            setAssentos(resposta.data.seats)

        }).catch(() => {
            alert("Algo deu errado. Tente novamente.")
        })

    }, [sessaoId])

    if (assentos.length === 0) {
        return (
        <Carregando>
            <img src={iconeCarregando} alt="carregando..." />
        </Carregando>
        )
    }

    return (
        <>
            <TextoAssentos>
                <h1>Selecione o(s) assento(s)</h1>
            </TextoAssentos>

            <CaixaAssentos>
                {assentos.map((value, index) => (
                    <Assento key={index} id={value.id} nome={value.name} disponivel={value.isAvailable} numeroAssento={numeroAssento} setNumeroAssento={setNumeroAssento} lugar={lugar} setLugar={setLugar} />
                ))}
            </CaixaAssentos>

            <StatusAssentos>
                <div className="status">
                    <div data-identifier="seat-selected-subtitle" className="selecionado"></div>
                    <p>Selecionado</p>
                </div>

                <div data-identifier="seat-available-subtitle" className="status">
                    <div className="disponivel"></div>
                    <p>Disponível</p>
                </div>

                <div data-identifier="seat-unavailable-subtitle" className="status">
                    <div className="indisponivel"></div>
                    <p>indisponivel</p>
                </div>
            </StatusAssentos>

            <InfoCliente filme={filme} hora={hora} dia={dia.weekday} data={dia.date} numeroAssento={numeroAssento} lugar={lugar} />

            <Rodape filme={filme} dia={dia.weekday} data={dia.date} />
        </>
    )
}

const TextoAssentos = styled.div`
    width: 100%;
    min-width: 375px;
    margin-top: 110px;
    text-align: center;
    
    h1 {
    height: 40px;
    font-size: 20px;
    }
`

const CaixaAssentos = styled.div`
    margin: 0 auto;
    width: 70%;
    min-width: 375px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
    padding: 0px 10px;
`

const StatusAssentos = styled.div`
    width: 10%;
    min-width: 375px;
    font-size: 12px;
    padding: 0px 40px;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .status {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .selecionado {
        width: 25px;
        height: 25px;
        background-color: #1AAE9E;
        border: 1px solid #0E7D71;
        border-radius: 50px;
        margin-bottom: 10px;
    }

    .disponivel {
        width: 25px;
        height: 25px;
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
        border-radius: 50px;
        margin-bottom: 10px;
    }

    .indisponivel {
        width: 25px;
        height: 25px;
        background-color: #FBE192;
        border: 1px solid #F7C52B;
        border-radius: 50px;
        margin-bottom: 10px;
    }
`

const Carregando = styled.div`
    width: 100%;
    margin-top: 120px;
    display: flex;
    justify-content: center;

    img {
        width: 60px;
    }
`