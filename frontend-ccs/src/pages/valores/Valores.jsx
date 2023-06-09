import React from 'react';
import '../valores/Valores.css';
import NavSideBar from '../../components/NavSideBar/index';
import BotaoCheckout from '../../components/Botoes/BotaoCheckout';
import Form from "../valores/Formulario/index";
import CampoTexto from '../valores/CampoTexto/index';
import Botao from '../../components/Botoes/BotaoEnviar/index';
// import { Container } from './styles';

function valores() {
    return (
        <>
            <div className="fundoValores">
                <NavSideBar />
                <div className='espaco-icone'>
                    <BotaoCheckout />
                </div>
                <div className='contValores'>
                    <h1 className='titleValores'>Alteração de valores</h1>
                        <Form />
                    <Botao>Salvar</Botao>
                </div>
                
            </div>
        </>
    );
}

export default valores;