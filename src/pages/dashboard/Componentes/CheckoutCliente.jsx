import React from "react";
import "./checkoutCliente.css";
import img from "./logo.png";
import api from "./../../../api.js";
import Swal from "sweetalert2";

import { useState } from "react";
// import { Container } from './styles';

var formPlaca = {
  placa: ""
};

function CheckoutCliente() {
  const [data, setData] = useState(formPlaca);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  function executarCheckcout() {
    console.log(data.placa)
    api
      .post(`/historicos/processar?placa=${data.placa}`)
      .then((response) => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          text: 'Check-out realizado!',
        }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
          });
      })
      .catch((erro) => {
        console.log(erro);
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Erro ao realizar check-out!'
        })
      });
  }

  return (
    <>
      <div className="container-main-mobile">
        <div className="container-contents">
          <div className="header-mobile">
            <img className="imagem-css-mobile" src={img} alt="logo" />
          </div>
          <div className="body-mobile">
            <h3>Digite sua placa para confirmar o check-out: </h3>
            <input
              className="input-checkout-mobile"
              placeholder="CCS-9999"
              type="text"
              maxLength={7}
              minLength={7}
              name="placa"
              value={data.placa || ""}
              onChange={(e) => updateFieldHandler("placa", e.target.value)}
            />
            <button
              onClick={() => executarCheckcout()}
              className="button-checkout-mobile"
            >
              Fazer check-out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCliente;
