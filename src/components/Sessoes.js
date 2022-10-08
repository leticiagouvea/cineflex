import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Rodape from "./Rodape";

export default function Sessoes() {
    const { filmeId } = useParams();
    const [filme, setFilme] = useState({});
    const [sessao, setSessao] = useState([]);

    console.log(filmeId, sessao)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);

        promise.then((resposta) => {
            console.log(resposta.data.days)
            setFilme(resposta.data)
            setSessao(resposta.data.days)
        })

        promise.catch((erro) => {
            console.log(erro.resposta.data)
        })
    }, [filmeId])

    return (
        <>
            <ConteudoSessoes>
                <h1>Selecione o horário:</h1>

                <SessaoInfos>
                    {sessao.map((i) =>
                    <div key={i.id}>
                        <p>{i.date} - {i.weekday}</p>
                        <Horario>
                            <button key={i.showtimes[0].id}>{i.showtimes[0].name}</button>
                            <button key={i.showtimes[1].id}>{i.showtimes[1].name}</button>
                        </Horario>
                    </div> 
                    )}
                </SessaoInfos>
            </ConteudoSessoes>

            <Rodape filme={filme} />
        </>
    )
}

const ConteudoSessoes = styled.div`
    width: 40%;
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

const Horario = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;

    button {
    margin: 15px 10px 30px 0px;
    border: none;
    width: 72px;
    height: 32px;
    border-radius: 3px;
    background-color: #E8833A;
    box-shadow: 1px 1px 2px #696969;
    color: #FFFFFF;
    font-weight: 700;
    cursor: pointer;
    }
`