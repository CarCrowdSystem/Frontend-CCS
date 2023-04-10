import Fotos from './Componentes/Fotos';
import Header from './Componentes/Header';
import Mvv from './Componentes/Mvv';
import SobreNos from './Componentes/SobreNos';
import './Homepage.css'

const Homepage = () => {
    return (
        <>
            <Header />
            <div className='suportButton'><a href='#'><img src='/imgs/icons/apoio-suporte.png' /></a></div>
            <SobreNos />
            <Fotos />
            <Mvv />
        </>
    );
}

export default Homepage;