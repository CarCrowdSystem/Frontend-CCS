import React, { useState } from "react";
import "./CampoTexto.css";
import Lapis from "./lapis-edicao.png";

// import { Container } from './styles';

function CampoTexto(props) {
  const placeholderModificado = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  const [inputHabilitada, setInputHabilitado] = useState(false);

  const habilitarInput = () => {
    setInputHabilitado(true);
  };

  return (
    <>
      <div className="campo-texto-estacionamnto">
        <div className="label-estacionamento">
          <label>{props.label}</label>
        </div>
        {props.inputHabilitada && (
          <input
            className="input-dados-estacionamento"
            value={props.valor}
            onChange={aoDigitado}
            required={props.obrigatorio}
            placeholder={placeholderModificado}
            style={{ width: "70%", height: "40px" }}
          />
        )}
        {
          <input
            className="input-dados-estacionamento"
            value={props.valor}
            onChange={aoDigitado}
            required={props.obrigatorio}
            placeholder={placeholderModificado}
            style={{ width: "70%", height: "40px" }}
            disabled={!inputHabilitada}
          />
        }
        {props.exibirBotao && (
          <button onClick={habilitarInput} className="botao-lapis">
            <img
              style={{ width: "24px" }}
              src={Lapis}
              alt="Botão de Alteração"
            />
          </button>
        )}
        {!props.exibirBotao && <button className="botao-lapis-oculto"></button>}
      </div>
    </>
  );
}

export default CampoTexto;
