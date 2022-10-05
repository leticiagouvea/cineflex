import styled from "styled-components";

export default function Filme({img}) {

    return (
        <CaixaFilme>
            <img src={img.posterURL} alt="" />
        </CaixaFilme>
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
    transition-duration: 0.5s;
    :hover {
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