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
import Swal from "sweetalert2";

function Dashboard() {
  const [options, setOptions] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [lastDataChange, setLastDataChange] = useState(0);
  const [checkGrafico, setCheckGrafico] = useState(true);
  const [divVisivel, setDivVisivel] = useState(true);
  const [temPedidoCheckout, setTemPedidoCheckout] = useState(false);
  const [temNovaReserva, setTemNovaReserva] = useState(false);
  const [qtdReserva, setQtdReserva] = useState(0);
  const [estacionamentoInfo, setEstacionamentoInfo] = useState({
    id: null,
    nome: null,
    totalCheckout: null,
    totalFaturamento: null,
    andaresSaida: null,
    andaresEntrada: null,
    vagasLivres: null,
    momentoVagas: null,
    dias: [{ "data": "0-0-0000", "totalCheckouts": 0 }],
  });
  const [reservaInfo, setReservaInfo] = useState({
    id: null,
    nome: null,
    data: null,
    hora: null,
    telefone: null,
    modelo: null,
    marca: null
  });

  useEffect(() => {
    fetchData();
    let timerInterval;
      Swal.fire({
        title: "Carregando dados",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      })
      setInterval(() => {
        fetchData(); // Chama a função fetchData a cada 1 minuto
      }, 30000);
  }, []);

  useEffect(() => {
    // Este useEffect é executado sempre que estacionamentoInfo.dias muda
    setLastDataChange(Date.now());
  }, [estacionamentoInfo.dias]);

  useEffect(() => {
    // Este useEffect é executado sempre que estacionamentoInfo.dias muda
    setLastDataChange(Date.now());
  }, [reservaInfo]);

  useEffect(() => {
    // Este useEffect é executado sempre que estacionamentoInfo.dias muda
    setLastDataChange(Date.now());
    if(reservaInfo.length>=0 && checkGrafico && qtdReserva<reservaInfo.length) {
      setTemNovaReserva(true)
      setQtdReserva(reservaInfo.length)
    }
  }, [reservaInfo]);

  const fetchData = async () => {
    try {
      const idEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");
      const nomeEstacionamento = sessionStorage.getItem("NOME_ESTACIONAMENTO");
      const responseDados = await api.get(`/historicos/pegar-dados-dash?id=${idEstacionamento}`);
      const responseTotalCheckout = await api.get(`/historicos/total-checkout-semanal?idEstacionamento=${idEstacionamento}`);
      const responseReserva = await api.get(`/historicos/reserva-hoje?idEstacionamento=${idEstacionamento}`);
      const responseCheckouts = await api.get(`/historicos/pegar-checkouts?id=${idEstacionamento}`);
      const checkoutsData = responseCheckouts.data;
      const data = responseDados.data;
      const totalCheckoutData = responseTotalCheckout.data;
      const reservaData = responseReserva.data

      setTemPedidoCheckout((checkoutsData.length > 0) ? true : false)

      let lista = data.momentoVagas;

      setVagas(lista);
      const uniqueOptions = Array.from(new Set(lista.map((item) => item.andar)));
      setOptions(uniqueOptions);

      if (uniqueOptions.length > 0) {
        setSelectedOption(uniqueOptions[0]);
      }

      const andaresSeparados = {};
      const andaresSaida = new Set();
      const andaresEntrada = new Set();

      lista.forEach(item => {
        const andar = item.andar;
        if (!andaresSeparados[andar]) {
          andaresSeparados[andar] = [];
        }
        andaresSeparados[andar].push(item);
      });

      const andaresArray = Object.values(andaresSeparados);

      andaresArray.forEach(status => {
        if (status.some(item => item.statusRegistro === "Saida")) {
          andaresSaida.add(status[0].andar);
        } else {
          andaresEntrada.add(status[0].andar);
        }
      })

      const diasMapeados = totalCheckoutData.map(item => ({
        data: item["data"] || "",
        checkout: item["totalCheckouts"] || "0",
      }));

      setEstacionamentoInfo({
        id: idEstacionamento,
        nome: nomeEstacionamento,
        totalCheckout: data.totalCheckoutDiario || "0",
        totalFaturamento: data.totalFaturamento || "0.0",
        andaresSaida: andaresSaida.size || 0,
        andaresEntrada: andaresEntrada.size || 0,
        vagasLivres: lista.filter((momento) => momento.statusRegistro === 'Saida').length,
        momentoVagas: lista || [],
        dias: diasMapeados,
      });
      setReservaInfo(reservaData);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  function trocar() {
    setCheckGrafico(!checkGrafico)
    setDivVisivel(!divVisivel)
    setTemNovaReserva(false)
  }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <NavSideBar />
      <div className="container-dashboard-pai">
        <div className="espaco-icone">
        <BotaoCheckout temPedidoCheckout={temPedidoCheckout} fetchData={fetchData} />
        </div>
        <div className="container-dashboard-filho">
          <div className="container-dashboard">
            <div className="titulo-dashboard">
              <h1 className="title-dash">Dashboard</h1>
            </div>
            <NomeEstacionamento nome={estacionamentoInfo.nome} />
            <div className="container-painel-pai">
              <div className="container-painel-filho">
                <div className="container-painel-pequeno">
                  <div className="painel-pequeno">
                    <div className="titulo-card-painel">
                      <h3 className="title-card">Vagas disponíveis</h3>
                    </div>
                    <div className="valor-painel">
                      <p className="valor-dashboard">{estacionamentoInfo.vagasLivres || '...'}</p>
                    </div>
                  </div>
                  <div className="painel-pequeno">
                    <div className="titulo-card-painel">
                      <h3 className="title-card">Andares disponíveis</h3>
                    </div>
                    <div className="valor-painel">
                      <p className="valor-dashboard">
                        {(estacionamentoInfo.andaresSaida != null && estacionamentoInfo.andaresEntrada != null) ?
                          `${estacionamentoInfo.andaresSaida} | ${estacionamentoInfo.andaresEntrada + estacionamentoInfo.andaresSaida}` : '...'}
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
                    {sessionStorage.getItem("IS_ADMIN") === true ? undefined :<p className="valor-monetario-dashboard">R$</p>}
                      <p className="valor-monetario-dashboard">
                      {sessionStorage.getItem("IS_ADMIN") === true ? "Restrito" : estacionamentoInfo.totalFaturamento || '...'}
                      </p>
                    </div>
                  </div>
                  <div className="painel-pequeno">
                    <div className="titulo-card-painel">
                      <h3 className="title-card">Total de checkouts diário</h3>
                    </div>
                    <div className="valor-painel">
                      <p className="valor-dashboard">{estacionamentoInfo.totalCheckout || '...'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-painel-grande-pai">
              <div className="container-painel-filho">
                <div className="container-painel-grande">
                  <div className="painel-grande">
                    <div className="container-andares-dash">
                      <h4 className="titulo-andares-dash"> Andar </h4>
                      <div className="container-combobox-andares-dash">
                        <select
                          className="combobox-andares-dash"
                          name="selecaoAndares"
                          value={selectedOption}
                          onChange={handleSelectChange}
                        >
                          <option value="">Nº</option>
                          {options.map((option, i) => (
                            <option key={i}>{option}</option>
                          ))}
                        </select>
                      </div>
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
                            fetchData={fetchData}
                          />
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-painel-filho">
                <div className="container-painel-grande">
                  <div className="painel-grande" id="checkouts-painel" style={{ display: divVisivel ? "flex" : "none" }}>
                    <div className="titulo-card-painel">
                      <h3 className="title-card">
                        Quantidades de checkouts dos ultimos dias
                      </h3>
                    </div>
                    <div className="div-grafico-dashboard">
                      <img className="img-grafico" src={Teste} alt="imgGrafico" />
                      <ChartComponent
                        dia1={(estacionamentoInfo.dias[0] != null) ? estacionamentoInfo.dias[0]["data"] : 0}
                        dia2={(estacionamentoInfo.dias[1] != null) ? estacionamentoInfo.dias[1]["data"] : 0}
                        dia3={(estacionamentoInfo.dias[2] != null) ? estacionamentoInfo.dias[2]["data"] : 0}
                        dia4={(estacionamentoInfo.dias[3] != null) ? estacionamentoInfo.dias[3]["data"] : 0}
                        dia5={(estacionamentoInfo.dias[4] != null) ? estacionamentoInfo.dias[4]["data"] : 0}
                        dia6={(estacionamentoInfo.dias[5] != null) ? estacionamentoInfo.dias[5]["data"] : 0}
                        dia7={(estacionamentoInfo.dias[6] != null) ? estacionamentoInfo.dias[6]["data"] : 0}
                        checkout1={(estacionamentoInfo.dias[0] != null) ? estacionamentoInfo.dias[0]["checkout"] : "0-0-0000"}
                        checkout2={(estacionamentoInfo.dias[1] != null) ? estacionamentoInfo.dias[1]["checkout"] : "0-0-0000"}
                        checkout3={(estacionamentoInfo.dias[2] != null) ? estacionamentoInfo.dias[2]["checkout"] : "0-0-0000"}
                        checkout4={(estacionamentoInfo.dias[3] != null) ? estacionamentoInfo.dias[3]["checkout"] : "0-0-0000"}
                        checkout5={(estacionamentoInfo.dias[4] != null) ? estacionamentoInfo.dias[4]["checkout"] : "0-0-0000"}
                        checkout6={(estacionamentoInfo.dias[5] != null) ? estacionamentoInfo.dias[5]["checkout"] : "0-0-0000"}
                        checkout7={(estacionamentoInfo.dias[6] != null) ? estacionamentoInfo.dias[6]["checkout"] : "0-0-0000"}
                        key={lastDataChange}
                      />
                    </div>
                  </div>
                  <div className="painel-grande" id="reservas-painel" style={{ display: divVisivel ? "none" : "flex" }}>
                    <div className="titulo-card-painel">
                      <h3 className="title-card">
                        Reservas de hoje
                      </h3>
                    </div>
                    <div className="div-grafico-dashboard">
                      <div className="style-tabela" style={{ maxHeight: "86%", overflowY: "auto", paddingRight: "2%"}}>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tbody>
                            <tr>
                              <td className="top center"><strong>Nome</strong></td>
                              <td className="top center"><strong>Telefone</strong></td>
                              <td className="top center"><strong>Modelo</strong></td>
                              <td className="top center"><strong>Marca</strong></td>
                              <td className="top center"><strong>Data</strong></td>
                              <td className="top center"><strong>Hora</strong></td>
                            </tr>
                          </tbody>
                          <tbody id="tbody-reserva">
                            {Array.isArray(reservaInfo) && reservaInfo.length > 0 ? (
                              reservaInfo.map((reserva, index) => (
                                <tr key={index}>
                                  <td align="center">{reserva.nome}</td>
                                  <td align="center">{reserva.telefone}</td>
                                  <td align="center">{reserva.modelo}</td>
                                  <td align="center">{reserva.marca}</td>
                                  <td align="center">{reserva.data}</td>
                                  <td align="center">{reserva.hora}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="6" align="center">
                                  Nenhuma reserva disponível
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="check-box-dash">
                  <div className="checkbox-wrapper-56">
                    <div className="align-checkbox" onClick={trocar}>
                      <input checked={checkGrafico ? "checkbox" : ""} type="checkbox" id="check-grafico" />
                      <div className="checkmark">Checkouts</div>
                    </div>
                    <div className={(temNovaReserva) ? "checkout-piscar align-checkbox" : "align-checkbox"} onClick={trocar}>
                      <input checked={checkGrafico ? "" : "checkbox"} type="checkbox" id="check-reserva"/>
                      <div className="checkmark">Reservas</div>
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
