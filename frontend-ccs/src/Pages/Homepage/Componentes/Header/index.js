import './/Header.css'

const Header = () => {
    return(
        <header>
        <nav>
            <img src='/imgs/logo.png' alt='LOGO' />
            <ul>
                <li><a href='#'>Login</a></li>
            </ul>
        </nav>
        <p>Estacionar com facilidade e segurança é o nosso compromisso,
            vamos cuidar do seu estacionamento enquanto você cuida dos seus negócios!
        </p>
        <button>Contratar</button>
    </header>
    );
}

export default Header;