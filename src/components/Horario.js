import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Horario({nome, id, diaSemana, setData, setSemana}) {
    return (
        <Link to={`/assentos/${id}`}>
            <CaixaHorario data-identifier="hour-minute-btn"
                onClick={() => {
                setSemana(diaSemana)
                setData(nome)
            }}>
                <button>{nome}</button>
            </CaixaHorario>
        </Link>
    )
}

const CaixaHorario = styled.div`
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