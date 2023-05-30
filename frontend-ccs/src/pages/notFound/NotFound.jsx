import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css';

function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div className="fundoNF">
                <h1 className='titulo1NF'>Página não encontrada!</h1>
                <h3 className='titulo2NF'><u>Erro 404</u></h3>
                <button className="btnNF" onClick={() => navigate(-1)}>Voltar</button>
            </div>
        </>
    );
}

export default NotFound;