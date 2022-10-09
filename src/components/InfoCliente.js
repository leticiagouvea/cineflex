import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function InfoCliente({filme, hora, data, numeroAssento, lugar}) {
    const filmeTitulo = filme.title;
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");

    const navigate = useNavigate();

    function preencherFormulario(e) {
        e.preventDefault()

        if (numeroAssento.length < 1) {
            alert("Selecione um assento para finalizar o pedido");
        } else { 
            const body = {
                ids: numeroAssento,
                name: nome,
                cpf
            }

            const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', body);

            promise.then(() => {
                navigate("/sucesso", {state:{nome, cpf, filmeTitulo, hora, data, lugar}})
                resetarFormulario()
            })

            promise.catch(() => {
                alert("Algo deu errado. Tente novamente.")
            })
        }

        function resetarFormulario() {
            setNome("")
            setCPF("")
        }
    }

    return (
     <InserirInfos>
        <form onSubmit={preencherFormulario}>
           <div className="campo-input">
                <p>Nome do comprador:</p>

                <input
                placeholder="Digite seu nome..."
                type="text"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                required
                />
           </div>

           <div className="campo-input">
                <p>CPF do comprador:</p>

                <input 
                placeholder="Digite seu CPF..."
                type="text"
                onChange={(e) => setCPF(e.target.value)}
                value={cpf}
                required
                />
           </div>
    
            <div className="reservar-assentos">
                <button>Reservar assento(s)</button>
            </div>
        </form>
     </InserirInfos>
    )
}

const InserirInfos = styled.div`
    min-width: 375px;
    margin: 0 auto;
    margin-bottom: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    p {
        height: 30px;
    }

    .campo-input {
        margin-bottom: 30px;
    }
    
    input {
        width: 320px;
        height: 50px;
        border: 1px solid #D4D4D4;
        padding: 0px 10px;
        border-radius: 3px;
        outline: none;
    }

    input::placeholder {
        font-style: italic;
        color: #AFAFAF;
        font-size: 16px;
    }

    .reservar-assentos {
        width: 320px;
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
        }
    }
`