import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Filme from "./Filme";

export default function Filmes() {
    const [cartaz, setCartaz] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(URL);
    
        promise.then((resposta) => {
            console.log(resposta.data)
            setCartaz(resposta.data)
        })
    
        promise.catch((erro) => {
            console.log(erro.response.data)
        })
    }, [])
    
    return (
        <>
            <TextoFilmes>
                <h1>Selecione o filme:</h1>
            </TextoFilmes>

            <ConteudoFilmes>
                {cartaz.map((img) => <Filme key={img.id} img={img} />)}
            </ConteudoFilmes>
        </>
    )
}

const TextoFilmes = styled.div`
    width: 100%;
    min-width: 375px;
    margin-top: 100px;
    text-align: center;
    
    h1 {
    height: 40px;
    font-size: 24px;
    color: #293845;
    }
`

const ConteudoFilmes = styled.div`
    margin: 0 auto;
    width: 80%;
    min-width: 375px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 70px;
`