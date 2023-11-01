import React from "react";
import "./Cadastro.css";

// import { Container } from './styles';

const Steps = ({ currentStep }) => {
  const stepsNames = ["Cadastro de empresa", "Cadastro de vagas", "Cadastro Pessoal"]
  return (
    <>
      <div className="steps-names">
        <h2>{stepsNames[currentStep]}</h2>
      </div>
      <div className="steps">
        <div className="step active"></div>
        <span className="line"></span>
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}></div>
        <span className="line"></span>
        <div className={`step ${currentStep >= 2 ? "active" : ""}`}></div>
      </div>
    </>
  );
};

export default Steps;
