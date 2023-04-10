import './/Mvv.css'

const Mvv = () => {
    return(
        <div className='MVV'>
        <div className='card'>
            <div className='separa'>
            <div className='icon'>
                    <img src='/imgs/icons/missao.png' />
                </div>
            </div>

            <h1>MISSÃO</h1>

            <p>
                Oferecer soluções inovadoras e de alta qualidade para os nossos clientes, buscando sempre superar suas expectativas
            </p>
        </div>
        <div className='card'>
        <div className='separa'>
            <div className='icon'>
                    <img src='/imgs/icons/visao.png' />
                </div>
            </div>

            <h1>VISÃO</h1>

            <p>
                Ser uma referência no mercado de tecnologia, destacando-se pela excelência dos nossos produtos e serviços, pela constante inovação
            </p>
        </div>
        <div className='card'>
        <div className='separa'>
            <div className='icon'>
                    <img src='/imgs/icons/valor.png' />
                </div>
            </div>

            <h1>VALORES</h1>

            <p>
                Compromisso com a qualidade, ética, inovação, colaboração, responsabilidade
            </p>
        </div>
    </div>
    );
}

export default Mvv;