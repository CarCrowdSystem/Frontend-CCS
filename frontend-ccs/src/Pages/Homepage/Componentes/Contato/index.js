import { useState } from 'react';
import './/Contato.css'

const Contato = (props) => {

    const [nome, setNome] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoRealizarSubmit({
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

    const Botao = (props) => {
        return (
            <button className='botao'>
                {props.children}
            </button>
        )
    }

    const CampoTexto = (props) => {

        const placeholderModificado = `${props.placeholder}...`

        const aoDigitado = (evento) => {
            props.aoAlterado(evento.target.value)
        }

        return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
            </div>
        )
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
                        placeholder="Digite o nome da empresa"
                        valor={empresa}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Email"
                        placeholder="seuemail@email.com"
                        valor={email}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="Mensagem"
                        placeholder=""
                        valor={mensagem}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <div className='divBotao'><Botao>Enviar</Botao></div> 
                </form>
            </section>
            </div>
        </>
    );
}

export default Contato;