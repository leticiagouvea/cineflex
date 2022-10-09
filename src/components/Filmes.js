import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Filme from "./Filme";
import iconeCarregando from "../assets/img/carregando.gif";

export default function Filmes() {
    const [cartaz, setCartaz] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(URL);
    
        promise.then((resposta) => {
            setCartaz(resposta.data)
        })
    
        promise.catch(() => {
            alert("Verifique a conexão da sua internet")
        })
    }, [])

    if (cartaz.length === 0) {
        return (
        <Carregando>
            <img src={iconeCarregando} alt="carregando..." />
        </Carregando>
        )
    }
    
    return (
        <>
            <TextoFilmes>
                <h1>Selecione o filme:</h1>
            </TextoFilmes>

            <ConteudoFilmes>
                {cartaz.map((img, index) => <Filme key={index} id={img.id} img={img.posterURL} />)}
            </ConteudoFilmes>
        </>
    )
}

const TextoFilmes = styled.div`
    width: 100%;
    min-width: 375px;
    margin-top: 110px;
    text-align: center;
    
    h1 {
    height: 40px;
    font-size: 24px;
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

const Carregando = styled.div`
    width: 100%;
    margin-top: 120px;
    display: flex;
    justify-content: center;

    img {
        width: 60px;
    }
`