import './Fotos.css'

const Fotos = () =>{
    return(
        <div className='fotos'>
        <div className='imgLeft'><img src='/imgs/fotoIndex1.png' /></div>
        <div className='imgRight'>
            <div className='cima'>
                <img src='/imgs/fotoIndex2.png' />
                <img src='/imgs/fotoIndex3.png' />
            </div>
            <div className='baixo'>
                <img src='/imgs/fotoIndex4.png' />
                <img src='/imgs/fotoIndex5.png' />
            </div>
        </div>
    </div>
    );
}

export default Fotos;