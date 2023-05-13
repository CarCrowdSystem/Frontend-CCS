import React from "react";
import Homepage from "./pages/home";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Estacionamento from "./pages/estacionamento/Estacionamento.jsx";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/estacionamento" element={<Estacionamento />}/>
                {/* <Route path="*" element={<NotFound />}/> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;