import React from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';

// import { Container } from './styles';

function Form(){

    return (
        <>
            <section>
                <form className='form-campo-texto-estacionamento'>
                    <CampoTexto 
                        obrigatorio={true}
                        label="Nome:"
                        placeholder="Aqui vai puxar o nome do estacionamento da API"
                        exibirBotao={true}
                        inputHabilitada={true}
                        />
                        <CampoTexto 
                        obrigatorio={true}
                        label="CEP:"
                        placeholder="Aqui vai puxar o cep do estacionamento da API"
                        exibirBotao={true}
                        inputHabilitada={true}
                        />
                        <CampoTexto 
                        obrigatorio={true}
                        label="Rua:"
                        placeholder="Aqui vai puxar a rua do estacionamento da API"
                        exibirBotao={false}
                        inputHabilitada={false}
                        />
                        <CampoTexto 
                        obrigatorio={true}
                        label="Número:"
                        placeholder="Aqui vai puxar o numero do estacionamento da API"
                        exibirBotao={true}
                        inputHabilitada={true}
                        />
                        <CampoTexto 
                        obrigatorio={true}
                        label="Telefone:"
                        placeholder="Aqui vai puxar o telefone do estacionamento da API"
                        exibirBotao={true}
                        inputHabilitada={true}
                        />
                </form>
            </section>
        </>
    )
}

export default Form;