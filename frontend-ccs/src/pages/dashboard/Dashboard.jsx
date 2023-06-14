import React, { useEffect } from "react";
import "./Dashboard.css";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout";
import Modal from "../../components/Modal/Modal";
import DadosClienteCheckin from "../../components/Modal/DadosClienteCheckin/DadosClienteCheckin";
import CadastroVagaConcluido from "../../components/Modal/CadastroVagaConcluido/CadastroVagaConcluido";
import ChartComponent from "./Componentes/ChartJs/ChartComponent";
import Teste from "./Group 39.png";
import Vaga from "./Componentes/Vaga/Vaga";
import NavSideBar from "../../components/NavSideBar/index";
import NomeEstacionamento from "./Componentes/NomeEstacionamento";
import api from "../../api.js";
import { useState } from "react";

// import { Container } from './styles';

function Dashboard() {
  var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");
  var sessionNomeEstacionamento = sessionStorage.getItem("NOME_ESTACIONAMENTO");
  var sessionTotalCheckout = sessionStorage.getItem("TOTAL_CHECKOUT_DIARIO");
  var sessionTotalFaturamento = sessionStorage.getItem("TOTAL_FATURAMENTO");
  var sessionAndaresSaida = parseInt(sessionStorage.getItem("ANDARES_SAIDA"));
  var sessionAndaresEntrada = parseInt(
    sessionStorage.getItem("ANDARES_ENTRADA")
  );
  var sessionVagasLivres = parseInt(sessionStorage.getItem("VAGAS_LIVRES"));
  var momentoVagas = sessionStorage.getItem("MOMENTO_VAGAS");

  const [options, setOptions] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value)
  };

  var lista = [];

  useEffect(() => {
    api
      .get(`/historicos/pegar-dados-dash?id=${sessionIdEstacionamento}`)
      .then((response) => {
        lista = response.data.momentoVagas;
        console.log(lista)
        setVagas(response.data.momentoVagas);
        const uniqueOptions = Array.from(new Set(lista.map(lista => lista.andar)));
        setOptions(uniqueOptions)
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
      <NavSideBar />
      <div className="container-dashboard-pai">
        <div className="espaco-icone">
          <BotaoCheckout />
        </div>
        <div className="container-dashboard-filho">
          <div className="container-dashboard">
            <div className="titulo-dashboard">
              <h1 className="title-dash">Dashboard</h1>
            </div>
            <NomeEstacionamento nome={sessionNomeEstacionamento} />
            <div className="container-painel-pai">
              <div className="container-painel-filho">
                <div className="container-painel-pequeno">
                  <div className="painel-pequeno">
                    <div className="titulo-card-painel">
                      <h3 className="title-card">Vagas disponíveis</h3>
                    </div>
                    <div className="valor-painel">
                      <p className="valor-dashboard">{sessionVagasLivres}</p>
                    </div>
                  </div>
                  <div className="painel-pequeno">
                    <div className="titulo-card-painel">
                      <h3 className="title-card">Andares disponíveis</h3>
                    </div>
                    <div className="valor-painel">
                      <p className="valor-dashboard">
                        {sessionAndaresSaida} |{" "}
                        {sessionAndaresEntrada + sessionAndaresSaida}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-painel-filho">
                <div className="container-painel-pequeno">
                  <div className="painel-pequeno">
                    <div className="titulo-card-painel">
                      <h3 className="title-card">
                        Carteira de faturamento diário
                      </h3>
                    </div>
                    <div className="valor-painel">
                      <p className="valor-monetario-dashboard">R$</p>
                      <p className="valor-monetario-dashboard">
                        {sessionTotalFaturamento}
                      </p>
                    </div>
                  </div>
                  <div className="painel-pequeno">
                    <div className="titulo-card-painel">
                      <h3 className="title-card">Total de checkout's diário</h3>
                    </div>
                    <div className="valor-painel">
                      <p className="valor-dashboard">{sessionTotalCheckout}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-painel-grande-pai">
              <div className="container-painel-filho">
                <div className="container-painel-grande">
                  <div className="painel-grande">
                    <div className="container-combobox-andares-dash">      
                      <select
                        className="combobox-andares-dash"
                        name="selecaoAndares"
                        value={selectedOption}
                        onChange={handleSelectChange}
                      >
                        <option value="">Selecione um andar</option>
                        {options.map((option, i) => (
                          <option key={i}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div className="container-vagas-checkin-dash">
                      {vagas.map((vaga, i) => (
                        <React.Fragment key={i}>
                          <Vaga 
                            numero={vaga.numero} 
                            status={vaga.statusRegistro}
                            andar={vaga.andar}
                            andarSelecionado={selectedOption}
                          />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-painel-filho">
                <div className="container-painel-grande">
                  <div className="painel-grande">
                    <div className="titulo-card-painel">
                      <h3 className="title-card">
                        Dias da semana anterior com maiores picos de carro
                      </h3>
                    </div>
                    <div className="div-grafico-dashboard">
                      <img className="img-grafico" src={Teste} alt="" />
                      <ChartComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
