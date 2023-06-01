import "../../components/Inputs/input.css";
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import LastStep from "./lastStep";
import "./Cadastro.css";
import Steps from "./Steps";

//Hooks
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import FloorData from "./Componentes/labelFloor/FloorsDates";

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

function Cadastro(props) {
  const [data, setData] = useState(formTemplate);

  const [postEmpresa, setPostEmpresa] = useState({});

  const [listaVagas, setListaVagas] = useState([]);

  //alteração felipe
  // const [valores, setValores] = useState([]);
  // const [form, setForm] = useState(formTemplate);

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setForm({ ...form, [name]: value });
  // }

  // function handleAddValores() {
  //   setValores([
  //     ...valores,
  //     { andar: form.andar, quantidadeVagas: form.quantidadeVagas },
  //   ]);
  //   setForm({ ...form, andar: "", quantidadeVagas: "" });
  // }
  ///alteração felipe

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

  function cadastrarEmpresa(e) {
    e.preventDefault();

    const postEmpresa = {
      nomeEmpresa: e.target.nomeEmpresa.value,
      cnpjEmpresa: e.target.cnpjEmpresa.value,
      cepEmpresa: e.target.cepEmpresa.value,
      enderecoEmpresa: e.target.enderecoEmpresa.value,
      emailEmpresa: e.target.emailEmpresa.value,
      andar: e.target.andar.value,
      quantidadeVagas: e.target.quantidadeVagas.value,
      nomeUsuario: e.target.nomeUsuario.value,
      cpfUsuario: e.target.cpfUsuario.value,
      emailUsuario: e.target.emailUsuario.value,
      senha: e.target.senha.value,
      confirmaSenha: e.target.confirmaSenha.value,
    };

    // var nome = /^[À-úA-z ]{3,35}$/;
    // var cargoReg = /^[À-úA-z ]{3,35}$/;
    // var email = /^([À-úA-z0-9._-]+@[a-z0-9._-]+\.[A-z0-9_-]+)$/;

    // <form onSubmit={cadastrarEmpresa}>

    // if (postEmpresa.nomeEmpresa.match(nome) && postEmpresa.cnpjEmpresa != "") {
    //   console.log("Hello there!");
    // } else {
    //   console.log("Bye then");
    // }

    // api
    //   .post(`/nomedorequest`, postEmpresa)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((erro) => {
    //     console.log(erro);
    //   });

    console.log(postEmpresa);
  }

  return (
    <>
      {/* <div>
        <input
          type="text"
          name="andar"
          value={form.andar}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="quantidadeVagas"
          value={form.quantidadeVagas}
          onChange={handleInputChange}
        />
        <button onClick={handleAddValores}>Adicionar Valores</button>
        <ul>
          {valores.map((valor, index) => (
            <li key={index}>
              Andar: {valor.andar}, Quantidade de Vagas: {valor.quantidadeVagas}
            </li>
          ))}
        </ul>
      </div> */}

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
                  <button onClick={() => showData()} type="submit">
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
