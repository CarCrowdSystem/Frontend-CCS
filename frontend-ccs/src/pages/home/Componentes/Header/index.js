import './Header.css'

const Header = () => {
    return(
        <header>
        <nav>
            <img src='/imgs/Group 39.png' alt='LOGO' />
            <ul>
                <li><a href='/login'>Login</a></li>
            </ul>
        </nav>
        <p>Estacionar com facilidade e segurança é o nosso compromisso,
            vamos cuidar do seu estacionamento enquanto você cuida dos seus negócios!
        </p>
        <a href='/cadastro'><button>Contratar</button></a>
    </header>
    );
}

export default Header;