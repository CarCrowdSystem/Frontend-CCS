import React, { useEffect } from 'react';
import './Dashboard.css';
import BotaoCheckout from '../../components/Botoes/BotaoCheckout';
import Modal from '../../components/Modal/Modal';
import DadosClienteCheckin from '../../components/Modal/DadosClienteCheckin/DadosClienteCheckin';
import CadastroVagaConcluido from '../../components/Modal/CadastroVagaConcluido/CadastroVagaConcluido';
import ChartComponent from './Componentes/ChartJs/ChartComponent';
import Teste from './Group 39.png'
import Vaga from './Componentes/Vaga/Vaga'
import NavSideBar from '../../components/NavSideBar/index'
import NomeEstacionamento from './Componentes/NomeEstacionamento'


// import { Container } from './styles';

function Dashboard() {
  var sessionIdEstacionamento = sessionStorage.getItem("ID_ESTACIONAMENTO");
  var sessionNomeEstacionamento = sessionStorage.getItem("NOME_ESTACIONAMENTO");
  var sessionTotalCheckout = sessionStorage.getItem("TOTAL_CHECKOUT_DIARIO");
  var sessionTotalFaturamento = sessionStorage.getItem("TOTAL_FATURAMENTO");
  var sessionAndaresSaida = parseInt(sessionStorage.getItem("ANDARES_SAIDA"));
  var sessionAndaresEntrada = parseInt(sessionStorage.getItem("ANDARES_ENTRADA"));
  var sessionVagasLivres = parseInt(sessionStorage.getItem("VAGAS_LIVRES"));
  var sessionMomentoVagas = sessionStorage.getItem("MOMENTO_VAGAS");


  return (
    <>
      <NavSideBar />
      <div className='container-dashboard-pai'>
        <div className='espaco-icone'>
          <BotaoCheckout />
        </div>
        <div className='container-dashboard-filho'>
          <div className='container-dashboard'>
            <div className='titulo-dashboard'>
              <h1 className='title-dash'>Dashboard</h1>
            </div>
            <NomeEstacionamento
              nome={sessionNomeEstacionamento}
            />
            <div className='container-painel-pai'>
              <div className='container-painel-filho'>
                <div className='container-painel-pequeno'>
                  <div className='painel-pequeno'>
                    <div className='titulo-card-painel'>
                      <h3 className='title-card'>Vagas disponíveis</h3>
                    </div>
                    <div className='valor-painel'>
                      <p className='valor-dashboard'>{sessionVagasLivres}</p>
                    </div>
                  </div>
                  <div className='painel-pequeno'>
                    <div className='titulo-card-painel'>
                      <h3 className='title-card'>Andares disponíveis</h3>
                    </div>
                    <div className='valor-painel'>
                      <p className='valor-dashboard'>{sessionAndaresSaida} | {sessionAndaresEntrada + sessionAndaresSaida}</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className='container-painel-filho'>
                <div className='container-painel-pequeno'>
                  <div className='painel-pequeno'>
                    <div className='titulo-card-painel'>
                      <h3 className='title-card'>Carteira de faturamento diário</h3>
                    </div>
                    <div className='valor-painel'>
                      <p className='valor-monetario-dashboard'>R$</p><p className='valor-monetario-dashboard'>{sessionTotalFaturamento}</p>
                    </div>
                  </div>
                  <div className='painel-pequeno'>
                    <div className='titulo-card-painel'>
                      <h3 className='title-card'>Total de checkout's diário</h3>
                    </div>
                    <div className='valor-painel'>
                      <p className='valor-dashboard'>{sessionTotalCheckout}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='container-painel-grande-pai'>
              <div className='container-painel-filho'>
                <div className='container-painel-grande'>
                  <div className='painel-grande'>
                    <div className='container-combobox-andares-dash'>
                      <select className='combobox-andares-dash' name="selecaoAndares" id="teste">
                        <option value="">Térreo</option>
                        <option value="">1° Subsolo</option>
                      </select>
                    </div>
                    <div className='container-vagas-checkin-dash'>
                      <Vaga>1</Vaga>
                      <Vaga>1</Vaga>
                      <Vaga>1</Vaga>
                      <Vaga>1</Vaga>
                      <Vaga>1</Vaga>
                      <Vaga>1</Vaga>
                    </div>
                  </div>
                </div>

              </div>
              <div className='container-painel-filho'>
                <div className='container-painel-grande'>
                  <div className='painel-grande'>
                    <div className='titulo-card-painel'>
                      <h3 className='title-card'>Dias da semana anterior com maiores picos de carro</h3>
                    </div>
                    <div className='div-grafico-dashboard'>
                      <img className='img-grafico' src={Teste} alt="" />
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