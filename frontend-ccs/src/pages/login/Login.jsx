// import { useState } from "react";
import "./Login.css";
import "../../components/Inputs/input.css";
import Button from "./Componentes/Botao/index";
// import CampoTexto from "./home/Componentes/CampoTexto/inde";
// import Botao from "./Componentes/Botao";
import api from "../../api.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function loginEmpresa(e) {
    e.preventDefault();

    const getEmpresa = {
      email: e.target.emailEmpresa.value,
      senha: e.target.senhaEmpresa.value,
    };

    // var email = /^([À-úA-z0-9._-]+@[a-z0-9._-]+\.[A-z0-9_-]+)$/;

    api
      //Teste MockAPI
      // .post(`/login`, getEmpresa)

      //"Funcional" backEnd ccs
      .post(`/funcionarios/login`, getEmpresa)
      .then((response) => {
        navigate("/dashboard");
        console.log(response);
      })
      .catch((erro) => {
        console.log(erro);
      });

    console.log(getEmpresa);
  }

  return (
    <>
      <section className="view-cadastro">
        <div className="div-all-fields">
          <div className="div-arrow-back">
            <a href='/'>
              <img className="arrowBack" src="/imgs/icons/Vector.png" />
            </a>
          </div>
          <div className="div-logo-login">
            <img className="logo" src="/imgs/Group 39.png" />

            <h1 className="login-title">Login</h1>
          </div>
          <div className="campo-cadastro">
            <form onSubmit={loginEmpresa}>
              <label>E-mail</label>
              <input
                id="name-field"
                className="campo-texto"
                type="text"
                name="emailEmpresa"
                placeholder="Digite seu email"
              />

              <label>Senha</label>
              <input
                className="campo-texto"
                type="password"
                name="senhaEmpresa"
                placeholder="Digite sua senha"
              />

              <a href="colocar link modal">Esqueci minha senha</a>

              <Button type="submit">Entrar</Button>
            </form>

            <div className="footer-login">
              <h2>Não possui cadastro?</h2>
              <button className="button-cadastra" >Cadastre-se</button>
            </div>
          </div>
        </div>
        <div className="image-cadastro">
          <img className="sideImageCadastro" src="./imgs/parking.png" />
        </div>
      </section>
    </>
  );
}

export default Login;
