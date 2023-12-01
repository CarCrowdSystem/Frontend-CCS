import React, { useState, useEffect } from "react";
import "../valores/Valores.css";
import NavSideBar from "../../components/NavSideBar/index";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout";
import Botao from "../../components/Botoes/BotaoEnviar/index";
import api from "../../api.js";

import Swal from "sweetalert2";
// import { Container } from './styles';

var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");
var sessionDiaria = sessionStorage.getItem("VALOR_DIARIA");
var sessionPrimeiraHora = sessionStorage.getItem("VALOR_PRIMEIRA_HORA");
var sessionDemaisHoras = sessionStorage.getItem("VALOR_DEMAIS_HORAS");

const formTemplate = {
  primeiraHora: "",
  demaisHoras: "",
  diaria: "",
};

var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");

function Valores() {
  const [data, setData] = useState(formTemplate);
  const [valor, setValor] = useState([]);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const atualizarValores = async () => {
    try {
      const sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");
      const postValores = {
        primeiraHora: data.primeiraHora,
        horaAdicional: data.demaisHoras,
        diaria: data.diaria,
      };

      await api.post(`/valores?idEstacionamento=${sessionIdEstacionamento}`, postValores);

      Swal.fire({
        title: "Valores atualizados!",
        icon: "success",
        confirmButtonColor: "#ff8000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      }).then(() => {
        fetchData();
      });
    } catch (error) {
      console.error("Erro ao atualizar os valores:", error);
      Swal.fire({
        title: "Erro ao atualizar os valores!",
        text: "Tente novamente mais tarde!",
        icon: "error",
        confirmButtonColor: "#ff8000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      });
    }
  };

  const fetchData = async () => {
    try {
      const sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");

      const response = await api.get(`/valores?id=${sessionIdEstacionamento}`);
      const { primeiraHora, horaAdicional, diaria } = response.data;

      sessionStorage.setItem("VALOR_PRIMEIRA_HORA", primeiraHora);
      sessionStorage.setItem("VALOR_DEMAIS_HORAS", horaAdicional);
      sessionStorage.setItem("VALOR_DIARIA", diaria);

      setData({
        primeiraHora: primeiraHora,
        demaisHoras: horaAdicional,
        diaria: diaria,
      });
    } catch (error) {
      console.error("Erro ao buscar dados de valores:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <label>Primeira hora</label>
            <input
              className="campo-texto"
              type="number"
              name="primeiraHora"
              placeholder={"R$ " + sessionPrimeiraHora}
              required
              value={data.primeiraHora || ""}
              onChange={(e) =>
                updateFieldHandler("primeiraHora", e.target.value)
              }
            />

            <label>Demais horas</label>
            <input
              className="campo-texto"
              type="number"
              name="demaisHoras"
              placeholder={"R$ " + sessionDemaisHoras}
              required
              value={data.demaisHoras || ""}
              onChange={(e) =>
                updateFieldHandler("demaisHoras", e.target.value)
              }
            />
            <label>Diária</label>
            <input
              className="campo-texto"
              type="number"
              name="diaria"
              placeholder={"R$ " + sessionDiaria}
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
          {/* <button onClick={() => testeAlert()}>teste</button> */}
        </div>
      </div>
    </>
  );
}

export default Valores;
