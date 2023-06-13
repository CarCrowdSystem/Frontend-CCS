import React, { useState, useEffect } from "react";
import "../valores/Valores.css";
import NavSideBar from "../../components/NavSideBar/index";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout";
import Botao from "../../components/Botoes/BotaoEnviar/index";
import api from "../../api.js";

import Swal from "sweetalert2";
// import { Container } from './styles';

var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");

const formTemplate = {
  primeiraHora: "",
  demaisHoras: "",
  diaria: "",
};

function Valores() {
  const [data, setData] = useState(formTemplate);
  const [valor, setValor] = useState([]);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  useEffect(() => {
    api
      .get(`/valores?id=${sessionIdEstacionamento}`)
      .then((response) => {
        console.log(response.data);
        // setValor(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

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
      .post(`/valores?idEstacionamento=${sessionIdEstacionamento}`, postValores)
      .then((response) => {
        Swal.fire({
          title: 'Valores atualizados!',
          icon: 'success',
          confirmButtonColor: '#ff8000',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok'
        })
        console.log(response);
      })
      .catch((erro) => {
        Swal.fire({
          title: 'Erro ao atualizar os valores!',
          text: 'Tente novamente mais tarde!',
          icon: 'error',
          confirmButtonColor: '#ff8000',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok'
        })
        console.log("Error");
        console.log(erro);    
      });

    console.log(postValores);
  }

  // function testeAlert(){
  //   Swal.fire({
  //     title: 'Valores atualizados!',
  //     icon: 'success',
  //     confirmButtonColor: '#ff8000',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Ok'
  //   })
  // }

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
              placeholder={"R$ "+ valores.primeiraHora}
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
              placeholder={"R$ "+ data.demaisHoras}
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
              placeholder={"R$ "+ data.diaria}
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
