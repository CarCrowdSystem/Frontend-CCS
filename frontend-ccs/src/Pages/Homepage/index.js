import './Homepage.css'

const Homepage = () => {
    return (
        <>
            <header>
                <nav>
                    <img src='/imgs/logo.png' alt='LOGO' />
                    <ul>
                        <li><a href='#'>Login</a></li>
                    </ul>
                </nav>

                <div className='conteudoBanner'>
                <p>Estacionar com facilidade e segurança é o nosso compromisso,
                    vamos cuidar do seu estacionamento enquanto você cuida dos seus negócios!
                </p>

                <button>Contratar</button>
                </div>

            </header>
        </>
    );
}

export default Homepage;