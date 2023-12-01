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
import CheckoutCliente from "./pages/dashboard/Componentes/CheckoutCliente";

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

const isSessionStorageEmpty = !sessionStorage.getItem("ID_ESTACIONAMENTO");

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="*" element={<NotFound />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/estacionamento" element={isSessionStorageEmpty ? <Navigate to="/login" replace /> : <Estacionamento />} />
                <Route path="/dashboard" element={isSessionStorageEmpty ? <Navigate to="/login" replace /> : <Dashboard />} />
                <Route path="/checkin" element={<Checkin />} />
                <Route path="/valores" element={isSessionStorageEmpty ? <Navigate to="/login" replace /> : <Valores />} />
                <Route path="/historico" element={isSessionStorageEmpty ? <Navigate to="/login" replace /> : <Historico />}/>
                <Route path="/funcionarios" element={isSessionStorageEmpty ? <Navigate to="/login" replace /> : <Funcionarios />} />
                <Route path="/checkout-cliente" element={<CheckoutCliente />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;
