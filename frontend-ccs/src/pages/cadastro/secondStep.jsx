import React from "react";
import "./Cadastro.css";

// import { Container } from './styles';

function SecondStep() {
  return (
    <>
      <label>Selecione o andar: </label>
      <select className="select-field">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <label>Quantidade de vagas</label>
      <input
        id="name-field"
        className="campo-texto"
        type="text"
        name="nomeEmpresa"
        placeholder="Digite o nome da empresa"
        required
      />

      <button className="button-add"> Adicionar </button>

      <div className="floors-datas">
        <div className="header-floors">
          <h3>Andar</h3>
          <h3>Vagas</h3>
        </div>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
        <h1>teste</h1>
      </div>
    </>
  );
}

export default SecondStep;
