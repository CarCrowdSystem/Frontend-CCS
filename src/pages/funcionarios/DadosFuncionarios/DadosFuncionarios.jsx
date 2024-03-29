import React from "react";
import "./DadosFuncionarios.css";
import IconeLixeira from "./lixeira.png";

// import { Container } from './styles';

const DadosFuncionarios = ({ idFunc, nome, cargo, email, cpf, funDelete }) => {
  
  return (
    <>
      <div className="card-info-funcionario">
        <div className="container-info-funcionarios">
          <div className="info-funcionarios">
            <div className="div-label-inf-funcionarios">
              <label className="label-inf-funcionarios" htmlFor="">
                Nome:
              </label>
              <label className="label-inf-funcionarios" htmlFor="">
                CPF:
              </label>
            </div>
            <div className="div-dados-info-funcionario">
              <span className="dados-func">{nome}</span>
              <span className="dados-func">{cpf}</span>
            </div>
          </div>
          <div className="info-funcionarios">
            <div className="div-label-inf-funcionarios">
              <label className="label-inf-funcionarios" htmlFor="">
                Cargo:
              </label>
              <label className="label-inf-funcionarios" htmlFor="">
                E-mail:
              </label>
            </div>
            <div className="div-dados-info-funcionario">
              <span className="dados-func">{cargo === false ? "Funcionario" : "Gerente"}</span>
              <span className="dados-func">{email}</span>
            </div>
          </div>
          <div className="div-botao-excluir-funcionario">
            <button
              className="botao-icone-exluir-func"
              onClick={() => funDelete(idFunc)}
            >
              <img src={IconeLixeira} alt="icone-lixeira" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DadosFuncionarios;
