import React from 'react';
import '../valores/Valores.css';
import NavSideBar from '../../components/NavSideBar/index';
import BotaoCheckout from '../../components/Botoes/BotaoCheckout';
import CampoTexto from '../valores/CampoTexto/index';
import Botao from '../../components/Botoes/BotaoEnviar/index';
// import { Container } from './styles';

function valores() {
    return (
        <>
            <div className="fundoValores">
                <NavSideBar />
                <div className='espaco-icone'>
                    <BotaoCheckout/>
                </div>
                <div className='contValores'>
                    <h1 className='titleValores'>Alteração de valores</h1>
                    <CampoTexto
                        obrigatorio={true}
                        label="Primeira hora:"
                        placeholder="1.00"
                        exibirBotao={true}
                        inputHabilitada={false}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Demais horas:"
                        placeholder="5.00"
                        exibirBotao={true}
                        inputHabilitada={false}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Diária:"
                        placeholder="5.00"
                        exibirBotao={true}
                        inputHabilitada={false}
                    />
                    <Botao>Salvar</Botao>
                </div>
            </div>
        </>
    );
}

export default valores;