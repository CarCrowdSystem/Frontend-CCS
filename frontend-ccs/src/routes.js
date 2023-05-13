import React from "react";
import Homepage from "./pages/home";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
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
                {/* <Route path="*" element={<NotFound />}/> */}
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;
