import React from "react";

// import { Container } from './styles';

const firstStep = ({ data, updateFieldHandler }) => {
  // var nome = /^[À-úA-z ]{3,35}$/;
  // var cargoReg = /^[À-úA-z ]{3,35}$/;
  // var email = /^([À-úA-z0-9._-]+@[a-z0-9._-]+\.[A-z0-9_-]+)$/;

  // function validation() {
  //   if (data.nomeEmpresa.match(nome)) {
  //     console.log("nome ok");
  //   } else {
  //     console.log("nome invalido");
  //   }

  //   if (data.cnpjEmpresa.length === 10 || data.cnpjEmpresa.length === 14) {
  //     console.log("CNPJ ok");
  //   } else {
  //     console.log("CNPJ invalido");
  //   }

  //   if (data.cepEmpresa == 8) {
  //     console.log("cep ok");
  //   } else {
  //     console.log("cep invalido");
  //   }

  //   if (data.telefoneEmpresa >= 9 ) {
  //     console.log("Telefone ok");
  //   } else {
  //     console.log("Telefone invalido");
  //   }
  // }

  return (
    <>
      <label>Nome fantasia</label>
      <input
        id="name-field"
        className="campo-texto"
        type="text"
        name="nomeEmpresa"
        placeholder="Digite o nome da empresa"
        required
        value={data.nomeEmpresa || ""}
        onChange={(e) => updateFieldHandler("nomeEmpresa", e.target.value)}
        // onKeyUp={validation()}
      /> 

      <label>CNPJ</label>
      <input
        className="campo-texto"
        type="text"
        name="cnpjEmpresa"
        placeholder="00.000.000/0001-00"
        required
        value={data.cnpjEmpresa || ""}
        onChange={(e) => updateFieldHandler("cnpjEmpresa", e.target.value)}
        // onKeyUp={validation()}
      />

      <label>CEP</label>
      <input
        className="campo-texto"
        type="text"
        name="cepEmpresa"
        placeholder="00000-000"
        required
        value={data.cepEmpresa || ""}
        onChange={(e) => updateFieldHandler("cepEmpresa", e.target.value)}
        // onKeyUp={validation()}
      />

      <label>Número</label>
      <input
        className="campo-texto"
        type="text"
        name="enderecoEmpresa"
        placeholder="Digite o número de endereço da empresa"
        required
        value={data.enderecoEmpresa || ""}
        onChange={(e) => updateFieldHandler("enderecoEmpresa", e.target.value)}
        // onKeyUp={validation()}
      />

      <label>Telefone</label>
      <input
        className="campo-texto"
        type="text"
        name="telefoneEmpresa"
        placeholder="(00)00000-0000"
        required
        value={data.telefoneEmpresa || ""}
        onChange={(e) => updateFieldHandler("telefoneEmpresa", e.target.value)}
        // onKeyUp={validation()}
      />
    </>
  );
};

export default firstStep;
