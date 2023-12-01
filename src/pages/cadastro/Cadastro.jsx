import "../../components/Inputs/input.css";
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import LastStep from "./lastStep";
import "./Cadastro.css";
import Steps from "./Steps";
import api from "../../api.js";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

//Hooks
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const formTemplate = {
  nomeEmpresa: "",
  cnpjEmpresa: "",
  cepEmpresa: "",
  telefoneEmpresa: "",
  enderecoEmpresa: "",
  emailEmpresa: "",
  andar: "",
  quantidadeVagas: "",
  nomeUsuario: "",
  cpfUsuario: "",
  emailUsuario: "",
  senha: "",
  confirmaSenha: "",
};

function Cadastro() {
  const navigate = useNavigate();

  const [data, setData] = useState(formTemplate);

  const [listaVagas, setListaVagas] = useState([]);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  function retornoVagas(listaVagas) {
    setListaVagas(listaVagas);
  }

  const formCadastro = [
    <FirstStep data={data} updateFieldHandler={updateFieldHandler} />,
    <SecondStep
      vagas={listaVagas}
      updateFieldHandler={updateFieldHandler}
      funcaoRetornoVagas={retornoVagas}
    />,
    <LastStep data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } = useForm(formCadastro);

  var id_estacionamento = 0;

  function cadastrarEmpresa() {
    const postEmpresa = {
      nomeEmpresa: data.nomeEmpresa,
      cnpjEmpresa: data.cnpjEmpresa,
      cepEmpresa: data.cepEmpresa,
      enderecoEmpresa: data.enderecoEmpresa,
      telefoneEmpresa: data.telefoneEmpresa,
    };
    Swal.fire({
      title: "Verificando cadastro",
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
      .post(`/estacionamentos`, postEmpresa)
      .then((response) => {
        console.log(response)
        console.log(response.data.idEstacionamento);
        id_estacionamento = response.data.idEstacionamento;
      })
      .catch((erro) => {
        console.log("Error");
        console.log(erro);
      });
    console.log(postEmpresa);

    setTimeout(() => cadastrarEmpresa2(), 6000);
  }

  function cadastrarEmpresa2() {
    const postEmpresa2 = {
      vagas: listaVagas,
    };

    api
      .post(`/vagas/${id_estacionamento}`, postEmpresa2)
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.log("Error");
        console.log(erro);
      });
    console.log(postEmpresa2);
    setTimeout(() => cadastrarEmpresa3(), 7000);
  }

  function cadastrarEmpresa3() {
    const postEmpresa3 = {
      nomeUsuario: data.nomeUsuario,
      cpfUsuario: data.cpfUsuario,
      emailUsuario: data.emailUsuario,
      senha: data.senha,
      adm: true,
      idEstacionamento: id_estacionamento,
    };

    api
      .post(`/funcionarios`, postEmpresa3)
      .then((response) => {
        Swal.close();
        Swal.fire({
          title: 'Cadastro realizado com sucesso!',
          text: "Você será direcionado para o login!",
          icon: 'success',
          confirmButtonColor: '#ff8000',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login")
          }
        })

        console.log(response);
      })
      .catch((erro) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Houve um erro no cadastro!',
          confirmButtonColor: '#ff8000',
          text: 'Verifique se os campos estão corretamente preenchidos.'
        })
        console.log("Error");
        console.log(erro);
      })

    console.log(postEmpresa3);
  }

  return (
    <>
      <section className="view-cadastro-container">
        <div className="div-all-fields">
          <div className="div-arrow-back">
            <a href="/">
              <img className="arrowBack" src="/imgs/icons/navIcons/botao-home (1).png" alt="arrowBack" />
            </a>
          </div>
          <div className="div-logo">
            <img className="logo" src="/imgs/Group 39.png" alt="logo" />
          </div>
          
          <Steps currentStep={currentStep} />
          {(
            <div className="campo-cadastro">
              <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                {currentComponent}
                <div
                  className={
                    !isFirstStep ? "div-buttons-cadastro" : "div-button-cadastro"
                  }
                >
                  {!isFirstStep ? (
                    <button
                      type="button"
                      onClick={() => changeStep(currentStep - 1)}
                    >
                      Voltar
                    </button>
                  ) : (
                    <span></span>
                  )}

                  {!isLastStep ? (
                    <button type="submit">Avançar</button>
                  ) : (
                    <button onClick={() => cadastrarEmpresa()} type="submit">
                      Enviar
                    </button>
                  )}
                </div>
              </form>
            </div>)}
        </div>
        <div className="image-cadastro">
          <img
            className="sideImageCadastro"
            src="./imgs/estacionamento_static.png"
            alt="sla"
          />
        </div>
      </section>
    </>
  );
}

export default Cadastro;
