import './Fotos.css'

const Fotos = () => {
    return (
        <div className='fotos'>

            <div className='container'>
                <img src='imgs/fotoIndex1.png' className='image' />
                <div className='overlay'>
                    <div className='text'>Analise seus lucros</div>
                </div>
            </div>
            <div className='imgRight'>
                <div className='cima'>

                    <div className='container'>
                        <img src='imgs/lancer.jpg' className='image' />
                        <div className='overlay'>
                            <div className='text'>Gerencie os veículos</div>
                        </div>
                    </div>
                    <div className='container'>
                        <img src='imgs/fotoIndex3.png' className='image' />
                        <div className='overlay'>
                            <div className='text'>Agilize a retirada de veículos por mensagem</div>
                        </div>
                    </div>
                    
                </div>

                <div className='baixo'>
                    <div className='container'>
                        <img src='imgs/fotoIndex5.png' className='image' />
                        <div className='overlay'>
                            <div className='text'>Mapeie as vagas</div>
                        </div>
                    </div>
                    <div className='container'>
                        <img src='imgs/fotoIndex6.jpg' className='image' />
                        <div className='overlay'>
                            <div className='text'>Analise dashboards para tomada de decisão</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fotos;