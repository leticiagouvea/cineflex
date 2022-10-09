import { useState } from "react";
import styled from "styled-components";

export default function Assento({id, nome, disponivel, numeroAssento, setNumeroAssento, lugar, setLugar, setAssentoDisponivel}) {
    const [selecionado, setSelecionado] = useState(false);

    return (
        <>
            {disponivel ? (
                <BotaoAssento selecionado={selecionado} onClick={() => {
                    if (!selecionado) {
                        setSelecionado(!selecionado)
                        const novoNumeroAssento = [...numeroAssento, Number(id)];
                        setNumeroAssento(novoNumeroAssento)
                        const novoLugar = [...lugar, nome];
                        setLugar(novoLugar)
                        setAssentoDisponivel(true)
                    } else {
                        setSelecionado(!selecionado)
                        const novoNumeroAssento = numeroAssento.slice(0, numeroAssento.length - 1);
                        setNumeroAssento(novoNumeroAssento)
                        const novoLugar = lugar.slice(0, lugar.length - 1);
                        setLugar(novoLugar)
                        setAssentoDisponivel(false)
                    }
                }}>
                
                <p>{nome}</p>
                
                </BotaoAssento>
            ) : (
                <BotaoIndisponivel onClick={() => {
                    alert('Este assento não está disponível')
                }}>
                    <p>{nome}</p>
                </BotaoIndisponivel>
            )}
        </>
    )
}

const BotaoAssento = styled.button`
    width: 26px;
    height: 26px;
    background-color: ${props => props.selecionado ? ("#1AAE9E") : ("#C3CFD9")};
    border: ${props => props.selecionado ? ("1px solid #0E7D71") : ("1px solid #808F9D")};
    border-radius: 50px;
    margin: 10px 5px 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    cursor: pointer;
`

const BotaoIndisponivel = styled.button`
    width: 26px;
    height: 26px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 50px;
    margin: 10px 5px 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    cursor: pointer;
`