import "./Home.css";
import Formulario from "./Componentes/Formulario";
import { useState } from "react";
import BotaoContratar from "../../components/Botoes/BotaoContratar";

function Home() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoCadastro = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img src="/imgs/Group 39.png" alt="LOGO" />
            <ul>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
          <div className="textoHeader">
            <p>
              Estacionar com facilidade e segurança é o nosso compromisso, vamos
              cuidar do seu estacionamento enquanto você cuida dos seus
              negócios!
            </p>
          </div>
          <div className="espacoBotaoHeader">
            <a href="/cadastro">
              <BotaoContratar>Contratar</BotaoContratar>
            </a>
          </div>
        </div>
      </header>

      <a href="https://app.pipefy.com/public/form/xt4fI2ub">
        <div className="suportButton">
          <img src="/imgs/icons/apoio-suporte.png" />
        </div>
      </a>

      <div className="aboutUs">
        <div className="container">
          <div className="icones">
            <div className="icon">
              <img src="/imgs/icons/directions_car.png" />
            </div>
            <div className="icon">
              <img src="/imgs/icons/sensors.png" />
            </div>
            <div className="icon">
              <img src="/imgs/icons/account_circle.png" />
            </div>
            <div className="icon">
              <img src="/imgs/icons/currency_exchange.png" />
            </div>
            <div className="icon">
              <img src="/imgs/icons/devices.png" />
            </div>
          </div>
          <div className="tituloAoutUs">
            <h1>O que é a Car Crowd System?</h1>
          </div>
          <div className="textoAboutUs">
            <p>
              Somos uma empresa focada em melhorar a gestão dos estacionamentos.
              Trabalhamos com o objetivo de melhorar a eficiência dos
              funcionários, trazendo a inovação do ticket virtual, gerenciamento
              de funcionários e muito mais. Venha conhecer o nosso sistema!!!
            </p>
          </div>
        </div>
      </div>

      {/*             <div className='fotos'>
                <div className='containerFoto'>
                    <img src='imgs/fotoIndex1.png' className='image' />
                    <div className='overlay'>
                        <div className='text'>Analise seus lucros</div>
                    </div>
                </div>

                <div className='imgRight'>
                    <div className='cima'>

                        <div className='containerFoto'>
                            <img src='imgs/lancer.jpg' className='image' />
                            <div className='overlay'>
                                <div className='text'>Gerencie os veículos</div>
                            </div>
                        </div>
                        <div className='containerFoto'>
                            <img src='imgs/fotoIndex3.png' className='image' />
                            <div className='overlay'>
                                <div className='text'>Agilize a retirada de veículos por mensagem</div>
                            </div>
                        </div>

                    </div>

                    <div className='baixo'>
                        <div className='containerFoto'>
                            <img src='imgs/fotoIndex5.png' className='image' />
                            <div className='overlay'>
                                <div className='text'>Mapeie as vagas</div>
                            </div>
                        </div>
                        <div className='containerFoto'>
                            <img src='imgs/fotoIndex6.jpg' className='image' />
                            <div className='overlay'>
                                <div className='text'>Analise dashboards para tomada de decisão</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <div className="MVV">
        <div className="card">
          <div className="separa">
            <div className="icon">
              <img src="/imgs/icons/missao.png" />
            </div>
          </div>
          <div className="separa">
            <h1>MISSÃO</h1>
          </div>
          <p>
            Oferecer soluções inovadoras e de alta qualidade para os nossos
            clientes, buscando sempre superar suas expectativas
          </p>
        </div>
        <div className="card">
          <div className="separa">
            <div className="icon">
              <img src="/imgs/icons/visao.png" />
            </div>
          </div>
          <div className="separa">
            <h1>VISÃO</h1>
          </div>
          <p>
            Ser uma referência no mercado de tecnologia, destacando-se pela
            excelência dos nossos produtos e serviços, pela constante inovação
          </p>
        </div>
        <div className="card">
          <div className="separa">
            <div className="icon">
              <img src="/imgs/icons/valor.png" />
            </div>
          </div>
          <div className="separa">
            <h1>VALORES</h1>
          </div>
          <p>
            Compromisso com a qualidade, ética, inovação, colaboração,
            responsabilidade
          </p>
        </div>
      </div>

      <Formulario aoCadastrar={(colaborador) => aoNovoCadastro(colaborador)} />

      <footer>
        <div className="separaFooter">
          <div className="bloco">
            <p>Sobre</p>
            <p>Serviços</p>
            <p>Informações</p>
            <p>FAQ</p>
            <p>Jurídico</p>
          </div>

          <div className="bloco">
            <div className="imgBloco">
              <img
                src="imgs/Group 39.png"
                style={{ width: 100, height: 100 }}
              />
            </div>
            <p>Copyright© Car Crowd System</p>
          </div>

          <div
            className="bloco"
            style={{
              display: "flex",
              flexDirection: "-moz-initial",
              justifyContent: "center",
            }}
          >
            <div className="imgBloco">
              <img
                src="/imgs/icons/Group 8.png"
                style={{ width: 200, height: 50 }}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
