import React from 'react';
import Form from './Componentes/Formulario';
import './Estacionamento.css';
import Botao from '../home/Componentes/Botao';

// import { Container } from './styles';

function Estacionamento() {
  return (
    <>  
        <div className='espaco-icone'>
            <div className='icone-checkout'></div>
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