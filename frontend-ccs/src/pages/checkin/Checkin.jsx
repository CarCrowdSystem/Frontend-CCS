import React from 'react';
import './Checkin.css';
import BotaoCheckout from '../../components/Botoes/BotaoCheckout';
import Vaga from '../dashboard/Componentes/Vaga/Vaga';
// import { Container } from './styles';

function Checkin() {
  return (
    <>
        <div className='container-checkin-pai'>
          <div className='espaco-icone'>
                <BotaoCheckout/>
          </div>
          <div className='container-checkin-filho'>
            <div className='container-checkin'>
              <div className='titulo-checkin'>
                    <h1 className='title-checkin'>Check-in</h1>
              </div>
              <div className='container-painel-pai-checkin'>
                <div className='container-painel-filho-checkin'>
                  <div className='container-painel-pequeno-checkin'>
                    <div  className='painel-pequeno-checkin'>
                    <div className='titulo-card-painel-checkin'>
                        <h3 className='title-card-checkin'>Andares disponíveis</h3>
                      </div>
                      <div className='valor-painel-checkin'>
                        <p className='valor-checkin'>0</p>
                      </div>
                    </div>
                    <div className='painel-pequeno-checkin'>
                      <div className='titulo-card-painel-checkin'>
                        <h3 className='title-card-checkin'>Setores disponíveis</h3>
                      </div>
                      <div className='valor-painel-checkin'>
                        <p className='valor-checkin'>0/0</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className='container-painel-grande-pai-checkin'>
                <div className='container-painel-filho-checkin'>
                  <div className='container-painel-grande-checkin'>
                    <div className='painel-grande-checkin'>
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
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Checkin;