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

    const aoNovoCadastro = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])
    }


    return (
        <>
            <Header />
            <a href='https://app.pipefy.com/public/form/xt4fI2ub'><div className='suportButton'><img src='/imgs/icons/apoio-suporte.png' /></div></a>
            <SobreNos />
            <Fotos />
            <Mvv />
            <Formulario  aoCadastrar={colaborador => aoNovoCadastro(colaborador)}/>
            <Footer />
        </>
    );
}

export default Homepage;
