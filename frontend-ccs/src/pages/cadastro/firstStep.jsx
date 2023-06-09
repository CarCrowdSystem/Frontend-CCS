import React from "react";
import { IMaskInput } from "react-imask";
import { validateNome, validateCnpj, validateCep, validateNum, validateTelefone, statusNome,
statusCnpj, statusCep, statusNum, statusTelefone} from './funcoes/funcao'
// import { Container } from './styles';

const firstStep = ({data, updateFieldHandler}) => {

  return (
    <>
      <label>Nome fantasia</label>
      <input
        className={statusNome ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="nomeEmpresa"
        placeholder="Digite o nome da empresa"
        required
       // ref = { register ({ pattern: /^[A-Za-z]+$/i }) }
        value={data.nomeEmpresa}
        onChange={(e) => updateFieldHandler("nomeEmpresa", e.target.value)}
        onKeyUp={(e) => validateNome(e.target.value)}
      /> 

      <label>CNPJ</label>
      <IMaskInput
        className={statusCnpj ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="cnpjEmpresa"
        mask="00.000.000/0000-00"
        placeholder="Digite o CNPJ da empresa"
        required
        value={data.cnpjEmpresa || ""}
        onChange={(e) => updateFieldHandler("cnpjEmpresa", e.target.value)}
        onKeyUp={(e) => validateCnpj(e.target.value)}
      />

      <label>CEP</label>
      <IMaskInput
        className={statusCep ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="cepEmpresa"
        mask="00000-000"
        placeholder="Digite o CEP da empresa"
        required
        value={data.cepEmpresa || ""}
        onChange={(e) => updateFieldHandler("cepEmpresa", e.target.value)}
        onKeyUp={(e) => validateCep(e.target.value)}
      />

      <label>Número</label>
      <input
        className={statusNum ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="enderecoEmpresa"
        placeholder="Digite o número de endereço da empresa"
        required
        value={data.enderecoEmpresa || ""}
        onChange={(e) => updateFieldHandler("enderecoEmpresa", e.target.value)}
        onKeyUp={(e) => validateNum(e.target.value)}
      />

      <label>Telefone</label>
      <IMaskInput
        className={statusTelefone ? "campo-texto-correct" : "campo-texto"}
        type="text"
        name="telefoneEmpresa"
        mask="(00) 00000-0000"
        placeholder="Digite o número de telefone com DDD"
        required
        value={data.telefoneEmpresa || ""}
        onChange={(e) => updateFieldHandler("telefoneEmpresa", e.target.value)}
        onKeyUp={(e) => validateTelefone(e.target.value)}
      />
    </>
  );
};

export default firstStep;
