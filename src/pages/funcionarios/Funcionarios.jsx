import React, { useEffect } from "react";
/* import BotaoCheckout from "../../components/Botoes/BotaoCheckout"; */
import "./Funcionarios.css";
import Lupa from "./lupa-pesquisar-func.png";
import SetaCima from "./arrow_up.png";
import DadosFuncionarios from "./DadosFuncionarios/DadosFuncionarios";
import NavSideBar from "../../components/NavSideBar/index";
import api from "../../api.js";
import Swal from "sweetalert2";

import { useState } from "react";
// import { Container } from './styles';
import InputMask, { ReactInputMask } from 'react-input-mask';

const formTemplate = {
  nomeFuncionario: "",
  cpfFuncionario: "",
  emailFuncionario: "",
  cargoFuncionario: false,
  senha: "",
  confirmaSenha: "",
};

const removeNonNumericChars = (value) => {
  return value.replace(/\D/g, '');
};

var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");

var contador = 0;

var nomeFunc = ''

function Funcionarios() {
  const [data, setData] = useState(formTemplate);

  const [funcionarios, setFuncionarios] = useState([]);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  function buscarFuncionarioPorNome() {
    let apiEndpoint = `/funcionarios/${sessionIdEstacionamento}`;

    if (nomeFunc !== null && nomeFunc !== "") {
      apiEndpoint = `/funcionarios/nome/${nomeFunc}/${sessionIdEstacionamento}`;
    }

    console.log(apiEndpoint)

    api
      .get(apiEndpoint)
      .then((response) => {
        console.log(response.data);
        setFuncionarios(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  const [errorMessages, setErrorMessages] = useState({
    nomeError: "",
    cpfError: "",
    emailError: "",
    senhaError: "",
    confirmaSenhaError: "",
  });

  const validateFun = () => {
    const errors = {};

    if (!data.nomeFuncionario || data.nomeFuncionario.length <= 2) {
      errors.nomeError = "Por favor, preencha o nome completo.";
    }

    if (!data.cpfUsuario || removeNonNumericChars(data.cpfUsuario).length !== 11) {
      errors.cpfError = "Por favor, insira um CPF válido.";

    }

    if (!data.emailFuncionario || data.emailFuncionario.indexOf("@") == -1) {
      errors.emailError = "Por favor, insira um e-mail válido.";

    }

    if (!data.senha || data.senha.length < 8) {
      errors.senhaError = "A senha deve ter pelo menos 8 caracteres.";

    }

    if (data.senha !== data.confirmaSenha) {
      errors.confirmaSenhaError = "As senhas não coincidem.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };


  function validarCampos() {
    const { nomeFuncionario, cpfUsuario, emailFuncionario, senha, confirmaSenha } = data;

    if (!nomeFuncionario || !cpfUsuario || !emailFuncionario || !senha || !confirmaSenha) {
      Swal.fire({
        title: "Campos obrigatórios não preenchidos!",
        icon: "error",
        confirmButtonColor: "#ff8000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      });
      console.log("Campos obrigatórios não preenchidos!");
      return false;
    } else if (data.nomeFuncionario.length <= 2) {
      console.log("Nome inválido!");
      return false;
    } else if (removeNonNumericChars(data.cpfUsuario).length !== 11) {
      console.log("CPF inválido!");
      return false;
    } else if (data.emailFuncionario.indexOf("@") == -1) {
      console.log("Email inválido!");
      return false;
    } else if (!data.senha || data.senha.length < 8) {
      console.log("Senha inválida!");
      return false;
    } else if (senha !== confirmaSenha) {
      console.log("Senhas não coincidem!")
      return false;
    } else {
      return true;
    }
  }

  function cadastrarFuncionario() {

    console.log("Valor retornado de validarCampos:", validarCampos());

    const postFuncionario = {
      idEstacionamento: sessionIdEstacionamento,
      nomeUsuario: data.nomeFuncionario,
      cpfUsuario: data.cpfUsuario,
      emailUsuario: data.emailFuncionario,
      adm: data.cargoFuncionario,
      senha: data.senha,
    };

    if (validarCampos()) {
      api
        .post(`/funcionarios`, postFuncionario)
        .then((response) => {
          console.log(response)
          Swal.fire({
            title: "Funcionário adicionado!",
            icon: "success",
            confirmButtonColor: "#ff8000",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok",
          });
          console.log(response.data);
          updateList();
        })
        .catch((erro) => {
          Swal.fire({
            icon: "error",
            title: "Erro ao cadastrar!",
            text: "Verifique se os campos foram preenchidos corretamente",
            confirmButtonColor: "#ff8000",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok",
          });
          console.log("Error");
          console.log(erro);
        });

      console.log(postFuncionario);
    } else {
      Swal.fire({
        icon: "error",
        title: "Erro ao cadastrar!",
        text: "Verifique se os campos foram preenchidos corretamente",
        confirmButtonColor: "#ff8000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      });
    }
  }

  useEffect(() => {
    api
      .get(`/funcionarios/${sessionIdEstacionamento}`)
      .then((response) => {
        console.log(response.data);
        setFuncionarios(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  function updateList() {
    api
      .get(`/funcionarios/${sessionIdEstacionamento}`)
      .then((response) => {
        setFuncionarios(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function funDeleteFunc(id) {
    api
      .delete(`/funcionarios/${id}`)
      .then(() => {
        setFuncionarios(
          funcionarios.filter((funcionario) => funcionario.id !== id)
        );
        Swal.fire({
          title: "Funcionário deletado!",
          icon: "success",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
        });
        updateList();
      })
      .catch(() => {
        Swal.fire({
          title: "Erro ao deletar funcionário!",
          icon: "error",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
        });
        alert("deu erro");
      });
  }

  function ondenaAZ() {
    api
      .get(`/funcionarios/nome-ordenado-a/${sessionIdEstacionamento}`)
      .then((response) => {
        setFuncionarios(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function ondenaZA() {
    api
      .get(`/funcionarios/nome-ordenado-z/${sessionIdEstacionamento}`)
      .then((response) => {
        setFuncionarios(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function selecionarOrdenacao() {
    if (contador === 0) {
      contador++
      ondenaAZ();
    } else {
      contador = 0;
      ondenaZA();
    }
  }


  return (
    <>
      <NavSideBar />
      <div className="container-funcionarios-pai">
        <div className="espaco-icone">
          {/* <BotaoCheckout /> */}
        </div>
        <div className="container-funcionarios-filho">
          <div className="container-adicionar-funcionarios">
            <div className="div-title-adicionar-funcionarios">
              <h1 className="titulo-adicionar-funcionarios">
                Adicionar Funcionário
              </h1>
            </div>
            <div className="div-formulario-adicionar-funcionario">
              <div className="form-adicionar-funcionarios">
                <label className="label-info-add-func" htmlFor="">
                  Nome<span className="error-message">{errorMessages.nomeError}</span>
                </label>
                <input
                  type="text"
                  name="nomeFuncionario"
                  placeholder="Digite o nome completo"
                  required
                  value={data.nomeFuncionario || ""}
                  onKeyUp={() => validateFun()}
                  onChange={(e) =>
                    updateFieldHandler("nomeFuncionario", e.target.value)

                  }
                />
                <p>Cargo</p>
                <select
                  className="combobox-cargo-add-func"
                  name="cargoFuncionario"
                  required
                  value={data.cargoFuncionario || ""}
                  onChange={(e) =>
                    updateFieldHandler("cargoFuncionario", e.target.value)
                  }
                >
                  <option value={false}>Funcionário</option>
                  <option value={true}>Gerente</option>
                </select>
              </div>
              <div className="form-adicionar-funcionarios">
                <label className="label-info-add-func" htmlFor="">
                  CPF<span className="error-message">{errorMessages.cpfError}</span>
                </label>
                <InputMask
                  className="input-add-func"
                  type="text"
                  name="cpfUsuario"
                  mask="999.999.999-99"
                  placeholder="Digite o CPF"
                  required
                  onKeyUp={() => validateFun()}
                  value={data.cpfUsuario || ""}
                  onChange={(e) => updateFieldHandler("cpfUsuario", removeNonNumericChars(e.target.value))}
                />
                <label className="label-info-add-func" htmlFor="">
                  E-mail<span className="error-message">{errorMessages.emailError}</span>
                </label>
                <input
                  className="input-add-func"
                  type="text"
                  name="emailFuncionario"
                  placeholder="funcionario@gmail.com"
                  value={data.emailFuncionario || ""}
                  required
                  onKeyUp={() => validateFun()}
                  onChange={(e) =>
                    updateFieldHandler("emailFuncionario", e.target.value)
                  }
                />
              </div>
              <div className="form-adicionar-funcionarios">
                <label className="label-info-add-func" htmlFor="">
                  Senha<span className="error-message">{errorMessages.senhaError}</span>
                </label>
                <input
                  className="input-add-func"
                  type="password"
                  name="senha"
                  required
                  onKeyUp={() => validateFun()}
                  placeholder="********"
                  value={data.senha || ""}
                  onChange={(e) => updateFieldHandler("senha", e.target.value)}
                />
                <label className="label-info-add-func" htmlFor="">
                  Confirmar senha<span className="error-message">{errorMessages.confirmaSenhaError}</span>
                </label>
                <input
                  className="input-add-func"
                  type="password"
                  name="confirmaSenha"
                  required
                  onKeyUp={() => validateFun()}
                  placeholder="********"
                  value={data.confirmaSenha || ""}
                  onChange={(e) =>
                    updateFieldHandler("confirmaSenha", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="div-botao-adicionar-funcionario">
              <button
                className="botao-adicionar-funcionario"
                onClick={() => cadastrarFuncionario()}
              >
                Adicionar
              </button>
              {/*               <button
                className="botao-adicionar-funcionario"
                onClick={() => defazerUltimoCadastro()}
              >
                Desfazer
              </button> */}
            </div>
            <div className="div-title-exibir-funcionarios">
              <h1 className="titulo-adicionar-funcionarios">Funcionários</h1>
            </div>
            <div className="container-pesquisa-funcionarios">
              <div className="div-pesquisa-funcionarios">
                <div className="div-separacao-pesquisa-func">
                  <button
                    className="botao-ordenar-func"
                    onClick={() => selecionarOrdenacao()}
                  >
                    <img className="img-seta-cima" src={SetaCima} alt="seta" />A - Z
                  </button>
                  <div className="div-buscar-pelo-nome">
                    <input
                      placeholder="Buscar pelo nome..."
                      className="input-pesquisar-func"
                      type="text"
                      onChange={
                        (e) => (nomeFunc = e.target.value)
                      }
                    />
                    <button className="botao-pesquisar-func" onClick={buscarFuncionarioPorNome}>
                      <img
                        className="img-lupa-pesquisar-func"
                        src={Lupa}
                        alt="lupa"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-pai-card-info-funcionarios">
              <div className="container-card-info-funcionarios">
                {funcionarios.map((funcionario, i) => (
                  <React.Fragment key={i}>
                    <DadosFuncionarios
                      idFunc={funcionario.idFuncionario}
                      nome={funcionario.nome}
                      cargo={funcionario.adm}
                      email={funcionario.email}
                      cpf={funcionario.cpf}
                      id={funcionario.id}
                      funDelete={funDeleteFunc}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Funcionarios;
