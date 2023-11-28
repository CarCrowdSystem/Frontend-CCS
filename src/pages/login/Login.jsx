// import { useState } from "react";
import React, {useState} from "react";
import "./Login.css";
import "../../components/Inputs/input.css";
import Button from "./Componentes/Botao/index";
import api from "../../api.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  function loginEmpresa(e) {
    e.preventDefault();

    const getEmpresa = {
      email: e.target.emailEmpresa.value,
      senha: e.target.senhaEmpresa.value,
    };

    setLoading(true);

    api
      .post(`/funcionarios/login`, getEmpresa)
      .then((response) => {
      console.log(response)
      let timerInterval;
      Swal.fire({
        title: "Carregando dados...",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
        sessionStorage.setItem("ID_ESTACIONAMENTO", response.data.idEstacionamento);
        sessionStorage.setItem("NOME_ESTACIONAMENTO", response.data.nomeEstacionamento);
        navigate("/dashboard")
        pegarValores(response.data.idEstacionamento)
      })
      .catch((erro) => {
        Swal.fire({
          icon: "error",
          title: "Ops...",
          text: "E-mail ou senha inválidos!",
          timer: 4000,
        });
        console.log("Error");
        console.log(erro);
      })
      .finally(() =>{
        setLoading(false);
      });

    console.log(getEmpresa);
  }

  function pegarValores(idEstacionamento){
       api
       .get(`/valores?id=${idEstacionamento}`)
       .then((response) => {
         sessionStorage.setItem("VALOR_PRIMEIRA_HORA", response.data.primeiraHora)
         sessionStorage.setItem("VALOR_DEMAIS_HORAS", response.data.horaAdicional)
         sessionStorage.setItem("VALOR_DIARIA", response.data.diaria)
         console.log(response.data);
       })
       .catch((erro) => {
         console.log(erro);
       });
     }

  return (
    <>            

      <section className="view-login">
        <div className="div-all-fields">
          <div className="div-arrow-back">
            <a href="/">
              <img className="arrowBack" src="/imgs/icons/navIcons/botao-home (1).png" alt="arrowback" />
            </a>
          </div>
          <div className="div-logo-login">
            <img className="logo" src="/imgs/Group 39.png" alt="logo"/>

            <h1 className="login-title">Login</h1>
          </div>
          {loading && <div className="fundoloader"><img className="gif" src="/gif/loading-gif-png-5.gif" alt="logo"/></div>}
          {!loading &&(
          <div className="campo-cadastro">
          
            <form onSubmit={loginEmpresa}>
              <label>E-mail</label>
              <input
                id="name-field"
                className="campo-texto"
                type="text"
                name="emailEmpresa"
                placeholder="Digite seu e-mail"
              />

              <label>Senha</label>
              <input
                className="campo-texto"
                type="password"
                name="senhaEmpresa"
                placeholder="Digite sua senha"
              />

              <button className="btn-entrar-login" type="submit">Entrar</button>
            </form>

            <div className="footer-login">
              <h2>Não possui cadastro?</h2>
              <a  href="/cadastro" className="button-cadastra">
                Cadastre-se
              </a>
            </div>
          </div>
          )}
        </div>
        <div className="image-cadastro">
          <img className="sideImageCadastro" src="./imgs/parking.png" alt="imageCad"/>
        </div>
      </section>
      
    </>
  );
}

export default Login;
