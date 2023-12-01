import React, { useEffect } from "react";
import "./Estacionamento.css";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout/index";
import NavSideBar from "../../components/NavSideBar/index";
import api from "../../api";
import Swal from "sweetalert2";

import { useState } from "react";
import InputMask, { ReactInputMask } from 'react-input-mask';

var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");

const formTemplate = {
  nomeEmpresa: "",
  cepEmpresa: "",
  enderecoRuaEmpresa: "",
  numeroEmpresa: "",
  telefoneEmpresa: "",
};

const removeNonNumericChars = (value) => {
  return value.replace(/\D/g, '');
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
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });;
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
        <div className="container-foto-estacionamento">
    
        </div>
        <div className="div-form-estacionamento">
          <form className="form-estacionamento">
            <label>Nome</label>
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

            <label>CEP</label>
            <InputMask
              className="campo-texto-estacionamento"
              type="text"
              name="cepEmpresa"
              mask="99999-999" // Máscara de CEP
              placeholder={dadosEstacionamento.cep}
              required
              value={data.cepEmpresa || ""}
              onChange={(e) => updateFieldHandler("cepEmpresa", removeNonNumericChars(e.target.value))}
            />

            <label>Rua</label>
            <input
              className="campo-texto-estacionamento"
              type="text"
              name="enderecoRuaEmpresa"
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
            <InputMask
              className="campo-texto-estacionamento"
              type="text"
              name="numeroCelular"
              mask="(99) 99999-9999" // Máscara para número de celular
              placeholder={dadosEstacionamento.telefone}
              required
              value={data.numeroCelular || ""}
              onChange={(e) => updateFieldHandler("numeroCelular", removeNonNumericChars(e.target.value))}
            />
          </form>
        </div>
        <div className="div-botao-alterar">
          <button className="btn-alterar-estacionamento" onClick={() => atualizarEmpresa()} type="submit">
            Alterar
          </button>
        </div>
      </div>
    </>
  );
}

export default Estacionamento;
