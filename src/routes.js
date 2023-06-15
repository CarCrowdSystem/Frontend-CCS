import React from "react";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Estacionamento from "./pages/estacionamento/Estacionamento";
import Dashboard from "./pages/dashboard/Dashboard";
import Checkin from "./pages/checkin/Checkin";
import Valores from "./pages/valores/Valores";
import Historico from "./pages/historico/Historico";
import Funcionarios from "./pages/funcionarios/Funcionarios";
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
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/checkin" element={<Checkin />} />
                <Route path="/valores" element={<Valores />} />
                <Route path="/historico" element={<Historico />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;
