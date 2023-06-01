import React from "react";
import Button from "./Componentes/Botao/index";

// import { Container } from './styles';

const firstStep = ({data, updateFieldHandler}) => {

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
      />

      <label>CNPJ</label>
      <input
        className="campo-texto"
        type="text"
        name="cnpjEmpresa"
        placeholder="Digite o cnpj da empresa"
        required
        value={data.cnpjEmpresa || ""}
        onChange={(e) => updateFieldHandler("cnpjEmpresa", e.target.value)}
      />

      <label>CEP</label>
      <input
        className="campo-texto"
        type="text"
        name="cepEmpresa"
        placeholder="Digite o cep da empresa"
        required
        value={data.cepEmpresa || ""}
        onChange={(e) => updateFieldHandler("cepEmpresa", e.target.value)}
      />

      <label>Número</label>
      <input
        className="campo-texto"
        type="text"
        name="enderecoEmpresa"
        placeholder="Digite o endereco da empresa"
        required
        value={data.enderecoEmpresa || ""}
        onChange={(e) => updateFieldHandler("enderecoEmpresa", e.target.value)}
      />

      <label>Email da empresa</label>
      <input
        className="campo-texto"
        type="text"
        name="emailEmpresa"
        placeholder="Digite o email da empresa"
        required
        value={data.emailEmpresa || ""}
        onChange={(e) => updateFieldHandler("emailEmpresa", e.target.value)}
      />
    </>
  );
}

export default firstStep;
