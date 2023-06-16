import React, { useEffect } from "react";
import "./Historico.css";
import BotaoCheckout from "./../../components/Botoes/BotaoCheckout";
import IconeDownloadCsv from "./icon-download-csv.png";
import InfoHistorico from "./InfoHistorico/InfoHistorico";
import NavSideBar from "../../components/NavSideBar/index";
import api from "../../api.js";
import DownloadLink from "./dowloadCsv/DownloadLink";

import { useState } from "react";

var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");

function Historico() {
  const [historicos, setHistoricos] = useState([]);

  useEffect(() => {
    api
      .get(`/historicos/dados?id=${sessionIdEstacionamento}`)
      .then((response) => {
        console.log(response.data);
        setHistoricos(response.data)
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <NavSideBar />
      <div className="div-pai-historico">
        <div className="espaco-icone">
          <BotaoCheckout />
        </div>
        <div className="container-historico">
          <div className="div-filho-historico">
            <div className="div-title-historico">
              <h1 className="titulo-historico">Histórico</h1>
            </div>
            <div className="div-button-baixar-csv">
              <div className="div-csv-download">
                <DownloadLink />
              </div>
            </div>
            <div className="container-itens-historico">
              <h2 className="elements-checkout">Cliente</h2>
              <h2 className="elements-checkout">Modelo</h2>
              <h2 className="elements-checkout">Placa</h2>
              <h2 className="elements-checkout">Andar</h2>
              <h2 className="elements-checkout">Vaga</h2>
              <h2 className="elements-checkout">Telefone</h2>
              <h2 className="elements-checkout">Data</h2>
              <h2 className="elements-checkout">Hora</h2>
              <h2 className="elements-checkout">Status</h2>
              <h2 className="elements-checkout">Valor</h2>
            </div>
            <div className="div-valores-historico">
                {historicos.map((historico, i) => (
                    <React.Fragment key={i}>
                        <InfoHistorico
                            nomeCliente={historico.cliente}
                            modeloCarro={historico.modelo}
                            placa={historico.placa}
                            andar={historico.andar}
                            vaga={historico.vaga}
                            telefone={historico.telefone}
                            data={historico.data}
                            hora={historico.hora}
                            status={historico.status}
                            valor={historico.valor}
                        />
                    </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Historico;
