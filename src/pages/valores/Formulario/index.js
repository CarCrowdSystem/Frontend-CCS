import React from 'react';
import CampoTexto from '../CampoTexto/index';
import './Formulario.css';

// import { Container } from './styles';

function Form(){

    return (
        <>
            <section>
                <form className='form-campo-texto-estacionamento'>
                    <CampoTexto 
                        obrigatorio={true}
                        label="Primeira hora:"
                        placeholder="valor a pegar da API"
                        />
                        <CampoTexto 
                        obrigatorio={true}
                        label="Demais horas:"
                        placeholder="valor a pegar da API"

                        />
                        <CampoTexto 
                        obrigatorio={true}
                        label="Diária:"
                        placeholder="valor a pegar da API"
                        />
                </form>
            </section>
        </>
    )
}

export default Form;