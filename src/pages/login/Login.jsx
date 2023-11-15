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

//     function userHasAccount(userDataList){
//       for(var i = 0; i < userDataList.length; i++){
//         if(userDataList[i].emailEmpresa === getEmpresa.email && userDataList[i].senhaEmpresa === getEmpresa.senha){
//           return true
//         }
//           return false
//       }
//     }

    api
      //Teste MockAPI
      /*.get(`/login`, getEmpresa) */

      //"Funcional" backEnd ccs
      .post(`/funcionarios/login`, getEmpresa)
      .then((response) => {
      console.log(response)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login efetuado com sucesso!",
          showConfirmButton: false,
          timer: 4000,
        });
        sessionStorage.setItem("ID_ESTACIONAMENTO", response.data.idEstacionamento);
        sessionStorage.setItem("NOME_ESTACIONAMENTO", response.data.nomeEstacionamento);
        pegarDadosDash(response.data.idEstacionamento);
        pegarValores(response.data.idEstacionamento)
      })
      .catch((erro) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email ou senha inválidos!",
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

  function pegarDadosDash(idE){
    api
    .get(`/historicos/pegar-dados-dash?id=${idE}`)
    .then((response) => {
        console.log(response.data)
      sessionStorage.setItem("TOTAL_CHECKOUT_DIARIO", response.data.totalCheckoutDiario);
      sessionStorage.setItem("TOTAL_FATURAMENTO", response.data.totalFaturamento);
      const dadosVagas = Object.values(response.data.momentoVagas)
      sessionStorage.setItem("MOMENTO_VAGAS", dadosVagas);

      const qtdVagasLivres = response.data.momentoVagas.reduce((contador, momento) => {
        if (momento.statusRegistro === 'Saida') {
          contador++;
        }
        return contador;
      }, 0);

      console.log(response.data.momentoVagas)
      sessionStorage.setItem("VAGAS_LIVRES", qtdVagasLivres)
      const andaresSaida = new Set();
      const andaresEntrada = new Set();
      const momentoV = response.data.momentoVagas

      const andaresSeparados = {};

      momentoV.forEach(item => {
          const andar = item.andar;
          if (!andaresSeparados[andar]) {
              andaresSeparados[andar] = [];
          }
          andaresSeparados[andar].push(item);
      });
        const andaresArray = Object.values(andaresSeparados);

        andaresArray.forEach(status => {
            if (status.some(item => item.statusRegistro === "Saida")){
                console.log("Passei aqui")
                andaresSaida.add(status[0].andar);
            } else {
                andaresEntrada.add(status[0].andar);
            }
        })

      sessionStorage.setItem("ANDARES_SAIDA", andaresSaida.size);
      sessionStorage.setItem("ANDARES_ENTRADA", andaresEntrada.size);

      setTimeout(() => navigate("/dashboard"), 1000)
    })
    .catch((erro) => {
        console.log("Deu b.o", erro)
    })
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
              <img className="arrowBack" src="/imgs/icons/Vector.png" alt="arrowback" />
            </a>
          </div>
          <div className="div-logo-login">
            <img className="logo" src="/imgs/Group 39.png" alt="logo"/>

            <h1 className="login-title">Login</h1>
          </div>
          <div className="campo-cadastro">
          {loading && <div className="fundoloader"><img className="gif" src="/gif/loading-gif-png-5.gif" alt="logo"/></div>}
          {!loading &&(
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
            </form>)}

            <div className="footer-login">
              <h2>Não possui cadastro?</h2>
              <button className="button-cadastra">
                <a href="/cadastro">Cadastre-se</a>
              </button>
            </div>
          </div>
        </div>
        <div className="image-cadastro">
          <img className="sideImageCadastro" src="./imgs/parking.png" alt="imageCad"/>
        </div>
      </section>
      
    </>
  );
}

export default Login;
