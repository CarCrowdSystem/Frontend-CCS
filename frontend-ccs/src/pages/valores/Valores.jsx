import React, { useState } from "react";
import "../valores/Valores.css";
import NavSideBar from "../../components/NavSideBar/index";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout";
import Botao from "../../components/Botoes/BotaoEnviar/index";
import api from "../../api.js";
// import { Container } from './styles';

const formTemplate = {
  primeiraHora: "",
  demaisHoras: "",
  diaria: "",
};

function Valores() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  function atualizarValores() {
    const postValores = {
      primeiraHora: data.primeiraHora,
      horaAdicional: data.demaisHoras,
      diaria: data.diaria,
    };

    api
      // Teste MockAPI
      // .post(`/teste`)

      // "Funcional" backEnd ccs
      .post(`/valor?idEstacionamento=${41}`, postValores)
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.log("Error");
        console.log(erro);    
      });

    console.log(postValores);
  }

  return (
    <>
      <div className="fundoValores">
        <NavSideBar />
        <div className="espaco-icone">
          <BotaoCheckout />
        </div>
        <div className="contValores">
          <h1 className="titleValores">Alteração de valores</h1>
          <form className="form-valores">
            <label>Primeira hora:</label>
            <input
              className="campo-texto"
              type="number"
              name="primeiraHora"
              placeholder={"R$ "}
              required
              value={data.primeiraHora || ""}
              onChange={(e) =>
                updateFieldHandler("primeiraHora", e.target.value)
              }
            />

            <label>Demais horas:</label>
            <input
              className="campo-texto"
              type="number"
              name="demaisHoras"
              placeholder={"R$ "}
              required
              value={data.demaisHoras || ""}
              onChange={(e) =>
                updateFieldHandler("demaisHoras", e.target.value)
              }
            />
            <label>Diaria:</label>
            <input
              className="campo-texto"
              type="number"
              name="diaria"
              placeholder={"R$ "}
              required
              value={data.diaria || ""}
              onChange={(e) => updateFieldHandler("diaria", e.target.value)}
            />
          </form>
          <button
            className="button-salvar-valores"
            onClick={() => atualizarValores()}
          >
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default Valores;
