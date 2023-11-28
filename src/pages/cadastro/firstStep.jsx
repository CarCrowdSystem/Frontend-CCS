import React, { useState } from "react";
import InputMask from 'react-input-mask';

const FirstStep = ({data, updateFieldHandler}) => {

  const [errorMessages, setErrorMessages] = useState({
    nomeEmpresa: "",
    cnpjEmpresa: "",
    cepEmpresa: "",
    telefoneEmpresa: "",
  });

  const removeNonNumericChars = (value) => {
    return value.replace(/\D/g, '');
  };

  const validateFirstStep = () => {

    const errors = {};
    
    if (!data.nomeEmpresa || data.nomeEmpresa.length <= 2) {
      errors.nomeEmpresa = "Por favor, preencha o nome da empresa.";
    }

    if (!data.cnpjEmpresa || removeNonNumericChars(data.cnpjEmpresa).length !== 14) {
      errors.cnpjEmpresa = "Por favor, insira um CNPJ válido.";
    }

    if (!data.cepEmpresa || removeNonNumericChars(data.cepEmpresa).length !== 8) {
      errors.cepEmpresa = "Por favor, insira um CEP válido.";
    }

    if (!data.telefoneEmpresa || removeNonNumericChars(data.telefoneEmpresa).length !== 11) {
      errors.telefoneEmpresa = "Por favor, insira um número de telefone válido.";
    }
  
    setErrorMessages(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <label>Nome fantasia<span className="error-message">{errorMessages.nomeEmpresa}</span></label>
      <input
        className="campo-texto"
        type="text"
        name="nomeEmpresa"
        placeholder="Digite o nome da empresa"
        required
        value={data.nomeEmpresa}
        onChange={(e) => updateFieldHandler("nomeEmpresa", e.target.value)}
        onKeyUp={validateFirstStep}
      /> 

      <label>CNPJ<span className="error-message">{errorMessages.cnpjEmpresa}</span></label>
      <InputMask
        className="campo-texto"
        type="text"
        name="cnpjEmpresa"
        mask="99.999.999/9999-99"
        placeholder="Digite o CNPJ da empresa"
        required
        value={data.cnpjEmpresa || ""}
        onChange={(e) => updateFieldHandler("cnpjEmpresa", removeNonNumericChars(e.target.value))}
        onKeyUp={validateFirstStep}
      />

      <label>CEP<span className="error-message">{errorMessages.cepEmpresa}</span></label>
      <InputMask
        className="campo-texto"
        type="text"
        name="cepEmpresa"
        mask="99999-999" // Máscara de CEP
        placeholder="Digite o CEP da empresa"
        required
        value={data.cepEmpresa || ""}
        onChange={(e) => updateFieldHandler("cepEmpresa", removeNonNumericChars(e.target.value))}
        onKeyUp={validateFirstStep}
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
      />

      <label>Telefone<span className="error-message">{errorMessages.telefoneEmpresa}</span></label>
      <InputMask
        className="campo-texto"
        type="text"
        name="telefoneEmpresa"
        mask="(99) 99999-9999"
        placeholder="Digite o número de celular da empresa"
        required
        value={data.telefoneEmpresa || ""}
        onChange={(e) => updateFieldHandler("telefoneEmpresa", removeNonNumericChars(e.target.value))}
        onKeyUp={validateFirstStep}
      />
    </>
  );
};

export default FirstStep;
