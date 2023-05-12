import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "./Componentes/CampoTexto";
import Botao from "./Componentes/Botao";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoCadastrar({
      nome,
      empresa,
      email,
      mensagem,
    });
    setNome("");
    setEmpresa("");
    setEmail("");
    setMensagem("");
  };

  return (
    <>
      <div className="cadastro">
        <section className="formulario">
          <img className="arrowBack" src="/imgs/icons/Vector.png"/>
          <div>
            <img className="logo" src="/imgs/Group 39.png" />
          </div>
          <div className="cadastroBarProgress">
            <h1></h1>
          </div>
          <form onSubmit={aoSalvar}>
            <CampoTexto
              obrigatorio={true}
              label="Nome"
              placeholder="Digite seu nome"
              valor={nome}
              aoAlterado={(valor) => setNome(valor)}
            />
            <CampoTexto
              obrigatorio={true}
              label="Nome da empresa"
              placeholder="Digite o nome de sua empresa"
              valor={empresa}
              aoAlterado={(valor) => setEmpresa(valor)}
            />
            <CampoTexto
              obrigatorio={true}
              label="Email"
              placeholder="seuemail@email.com"
              valor={email}
              aoAlterado={(valor) => setEmail(valor)}
            />
            <CampoTexto
              obrigatorio={true}
              label="Mensagem"
              placeholder=""
              valor={mensagem}
              aoAlterado={(valor) => setMensagem(valor)}
            />
            <div className="divBotao">
              <Botao>Enviar</Botao>
            </div>
          </form>
        </section>

        <img
          className="sideImageCadastro"
          src="./imgs/estacionamento_static.png"
        />
      </div>
    </>
  );
};

export default Formulario;
