import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Filme({ img, id }) {

    return (
        <Link to={`/sessoes/${id}`}>
            <CaixaFilme>
                <Efeito></Efeito>
                <img src={img} alt="" />
            </CaixaFilme>
        </Link>
    )
}

const CaixaFilme = styled.div`
    width: 148px;
    height: 212px;
    border-radius: 3px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px;
    cursor: pointer;
    transition-duration: 0.3s;
    position: relative;
    &:hover {
        background-color: #E8833A;
        box-shadow: 0px 2px 4px 2px #A9A9A9;
        img {
            width: 100%;
            height: 100%;
        }
    }

    img {
        width: 132px;
        height: 196px;
        border-radius: 3px;
        transition-duration: 0.5s;
    }
`

const Efeito = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #E8833A;
    border-radius: 3px;
    opacity: 0;
    transition-duration: 0.3s;
    &:hover {
        opacity: 0.3;
    }
`