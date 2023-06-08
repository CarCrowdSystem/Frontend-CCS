import React from 'react';
import './Historico.css'
import BotaoCheckout from './../../components/Botoes/BotaoCheckout'
import IconeDownloadCsv from './icon-download-csv.png'
import InfoHistorico from './InfoHistorico/InfoHistorico';
import NavSideBar from '../../components/NavSideBar/index'
// import { Container } from './styles';

function Historico() {
  return (
    <>
        <NavSideBar/>
        <div className='div-pai-historico'>
            <div className='espaco-icone'>
                <BotaoCheckout/>
            </div>
            <div className='container-historico'>
                <div className='div-filho-historico'>
                    <div className='div-title-historico'>
                        <h1 className='titulo-historico'>Histórico</h1>
                    </div>
                    <div className='div-button-baixar-csv'>
                        <div className='div-csv-download'>
                            <p>Baixar arquivo .csv:</p>
                            <button className='button-download-csv'>
                                <img className='img-csv-download' src={IconeDownloadCsv} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='container-itens-historico'>
                        <h2 className='elements-checkout'>Cliente</h2>
                        <h2 className='elements-checkout'>Modelo</h2>
                        <h2 className='elements-checkout'>Placa</h2>
                        <h2 className='elements-checkout'>Andar</h2>
                        <h2 className='elements-checkout'>Vaga</h2>
                        <h2 className='elements-checkout'>Telefone</h2>
                        <h2 className='elements-checkout'>Data</h2>
                        <h2 className='elements-checkout'>Entrada</h2>
                        <h2 className='elements-checkout'>Saida</h2>
                        <h2 className='elements-checkout'>Valor</h2>
                    </div>
                    <div className='div-valores-historico'>
                    <InfoHistorico>Teste</InfoHistorico>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  );
}

export default Historico;