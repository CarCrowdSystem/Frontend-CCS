import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { validateNome2, validateCnpj, validateCep, validateNum, validateTelefone} from './funcoes/funcao'
// import { Container } from './styles';
import InputMask from 'react-input-mask';

const FirstStep = ({data, updateFieldHandler}) => {

  const [validacao, setValidacao] = useState({
    "nome": false,
    "cnpj": false,
    "cep": false,
    "num": false,
    "telefone": false
  });

  function atualizarValidacao(campo, valido) {
    const novaValidacao = { ...validacao };
    novaValidacao[campo] = valido;
    setValidacao(novaValidacao);
  }

  return (
    <>
      <label>Nome fantasia</label>
      <input
        className={validacao.nome ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="nomeEmpresa"
        placeholder="Digite o nome da empresa"
        required
       // ref = { register ({ pattern: /^[A-Za-z]+$/i }) }
        value={data.nomeEmpresa}
        onChange={(e) => updateFieldHandler("nomeEmpresa", e.target.value)}
        onKeyUp={(e) => validateNome2(e.target.value, atualizarValidacao)}
      /> 

      <label>CNPJ</label>
      <InputMask
        className={validacao.cnpj ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="cnpjEmpresa"
        mask="99.999.999/9999-99"
        placeholder="Digite o CNPJ da empresa"
        required
        value={data.cnpjEmpresa || ""}
        onChange={(e) => updateFieldHandler("cnpjEmpresa", e.target.value)}
        onKeyUp={(e) => validateCnpj(e.target.value, atualizarValidacao)}
      />

      <label>CEP</label>
      <InputMask
        className={validacao.cep ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="cepEmpresa"
        mask="99999-999" // Máscara de CEP
        placeholder="Digite o CEP da empresa"
        required
        value={data.cepEmpresa || ""}
        onChange={(e) => updateFieldHandler("cepEmpresa", e.target.value)}
        onKeyUp={(e) => validateCep(e.target.value, atualizarValidacao)}
      />

      <label>Número</label>
      <input
        className={validacao.num ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="enderecoEmpresa"
        placeholder="Digite o número de endereço da empresa"
        required
        value={data.enderecoEmpresa || ""}
        onChange={(e) => updateFieldHandler("enderecoEmpresa", e.target.value)}
        onKeyUp={(e) => validateNum(e.target.value, atualizarValidacao)}
      />

      <label>Telefone</label>
      <InputMask
        className={validacao.num ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="numeroCelular"
        mask="(99) 99999-9999" // Máscara para número de celular
        placeholder="Digite o número de celular da empresa"
        required
        value={data.numeroCelular || ""}
        onChange={(e) => updateFieldHandler("numeroCelular", e.target.value)}
        onKeyUp={(e) => validateNum(e.target.value, atualizarValidacao)}
      />
    </>
  );
};

export default FirstStep;
