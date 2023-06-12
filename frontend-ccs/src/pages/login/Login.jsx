// import { useState } from "react";
import "./Login.css";
import "../../components/Inputs/input.css";
import Button from "./Componentes/Botao/index";
import api from "../../api.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  function loginEmpresa(e) {
    e.preventDefault();

    const getEmpresa = {
      email: e.target.emailEmpresa.value,
      senha: e.target.senhaEmpresa.value,
    };

    // function userHasAccount(userDataList){
    //   for(var i = 0; i < userDataList.length; i++){
    //     if(userDataList[i].emailEmpresa === getEmpresa.email && userDataList[i].senhaEmpresa === getEmpresa.senha){
    //       return true
    //     }
    //       return false
    //   }
    // }

    api
      //Teste MockAPI
      /*.get(`/login`, getEmpresa) */

      //"Funcional" backEnd ccs
      .post(`/funcionarios/login`, getEmpresa)
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login efetuado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard");

        console.log(response.data);
      })
      .catch((erro) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email ou senha inválidos!",
        });
        console.log("Error");
        console.log(erro);
      });

    console.log(getEmpresa);
  }

  return (
    <>
      <section className="view-login">
        <div className="div-all-fields">
          <div className="div-arrow-back">
            <a href="/">
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

              <Button type="submit">Entrar</Button>
            </form>

            <div className="footer-login">
              <h2>Não possui cadastro?</h2>
              <button className="button-cadastra">
                <a href="/cadastro">Cadastre-se</a>
              </button>
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
