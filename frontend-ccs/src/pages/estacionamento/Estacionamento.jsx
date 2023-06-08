import React from 'react';
import Form from './Componentes/Formulario';
import './Estacionamento.css';
import Botao from '../../components/Botoes/BotaoEnviar/index';
import BotaoCheckout from '../../components/Botoes/BotaoCheckout/index';
import NavSideBar from '../../components/NavSideBar/index'

// import { Container } from './styles';

function Estacionamento() {
  return (
    <>  
        <NavSideBar/>
        <div className='espaco-icone'>
            <BotaoCheckout/>
        </div>
        <div className='div-formulario'>
            <div className='titulo-estacionamento'>
                <h1 className='title-estacionamento'>
                    Estacionamento
                </h1>
            </div>
            <div className='form-estacionamento'>
              <Form/>
            </div>
            <div className='div-botao-alterar'>
              <Botao>Alterar</Botao>
            </div>
        </div>
    </>
  )
}

export default Estacionamento;