import './SobreNos.css'

const SobreNos = () => {
    return(
        <div className='aboutUs'>
        <div className='icones'>
            <div className='icon'><img src='/imgs/icons/directions_car.png' /></div>
            <div className='icon'><img src='/imgs/icons/sensors.png' /></div>
            <div className='icon'><img src='/imgs/icons/account_circle.png' /></div>
            <div className='icon'><img src='/imgs/icons/currency_exchange.png' /></div>
            <div className='icon'><img src='/imgs/icons/devices.png' /></div>
        </div>
        <h1>O que é a Car Crowd System?</h1>
        <p>Somos uma empresa focada em melhorar a gestão dos estacionamentos. Trabalhamos com o objetivo
            de melhorar a eficiência dos funcionários, trazendo a inovação do ticket virtual, sensor de presença nas vagas, gerenciamento de funcionários e muito mais.
            Venha conhecer o nosso sistema!!!
        </p>
    </div>
    );
}

export default SobreNos;