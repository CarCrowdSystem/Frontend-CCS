import Fotos from './Componentes/Fotos';
import Header from './Componentes/Header';
import Mvv from './Componentes/Mvv';
import SobreNos from './Componentes/SobreNos';
import './Homepage.css'
import Footer from './Componentes/Footer';
import Formulario from './Componentes/Formulario';
import { useState } from 'react';

const Homepage = () => {

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])
    }


    return (
        <>
            <Header />
            <div className='suportButton'><img src='/imgs/icons/apoio-suporte.png' /></div>
            <SobreNos />
            <Fotos />
            <Mvv />
            <Formulario  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
            <Footer />
        </>
    );
}

export default Homepage;
