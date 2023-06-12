import React, { useEffect } from "react";
import "./Estacionamento.css";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout/index";
import NavSideBar from "../../components/NavSideBar/index";
import api from "../../api";
import Swal from "sweetalert2";

import { useState } from "react";

//import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");

const formTemplate = {
  nomeEmpresa: "",
  cepEmpresa: "",
  enderecoRuaEmpresa: "",
  numeroEmpresa: "",
  telefoneEmpresa: "",
};

var dadosEstacionamento = {};
var logradouro = {};

function Estacionamento() {
  //const navigate = useNavigate();

  const [data, setData] = useState(formTemplate);
  const [estacionamentos, setEstacionamento] = useState({});
  const [estacionamento2, setEstacionamento2] = useState([]);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  useEffect(() => {
    updateList();
  }, []);

  function updateList() {
    api
      .get(`/estacionamentos/${sessionIdEstacionamento}`)
      .then((response) => {
        setEstacionamento(response.data);
        dadosEstacionamento = response.data;
        console.log("Variavel Global", dadosEstacionamento);
        setTimeout(() => pegarEndereco(response.data.cep), 1000);
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function pegarEndereco(endereco) {
    console.log("Estou aq", endereco);
    api
      .get(`/estacionamentos/buscar/${endereco}`)
      .then((response) => {
        logradouro = response.data;
        console.log("Variavel global", logradouro);
        setEstacionamento2(response.data);
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function atualizarEmpresa() {
    const putEmpresa = {
      nomeEmpresa: data.nomeEmpresa,
      cepEmpresa: data.cepEmpresa,
      cnpjEmpresa: "funcionaPoDeus",
      enderecoEmpresa: data.numeroEmpresa,
      telefoneEmpresa: data.telefoneEmpresa,
    };

    api
      // Teste MockAPI
      // .post(`/teste`)

      // "Funcional" backEnd ccs
      .put(`/estacionamentos/${sessionIdEstacionamento}`, putEmpresa)
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Estacionamento atualizado!",
          icon: "success",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
        });
        updateList();
      })
      .catch((erro) => {
        console.log("Error");
        console.log(erro);
      });

    console.log(putEmpresa);
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
              placeholder={dadosEstacionamento.nomeEstacionamento}
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
              placeholder={dadosEstacionamento.cep}
              required
              value={data.cepEmpresa || ""}
              onChange={(e) => updateFieldHandler("cepEmpresa", e.target.value)}
            />

            <label>Rua: </label>
            <input
              className="campo-texto-estacionamento"
              type="text"
              name="enderecoRuaEmpresa"
              // placeholder={logradouro.logradouro}
              disabled={true}
              required
              value={logradouro.logradouro}
              onChange={(e) =>
                updateFieldHandler("enderecoRuaEmpresa", e.target.value)
              }
            />

            <label>Número</label>
            <input
              className="campo-texto-estacionamento"
              type="text"
              name="numeroEmpresa"
              placeholder={dadosEstacionamento.numeroEndereco}
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
              placeholder={dadosEstacionamento.telefone}
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
          {/* <button onClick={() => testeAlert()}>teste</button> */}
        </div>
      </div>
    </>
  );
}

export default Estacionamento;
