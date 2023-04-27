import './Fotos.css'

const Fotos = () => {
    return (
        <div className='fotos'>
            <div className='imgLeft'>

                <img src='/imgs/fotoIndex1.png' />
                <div class="overlay">
                    <div class="text">Hello World</div>
                </div>
                
            </div>
            <div className='imgRight'>
                <div className='cima'>
                    <img src='/imgs/lancer.jpg' />
                    <img src='/imgs/fotoIndex3.png' />
                </div>
                <div className='baixo'>
                    <img src='/imgs/fotoIndex5.png' />
                    <img src='/imgs/fotoIndex6.jpg' />
                </div>
            </div>
        </div>
    );
}

export default Fotos;