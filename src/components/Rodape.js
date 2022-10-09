import styled from "styled-components";

export default function Rodape({filme, data, dia}) {
    return (
        <CaixaRodape>
            <img src={filme.posterURL} alt="" />
            <InfosRodape>
                <p className="titulo-filme">{filme.title}</p>
                {dia ? (<p className="sessao-data">{dia} - {data}</p>) : ("")}
            </InfosRodape>
        </CaixaRodape>
    )
}

const CaixaRodape = styled.div`
    width: 100%;
    min-width: 375px;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0px 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #C3CFD9;
    border-top: 2px solid #9EADBA;

    img {
        width: 48px;
        height: 72px;
        border: 5px solid #FFFFFF;
        box-shadow: 0px 2px 4px 2px #C3CFD9;
        border-radius: 3px;
        margin-right: 20px;
    }
`

const InfosRodape = styled.div`
    width: 300px;
    line-height: 1.5;

    .titulo-filme {
        font-weight: 500;
        font-size: 18px;
    }

    .sessao-data {
        font-size: 15px;
    }
`