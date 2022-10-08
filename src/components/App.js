import GlobalStyle from "../assets/style/GlobalStyle";
import Topo from "./Topo";
import Filmes from "./Filmes";
import Sessoes from "./Sessoes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Topo />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:filmeId" element={<Sessoes />} />
            </Routes>
        </BrowserRouter>
    )
}