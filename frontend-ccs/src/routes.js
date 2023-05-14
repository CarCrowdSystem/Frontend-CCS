import React from "react";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Estacionamento from "./pages/estacionamento/Estacionamento";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="*" element={<NotFound />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/estacionamento" element={<Estacionamento />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;
