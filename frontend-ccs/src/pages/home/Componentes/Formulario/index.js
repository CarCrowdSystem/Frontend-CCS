import { useState } from 'react';
import './Formulario.css'
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            empresa,
            email,
            mensagem
        })
        setNome('')
        setEmpresa('')
        setEmail('')
        setMensagem('')
    }

    return (
        <>
            <div className='contato'>
                <h1>Contato</h1>

                <section className='formulario'>
                    <form onSubmit={aoSalvar}>
                        <h2>Entre em contato conosco preenchendo os campos abaixo.</h2>
                        <CampoTexto
                            obrigatorio={true}
                            label="Nome"
                            placeholder="Digite seu nome"
                            valor={nome}
                            aoAlterado={valor => setNome(valor)}
                        />
                        <CampoTexto
                            obrigatorio={true}
                            label="Nome da empresa"
                            placeholder="Digite o nome de sua empresa"
                            valor={empresa}
                            aoAlterado={valor => setEmpresa(valor)}
                        />
                        <CampoTexto
                            obrigatorio={true}
                            label="Email"
                            placeholder="seuemail@email.com"
                            valor={email}
                            aoAlterado={valor => setEmail(valor)}
                        />
                        <CampoTexto
                            obrigatorio={true}
                            label="Mensagem"
                            placeholder=""
                            valor={mensagem}
                            aoAlterado={valor => setMensagem(valor)}
                        />
                        <div className='divBotao'>
                            <Botao>Enviar</Botao>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Formulario;