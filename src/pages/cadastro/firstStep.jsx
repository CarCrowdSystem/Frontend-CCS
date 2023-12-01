import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import InputMask from 'react-input-mask';

const FirstStep = ({data, updateFieldHandler}) => {

  const removeNonNumericChars = (value) => {
    return value.replace(/\D/g, '');
  };

  return (
    <>
      <label>Nome Fantasia</label>
      <input
        className="campo-texto"
        type="text"
        name="nomeEmpresa"
        placeholder="Digite o nome da empresa"
        required
       // ref = { register ({ pattern: /^[A-Za-z]+$/i }) }
        value={data.nomeEmpresa}
        onChange={(e) => updateFieldHandler("nomeEmpresa", e.target.value)}

      /> 

      <label>CNPJ</label>
      <InputMask
        className="campo-texto"
        type="text"
        name="cnpjEmpresa"
        mask="99.999.999/9999-99"
        placeholder="Digite o CNPJ da empresa"
        required
        value={data.cnpjEmpresa || ""}
        onChange={(e) => updateFieldHandler("cnpjEmpresa", removeNonNumericChars(e.target.value))}

      />

      <label>CEP</label>
      <InputMask
        className="campo-texto"
        type="text"
        name="cepEmpresa"
        mask="99999-999" // Máscara de CEP
        placeholder="Digite o CEP da empresa"
        required
        value={data.cepEmpresa || ""}
        onChange={(e) => updateFieldHandler("cepEmpresa", removeNonNumericChars(e.target.value))}

      />

      <label>Número</label>
      <input
        className="campo-texto"
        type="text"
        name="enderecoEmpresa"
        placeholder="Digite o número do endereço da empresa"
        required
        value={data.enderecoEmpresa || ""}
        onChange={(e) => updateFieldHandler("enderecoEmpresa", e.target.value)}

      />

      <label>Telefone</label>
      <InputMask
        className="campo-texto"
        type="text"
        name="telefoneEmpresa"
        mask="(99) 99999-9999" // Máscara para número de celular
        placeholder="Digite o número de telefone da empresa"
        required
        value={data.telefoneEmpresa || ""}
        onChange={(e) => updateFieldHandler("telefoneEmpresa", removeNonNumericChars(e.target.value))}

      />
    </>
  );
};

export default FirstStep;
