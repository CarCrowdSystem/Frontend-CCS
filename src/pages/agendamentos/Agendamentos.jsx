import React from "react";
import "./Agendamentos.css"
import NavSideBar from "../../components/NavSideBar";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout";

function Agendamentos() {
    return(
        <>
            <NavSideBar />
            <div className="div-pai-agendamentos">
                <div className="espaco-icone">
                    <BotaoCheckout />
                </div>
                <div className="container-agendamentos">
                    <div className="div-filho-agendamentos">
                        <div className="div-title-agendamentos">
                            <h1 className="titulo-agendamentos">Agendamentos</h1>
                        </div>
                        <div className="container-itens-agendamentos">
                            <h2 className="elements-checkout">Cliente</h2>
                            <h2 className="elements-checkout">Modelo</h2>
                            <h2 className="elements-checkout">Andar</h2>
                            <h2 className="elements-checkout">Vaga</h2>
                            <h2 className="elements-checkout">Telefone</h2>
                            <h2 className="elements-checkout">Data</h2>
                            <h2 className="elements-checkout">Horário</h2>
                        </div>
                        <div className="div-valores-agendamentos">
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Agendamentos;