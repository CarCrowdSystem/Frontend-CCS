import React from "react";
import Button from "./Componentes/Botao/index";

// import { Container } from './styles';

function firstStep() {
  function cadastrarEmpresa(e) {
    e.preventDefault();

    const postEmpresa = {
      nomeEmpresa: e.target.nomeEmpresa.value,
      cnpjEmpresa: e.target.cnpjEmpresa.value,
      cepEmpresa: e.target.cepEmpresa.value,
      enderecoEmpresa: e.target.enderecoEmpresa.value,
      emailEmpresa: e.target.emailEmpresa.value,
    };

    var nome = /^[À-úA-z ]{3,35}$/;
    // var cargoReg = /^[À-úA-z ]{3,35}$/;
    // var email = /^([À-úA-z0-9._-]+@[a-z0-9._-]+\.[A-z0-9_-]+)$/;

    // <form onSubmit={cadastrarEmpresa}>

    if (postEmpresa.nomeEmpresa.match(nome) && postEmpresa.cnpjEmpresa != "") {
      console.log("Hello there!");
    } else {
      console.log("Bye then");
    }

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
      <label>Nome fantasia</label>
      <input
        id="name-field"
        className="campo-texto"
        type="text"
        name="nomeEmpresa"
        placeholder="Digite o nome da empresa"
        required
      />

      <label>CNPJ</label>
      <input
        className="campo-texto"
        type="text"
        name="cnpjEmpresa"
        placeholder="Digite o cnpj da empresa"
        required
      />

      <label>CEP</label>
      <input
        className="campo-texto"
        type="text"
        name="cepEmpresa"
        placeholder="Digite o cep da empresa"
        required
      />

      <label>Número</label>
      <input
        className="campo-texto"
        type="text"
        name="enderecoEmpresa"
        placeholder="Digite o endereco da empresa"
        required
      />

      <label>Email da empresa</label>
      <input
        className="campo-texto"
        type="text"
        name="emailEmpresa"
        placeholder="Digite o email da empresa"
        required
      />
    </>
  );
}

export default firstStep;
