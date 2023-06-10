import React from "react";
import Form from "./Componentes/Formulario";
import "./Estacionamento.css";
import Botao from "../../components/Botoes/BotaoEnviar/index";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout/index";
import NavSideBar from "../../components/NavSideBar/index";
import CampoTexto from "./Componentes/CampoTexto";
import api from "../../api";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

const formTemplate = {
  nomeEmpresa: "",
  cepEmpresa: "",
  enderecoEmpresa: "",
  numeroEmpresa: "",
  telefoneEmpresa: "",
};

function Estacionamento() {
  const navigate = useNavigate();

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  function atualizarEmpresa() {
    const patchEmpresa = {
      nomeEmpresa: data.nomeEmpresa,
      cnpjEmpresa: data.cnpjEmpresa,
      cepEmpresa: data.cepEmpresa,
      enderecoEmpresa: data.enderecoEmpresa,
      telefoneEmpresa: data.telefoneEmpresa,
    };

    // api
    // Teste MockAPI
    // .post(`/teste`)

    // "Funcional" backEnd ccs
    // .post(`/distrubuicao` )
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((erro) => {
    //   console.log("Error")
    //   console.log(erro);
    // });
    
    console.log(patchEmpresa);
  }

  return (
    <>
      <NavSideBar />
      <div className="espaco-icone">
        <BotaoCheckout />
      </div>
      <div className="div-formulario">
        <div className="titulo-estacionamento">
          <h1 className="title-estacionamento">Estacionamento</h1>
        </div>
        <div className="div-form-estacionamento">
          <form className="form-estacionamento">
            <label>Nome:</label>
            <input
              id="name-field"
              className="campo-texto-estacionamento"
              type="text"
              name="nomeEmpresa"
              placeholder="Digite o nome da empresa"
              required
              value={data.nomeEmpresa || ""}
              onChange={(e) =>
                updateFieldHandler("nomeEmpresa", e.target.value)
              }
            />

            <label>CEP:</label>
            <input
              className="campo-texto-estacionamento"
              type="text"
              name="cepEmpresa"
              placeholder="00000-000"
              required
              value={data.cepEmpresa || ""}
              onChange={(e) => updateFieldHandler("cepEmpresa", e.target.value)}
            />

            <label>Rua: </label>
            <input
              className="campo-texto-estacionamento"
              type="text"
              name="enderecoEmpresa"
              placeholder="Digite o nome da rua"
              required
              value={data.enderecoEmpresa || ""}
              onChange={(e) =>
                updateFieldHandler("enderecoEmpresa", e.target.value)
              }
            />

            <label>Número</label>
            <input
              className="campo-texto-estacionamento"
              type="text"
              name="numeroEmpresa"
              placeholder="Digite o número de endereço da empresa"
              required
              value={data.numeroEmpresa || ""}
              onChange={(e) =>
                updateFieldHandler("numeroEmpresa", e.target.value)
              }
            />

            <label>Telefone</label>
            <input
              className="campo-texto-estacionamento"
              type="text"
              name="telefoneEmpresa"
              placeholder="(00)00000-0000"
              required
              value={data.telefoneEmpresa || ""}
              onChange={(e) =>
                updateFieldHandler("telefoneEmpresa", e.target.value)
              }
            />
          </form>
        </div>
        <div className="div-botao-alterar">
          <button onClick={() => atualizarEmpresa()} type="submit">
            Alterar
          </button>
        </div>
      </div>
    </>
  );
}

export default Estacionamento;
