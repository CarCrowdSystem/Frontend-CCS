import React from 'react';
import './Dashboard.css';
import BotaoCheckout from '../../components/Botoes/BotaoCheckout';

// import { Container } from './styles';

function Dashboard() {
  return (
    <>
        <div className='container-dashboard-pai'>
          <div className='espaco-icone'>
                <BotaoCheckout/>
          </div>
          <div className='container-dashboard-filho'>
            <div className='container-dashboard'>
              <div className='titulo-dashboard'>
                    <h1 className='title-dash'>Dashboard</h1>
              </div>
              <div className='titulo-nome-estacionamento'>
                    <h2 className='title-nome-estacionamento'>Nome do estacionamento</h2>
              </div>
              <div className='container-painel-pai'>
                <div className='container-painel-filho'>
                  <div className='container-painel-pequeno'>
                    <div  className='painel-pequeno'>
                    <div className='titulo-card-painel'>
                        <h3 className='title-card'>Vagas disponíveis</h3>
                      </div>
                      <div className='valor-painel'>
                        <p className='valor-dashboard'>0</p>
                      </div>
                    </div>
                    <div className='painel-pequeno'>
                      <div className='titulo-card-painel'>
                        <h3 className='title-card'>Setores disponíveis</h3>
                      </div>
                      <div className='valor-painel'>
                        <p className='valor-dashboard'>0/0</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className='container-painel-filho'>
                  <div className='container-painel-pequeno'>
                    <div  className='painel-pequeno'>
                    <div className='titulo-card-painel'>
                        <h3 className='title-card'>Carteira de faturamento diário</h3>
                      </div>
                      <div className='valor-painel'>
                        <p className='valor-monetario-dashboard'>R$</p><p className='valor-monetario-dashboard'>0</p>
                      </div>
                    </div>
                    <div className='painel-pequeno'>
                    <div className='titulo-card-painel'>
                        <h3 className='title-card'>Total de checkout hoje</h3>
                      </div>
                      <div className='valor-painel'>
                        <p className='valor-dashboard'>0</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className='container-painel-grande-pai'>
                <div className='container-painel-filho'>
                  <div className='container-painel-grande'>
                    <div className='painel-grande'>
                    </div>
                  </div>
                  
                </div>
                <div className='container-painel-filho'>
                  <div className='container-painel-grande'>
                    <div className='painel-grande'>
                      <div className='titulo-card-painel'>
                        <h3 className='title-card'>Dias da semana com maiores picos de carro</h3>
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