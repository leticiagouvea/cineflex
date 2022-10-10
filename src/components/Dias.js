import styled from "styled-components";
import Horario from "./Horario";

export default function Dias({ data, horarios, diaSemana, setData, setSemana }) {
    return (
        <>
            <p data-identifier="session-date">{diaSemana} - {data}</p>

            <CaixaHoras>
                {horarios.map((hora, index) => (
                    <Horario key={index} nome={hora.name} id={hora.id} diaSemana={diaSemana} setData={setData} setSemana={setSemana} />
                ))}
            </CaixaHoras>
        </>
    )
}
const CaixaHoras = styled.div`
    display: flex;
`