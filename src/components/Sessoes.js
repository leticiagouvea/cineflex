import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Rodape from "./Rodape";
import Dias from "./Dias";

export default function Sessoes() {
    const { filmeId } = useParams();
    const [filme, setFilme] = useState([]);
    const [sessao, setSessao] = useState([]);
    const [data, setData] = useState("");
    const [semana, setSemana] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);

        promise.then((resposta) => {
            setFilme(resposta.data)
            setSessao(resposta.data.days)
        })

        promise.catch((erro) => {
            alert("Algo deu errado. Tente novamente.")
        })
    }, [filmeId])

    return (
        <>
            <ConteudoSessoes>
                <h1>Selecione o horário:</h1>

                <SessaoInfos>
                    {sessao.map((info, index) => (
                        <Dias key={index} data={info.date} horarios={info.showtimes} diaSemana={info.weekday} setData={setData} setSemana={setSemana} />
                    )
                    )}
                </SessaoInfos>
            </ConteudoSessoes>

            <Rodape filme={filme} data={data} semana={semana} />
        </>
    )
}

const ConteudoSessoes = styled.div`
    width: 100%;
    min-width: 375px;
    margin: 0 auto;
    margin-bottom: 130px;
    margin-top: 100px;

    h1 {
    height: 50px;
    text-align: center;
    font-size: 24px;
    }
`

const SessaoInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 0px 30px;
    margin-bottom: 35px;
`