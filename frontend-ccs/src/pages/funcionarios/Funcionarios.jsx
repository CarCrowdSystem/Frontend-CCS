import React, { useEffect } from "react";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout";
import "./Funcionarios.css";
import Lupa from "./lupa-pesquisar-func.png";
import SetaCima from "./arrow_up.png";
import DadosFuncionarios from "./DadosFuncionarios/DadosFuncionarios";
import NavSideBar from "../../components/NavSideBar/index";
import api from "../../api.js";

import { useState } from "react";
// import { Container } from './styles';

const formTemplate = {
  nomeFuncionario: "",
  cpfFuncionario: "",
  emailFuncionario: "",
  cargoFuncionario: "",
  senha: "",
  confirmaSenha: "",
};

function Funcionarios() {
  const [data, setData] = useState(formTemplate);

  const [funcionarios, setFuncionarios] = useState([]);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  function cadastrarFuncionario() {
    const postFuncionario = {
      nomeFuncionario: data.nomeFuncionario,
      cpfFuncionario: data.cpfFuncionario,
      emailFuncionario: data.emailFuncionario,
      cargoFuncionario: data.cargoFuncionario,
      senha: data.senha,
    };

    api
      // Teste MockAPI
      .post(`/funca`, postFuncionario)

      // "Funcional" backEnd ccs
      // .post(`/distrubuicao`, postEmpresa)
      .then((response) => {
        console.log(response.data);
      })
      .catch((erro) => {
        console.log("Error");
        console.log(erro);
      });

    console.log(postFuncionario);
  }

  useEffect(()=> {
    api
      .get(`/funca`) 
      .then((response) => {
        console.log(response.data); 
        setFuncionarios(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

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
                  className="input-nome-func-add-func"
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
                  id=""
                  value={data.cargoFuncionario || ""}
                  onChange={(e) =>
                    updateFieldHandler("cargoFuncionario", e.target.value)
                  }
                >
                  <option value=""></option>
                  <option value="false">Funcionário</option>
                  <option value="true">Gerente</option>
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
                  type="text"
                  name="senha"
                  value={data.senha || ""}
                  onChange={(e) => updateFieldHandler("senha", e.target.value)}
                />
                <label className="label-info-add-func" htmlFor="">
                  Confirmar senha:
                </label>
                <input
                  className="input-add-func"
                  type="text"
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
              <button className="botao-adicionar-funcionario">Desfazer</button>
            </div>
            <div className="div-title-exibir-funcionarios">
              <h1 className="titulo-adicionar-funcionarios">Funcionários</h1>
            </div>
            <div className="container-pesquisa-funcionarios">
              <div className="div-pesquisa-funcionarios">
                <div className="div-separacao-pesquisa-func">
                  <button className="botao-ordenar-func">
                    <img className="img-seta-cima" src={SetaCima} alt="" /> A-Z
                  </button>
                  <div className="div-buscar-pelo-nome">
                    <input
                      placeholder="Buscar pelo nome..."
                      className="input-pesquisar-func"
                      type="text"
                    />
                    <button className="botao-pesquisar-func">
                      <img
                        className="img-lupa-pesquisar-func"
                        src={Lupa}
                        alt=""
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
                    nome={funcionario.nomeFuncionario}
                    cargo={funcionario.cargoFuncionario}
                    email={funcionario.emailFuncionario}
                    cpf={funcionario.cpfFuncionario}
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
