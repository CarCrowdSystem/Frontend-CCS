import React, { useEffect } from "react";
import "./Dashboard.css";
import BotaoCheckout from "../../components/Botoes/BotaoCheckout";
import ChartComponent from "./Componentes/ChartJs/ChartComponent";
import Teste from "./Group 39.png";
import Vaga from "./Componentes/Vaga/Vaga";
import NavSideBar from "../../components/NavSideBar/index";
import NomeEstacionamento from "./Componentes/NomeEstacionamento";
import api from "../../api.js";
import { useState } from "react";

// import { Container } from './styles';
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

  var dia1 = sessionStorage.getItem("DIA1");
  var dia2 = sessionStorage.getItem("DIA2");
  var dia3 = sessionStorage.getItem("DIA3");
  var dia4 = sessionStorage.getItem("DIA4");
  var dia5 = sessionStorage.getItem("DIA5");
  var dia6 = sessionStorage.getItem("DIA6");
  var dia7 = sessionStorage.getItem("DIA7");
  var checkout1 = sessionStorage.getItem("CHECKOUT1");
  var checkout2 = sessionStorage.getItem("CHECKOUT2");
  var checkout3 = sessionStorage.getItem("CHECKOUT3");
  var checkout4 = sessionStorage.getItem("CHECKOUT4");
  var checkout5 = sessionStorage.getItem("CHECKOUT5");
  var checkout6 = sessionStorage.getItem("CHECKOUT6");
  var checkout7 = sessionStorage.getItem("CHECKOUT7");

function Dashboard() {
  const [options, setOptions] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(false)

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  var lista = [];

  useEffect(() => {
    api
      .get(`/historicos/pegar-dados-dash?id=${sessionIdEstacionamento}`)
      .then((response) => {
        bla()

        if(response.data.totalFaturamento == null || response.data.totalFaturamento === "") {
          response.data.totalFaturamento = 0;
        }

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
        lista = response.data.momentoVagas;
        setVagas(lista);
        const uniqueOptions = Array.from(new Set(lista.map(lista => lista.andar)));
        setOptions(uniqueOptions)
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  function bla(){
    api
    .get(`/historicos/total-checkout-semanal?idEstacionamento=${sessionIdEstacionamento}`)
    .then((response) => {
      console.log(response)
      for(var i = 1; i <= 7; i++){
        if(response.data[i-1]!=null){
          sessionStorage.setItem(`DIA${i}`, response.data[i-1]["data"])
          sessionStorage.setItem(`CHECKOUT${i}`, response.data[i-1]["totalCheckouts"])
        } else {
          sessionStorage.setItem(`DIA${i}`, "0-0-0000")
          sessionStorage.setItem(`CHECKOUT${i}`, "0")
        }
      }
    })
    .catch((erro) => {
      console.log(erro);
    });
  }

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
                  <h4> Andar </h4>
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
                            idVaga={vaga.idVaga}
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
                        Quantidades de checkouts da semana
                      </h3>
                    </div>
                    <div className="div-grafico-dashboard">
                      <img className="img-grafico" src={Teste} alt="imgGrafico" />
                      <ChartComponent
                        dia1={dia1}
                        dia2={dia2}
                        dia3={dia3}
                        dia4={dia4}
                        dia5={dia5}
                        dia6={dia6}
                        dia7={dia7}checkout
                        checkout1={checkout1}
                        checkout2={checkout2}
                        checkout3={checkout3}
                        checkout4={checkout4}
                        checkout5={checkout5}
                        checkout6={checkout6}
                        checkout7={checkout7}
                      />
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
