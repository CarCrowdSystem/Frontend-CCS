import "../../components/Inputs/input.css";
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import LastStep from "./lastStep";
import "./Cadastro.css";
import Steps from "./Steps";
import api from "../../api.js";

import { useNavigate } from "react-router-dom";

//Hooks
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const formTemplate = {
  nomeEmpresa: "",
  cnpjEmpresa: "",
  cepEmpresa: "",
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

  const [postEmpresa, setPostEmpresa] = useState({});

  const [listaVagas, setListaVagas] = useState([]);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  function retornoVagas(vaga) {
    console.log(vaga);

    setListaVagas([...listaVagas, vaga])
  }

  const formCadastro = [
    <FirstStep data={data} updateFieldHandler={updateFieldHandler} />,
    <SecondStep vagas={listaVagas} updateFieldHandler={updateFieldHandler} funcaoRetornoVagas={retornoVagas} />,
    <LastStep data={data} updateFieldHandler={updateFieldHandler} />,
  ];

  function showData() {
    const postEmpresa = {
      nomeEmpresa: data.nomeEmpresa,
      cnpjEmpresa: data.cnpjEmpresa,
      cepEmpresa: data.cepEmpresa,
      enderecoEmpresa: data.enderecoEmpresa,
      emailEmpresa: data.emailEmpresa,
      vagas: listaVagas,
      nomeUsuario: data.nomeUsuario,
      cpfUsuario: data.cpfUsuario,
      emailUsuario: data.emailUsuario,
      senha: data.senha,
      confirmaSenha: data.confirmaSenha,
    };
    console.log(postEmpresa);
  }

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useForm(formCadastro);

  function cadastrarEmpresa() {
    const postEmpresa = {
      nomeEmpresa: data.nomeEmpresa,
      cnpjEmpresa: data.cnpjEmpresa,
      cepEmpresa: data.cepEmpresa,
      enderecoEmpresa: data.enderecoEmpresa,
      telefoneEmpresa: data.telefoneEmpresa,
      vagas: listaVagas,
      nomeUsuario: data.nomeUsuario,
      cpfUsuario: data.cpfUsuario,
      emailUsuario: data.emailUsuario,
      senha: data.senha,
    };

    api
      // Teste MockAPI
      .post(`/teste`, postEmpresa)

      // "Funcional" backEnd ccs
      // .post(`/distrubuicao`, postEmpresa)
      .then((response) => {
        navigate("/login");
        setTimeout(5000)
        console.log(response);
      })
      .catch((erro) => {
        console.log("Error")
        console.log(erro);
      });

    console.log(postEmpresa);
  }

  return (
    <>
      <section className="view-cadastro">
        <div className="div-all-fields">
          <div className="div-arrow-back">
            <a href="/">
              <img className="arrowBack" src="/imgs/icons/Vector.png" />
            </a>
          </div>
          <div className="div-logo">
            <img className="logo" src="/imgs/Group 39.png" />
          </div>
          <Steps currentStep={currentStep} />
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
          </div>
        </div>
        <div className="image-cadastro">
          <img
            className="sideImageCadastro"
            src="./imgs/estacionamento_static.png"
          />
        </div>
      </section>
    </>
  );
}

export default Cadastro;
