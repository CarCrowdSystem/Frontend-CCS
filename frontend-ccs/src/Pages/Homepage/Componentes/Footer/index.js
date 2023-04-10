import './/Footer.css'

const Footer = () =>{
    return(
        <footer>
            <div className='bloco'>
                <p>Sobre</p><p>Serviços</p><p>Informações</p><p>FAQ</p><p>Jurídico</p>
            </div>
            <div className='bloco'>
                <img src='imgs/logo.png' style={{width: 200}}/>
                <p>Copyright© Car Crowd System</p>
            </div>
            <div className='bloco'>
                <img src='/imgs/icons/Group 8.png' />
            </div>
        </footer>
    );
}

export default Footer;
