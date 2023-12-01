import React, { useState, useEffect } from "react";
import IconVoltarCheckout from "./icone_voltar_tela_checkout.png";
import InfoClienteCheckout from "./InfoClienteCheckout/InfoClienteCheckout";
import "./TelaCheckout.css";
import api from "../../api.js";
import Swal from "sweetalert2";

const formTemplate = {
  nome: "Sem check-outs",
  telefone: " ",
  andar: " ",
  vaga: " ",
  valor: " "
};

function TelaCheckout(props) {
  var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");
  const [hideDiv, setHideDiv] = useState(true);

  const [checkouts, setCheckouts] = useState([]);

  useEffect(() => {
    setHideDiv(false);
    console.log("useEffect");
  }, []);

  const hideDivOnClick = () => {
    setHideDiv(true);
    setTimeout(() => {
      props.onClose();
    }, 500);
    console.log("hideDiv");
  };

  useEffect(() => {
    pegaCheckouts()
  }, []);

  function pegaCheckouts() {
    api
      .get(`/historicos/pegar-checkouts?id=${sessionIdEstacionamento}`)
      .then((response) => {
        console.log(response);
        setCheckouts(response.data)
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function fazCheckout() {
    Swal.fire({
      title: "Fazendo checkout",
      timerProgressBar: true,
      customClass: {
        container: 'custom-swal-container',
      },
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        const swalContainer = document.querySelector('.custom-swal-container');
        if (swalContainer) {
          swalContainer.style.zIndex = '10000';
        }
      },
    });

    api
      .post(`/historicos/checkout?idVeiculo=${checkouts[0].fkVeiculo}`)
      .then((response) => {
        Swal.close();
        Swal.fire({
          title: "Estacionamento atualizado!",
          icon: "success",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
          customClass: {
            container: 'custom-swal-container',
          },
          didOpen: () => {
            const swalContainer = document.querySelector('.custom-swal-container');
            if (swalContainer) {
              swalContainer.style.zIndex = '10000';
            }
          }
        })
        pegaCheckouts()
      })
      .catch((erro) => {
        Swal.close();
        console.log(erro);
      });
  }

  return (
    <>
      <div className="div-desfoque"></div>
      <div className={`tela-checkout ${hideDiv ? "sumir" : "aparecer"}`}>
        <div className="div-checkout-pai">
          <div className="icones-tela-checkout">
            <button
              onClick={hideDivOnClick}
              className="botao-icon-voltar-chekcout"
            >
              <img
                className="icon-voltar-chekcout"
                src={IconVoltarCheckout}
                alt="Voltar"
              />
            </button>
            <img
              className="icon-logo-chekcout"
              src="/imgs/Group 39.png"
              alt="Logo"
            />
          </div>
          <div className="titulo-checkout">
            <h1 className="title-checkout">Check-out</h1>
          </div>
          <div className="container-itens-checkout-pai">
            <div className="container-itens-checkout-filho">
              <h2 className="elements-checkout">Cliente</h2>
              <h2 className="elements-checkout">Telefone</h2>
              <h2 className="elements-checkout">Andar</h2>
              <h2 className="elements-checkout">Vaga</h2>
              <h2 className="elements-checkout">Valor</h2>
            </div>
          </div>
          <div className="container-conteudo-checkout-pai">
            <div className="container-conteudo-checkout-filho">
              {checkouts.map((checkout, i) => (
                <React.Fragment key={i}>
                  <InfoClienteCheckout
                    nome={checkout.nome}
                    telefone={checkout.telefone}
                    andar={checkout.andar}
                    vaga={checkout.vaga}
                    valor={checkout.valor}
                  />
                </React.Fragment>
              ))}
            </div>
            <div className="container-botao-checkout">
            {checkouts.length > 0 && (
              <button className="botao-checkout-tela-checkout" onClick={() => fazCheckout()}>
                Check-out
              </button>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TelaCheckout;
