import { Link } from "react-router-dom";
import styled from "styled-components";
import iconeFilme from "../assets/img/filmeicone.png";

export default function Topo() {
    return (
        <Link to="/">
            <CaixaTopo>
                <h1>CINEFLEX</h1>
                <img src={iconeFilme} alt="icone filme" />
            </CaixaTopo>
        </Link>
    )
}

const CaixaTopo = styled.div`
    width: 100%;
    min-width: 375px;
    height: 70px;
    font-weight: 700;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;
    box-shadow: 0px 1px 6px #696969;
    z-index: 2;

    h1 {
    font-size: 40px;
    color: #E8833A;
    margin-right: 10px;
    text-shadow: 2px 1px 1px #696969;
    }

    img {
        width: 30px;
    }
`