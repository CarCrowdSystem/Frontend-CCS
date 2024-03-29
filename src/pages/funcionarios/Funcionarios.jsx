import React, { useEffect } from "react";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout";
import "./Funcionarios.css";
import Lupa from "./lupa-pesquisar-func.png";
import SetaCima from "./arrow_up.png";
import DadosFuncionarios from "./DadosFuncionarios/DadosFuncionarios";
import NavSideBar from "../../components/NavSideBar/index";
import api from "../../api.js";
import Swal from "sweetalert2";

import { useState } from "react";
// import { Container } from './styles';

const formTemplate = {
  nomeFuncionario: "",
  cpfFuncionario: "",
  emailFuncionario: "",
  cargoFuncionario: false,
  senha: "",
  confirmaSenha: "",
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
    api
      .get(`/funcionarios/nome/${nomeFunc}`)
      .then((response) => {
      console.log(response)
        setFuncionarios(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  function cadastrarFuncionario() {
    const postFuncionario = {
      idEstacionamento: sessionIdEstacionamento,
      nomeUsuario: data.nomeFuncionario,
      cpfUsuario: data.cpfFuncionario,
      emailUsuario: data.emailFuncionario,
      adm: data.cargoFuncionario,
      senha: data.senha,
    };

    api
      .post(`/funcionarios`, postFuncionario)
      .then((response) => {
      console.log(response)
        Swal.fire({
          title: "Funcionario adicionado!",
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
          title: "Erro ao adicionar o funcionario!",
          text: "Verifique os campos!",
          icon: "error",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
        });
        console.log("Error");
        console.log(erro);
      });

    console.log(postFuncionario);
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

  function defazerUltimoCadastro() {
    var id = funcionarios[funcionarios.length - 1].idFuncionario
    console.log(id)
    api
      .delete(`/funcionarios/${id}`)
      .then(() => {
        funcionarios.filter((funcionario) => funcionario.idFuncionario !== id);
        Swal.fire({
          title: "Funcionario deletado com sucesso!",
          icon: "success",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
        });
        updateList();
      })
      .catch((erro) => {
        Swal.fire({
          title: "Erro ao deletar funcionario!",
          icon: "error",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
        });
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
          title: "Funcionario deletado com sucesso!",
          icon: "success",
          confirmButtonColor: "#ff8000",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok",
        });
        updateList();
      })
      .catch(() => {
        Swal.fire({
          title: "Erro ao deletar funcionario!",
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
          <BotaoCheckout />
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
                  Nome:
                </label>
                <input
                  type="text"
                  name="nomeFuncionario"
                  value={data.nomeFuncionario || ""}
                  onChange={(e) =>
                    updateFieldHandler("nomeFuncionario", e.target.value)
                  }
                />
                <select
                  className="combobox-cargo-add-func"
                  name="cargoFuncionario"
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
                  CPF:
                </label>
                <input
                  className="input-add-func"
                  type="text"
                  name="cpfFuncionario"
                  maxLength={11}
                  value={data.cpfFuncionario || ""}
                  onChange={(e) =>
                    updateFieldHandler("cpfFuncionario", e.target.value)
                  }
                />
                <label className="label-info-add-func" htmlFor="">
                  E-mail:
                </label>
                <input
                  className="input-add-func"
                  type="text"
                  name="emailFuncionario"
                  value={data.emailFuncionario || ""}
                  onChange={(e) =>
                    updateFieldHandler("emailFuncionario", e.target.value)
                  }
                />
              </div>
              <div className="form-adicionar-funcionarios">
                <label className="label-info-add-func" htmlFor="">
                  Senha:
                </label>
                <input
                  className="input-add-func"
                  type="password"
                  name="senha"
                  value={data.senha || ""}
                  onChange={(e) => updateFieldHandler("senha", e.target.value)}
                />
                <label className="label-info-add-func" htmlFor="">
                  Confirmar senha:
                </label>
                <input
                  className="input-add-func"
                  type="password"
                  name="confirmaSenha"
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
              <button
                className="botao-adicionar-funcionario"
                onClick={() => defazerUltimoCadastro()}
              >
                Desfazer
              </button>
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
                    <img className="img-seta-cima" src={SetaCima} alt="seta" /> A-Z
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
