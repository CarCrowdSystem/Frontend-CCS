import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    return(
        <>
            <div className="campo-texto">
                <label>{props.label}</label>
                <input  defaultValue={props.valor} required={props.obrigatorio} placeholder={placeholderModificado}/>
            </div>
        </>
    )
}

export default CampoTexto;