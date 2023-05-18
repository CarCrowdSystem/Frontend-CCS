// import { useState } from "react";
import "./Login.css";
// import CampoTexto from "./home/Componentes/CampoTexto/inde";
// import Botao from "./Componentes/Botao";


function Login(props){


  // const[email, setEmail] = useState(props.email);
  // const[senha, setSenha] = useState(props.senha);


  // const aoSalvar = (e) => {
  //   e.preventDefault();

  //   const novaMusica = {
  //     email: e.target.email.value,
  //     senha: e.target.senha.value,

  //   };
  // }


    return (
    <>
      <div className="cadastro">
        <section className="formulario">
          <div className="divArrowBack">
            <img className="arrowBack" src="/imgs/icons/Vector.png"/>
          </div>
          <div className="divLogo">
            <img className="logo" src="/imgs/Group 39.png" />
          </div>
          <div className="componentesLogin">
          {/* <form onSubmit={aoSalvar}>
            <CampoTexto
                obrigatorio={true}
                label="Email"
                placeholder="seuemail@email.com"
                valor={email}
                aoAlterado={(valor) => setEmail(valor)}
            />
            <CampoTexto
              obrigatorio={true}
              label="Senha"
              placeholder="***********"
              valor={senha}
              aoAlterado={(valor) => setSenha(valor)}
            />
            <div className="divBotao">
              <Botao>Enviar</Botao>
            </div>
    </form> */}
        </div>
        </section>

        <img
          className="sideImageCadastro"
          src="./imgs/estacionamento_static.png"
        />
      </div>
    </>
  );
};

export default Login;