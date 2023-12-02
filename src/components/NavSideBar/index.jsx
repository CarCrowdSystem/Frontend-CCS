import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./NavSideBar.css";
import Swal from "sweetalert2";

// import { Container } from './styles';

function NavSideBar() {
    const location = useLocation();
    const [isExpended, setExpendedState] = useState(false);
    const [dashboardIcon, setDashboardIcon] = useState("imgs/icons/navIcons/dashBranco.png");
    const [historicoIcon, setHistoricoIcon] = useState("imgs/icons/navIcons/historicoBranco.png");
    const [estacionamentoIcon, setEstacionamentoIcon] = useState("imgs/icons/navIcons/estacionamentoBranco.png");
    const [funcionariosIcon, setFuncionariosIcon] = useState("imgs/icons/navIcons/funcionarioBranco.png");
    const [valoresIcon, setValoresIcon] = useState("imgs/icons/navIcons/valoresBranco.png");

    useEffect(() => {
        // Verifica se a localização atual é a rota da dashboard
        setDashboardIcon(location.pathname === '/dashboard' ? "imgs/icons/navIcons/dashLaranja.png" : "imgs/icons/navIcons/dashBranco.png");

        // Verifica se a localização atual é a rota do histórico
        setHistoricoIcon(location.pathname === '/historico' ? "imgs/icons/navIcons/historicoLaranja.png" : "imgs/icons/navIcons/historicoBranco.png");

        // Verifica se a localização atual é a rota do estacionamento
        setEstacionamentoIcon(location.pathname === '/estacionamento' ? "imgs/icons/navIcons/estacionamentoLaranja.png" : "imgs/icons/navIcons/estacionamentoBranco.png");

        // Verifica se a localização atual é a rota dos funcionários
        setFuncionariosIcon(location.pathname === '/funcionarios' ? "imgs/icons/navIcons/funcionarioLaranja.png" : "imgs/icons/navIcons/funcionarioBranco.png");

        // Verifica se a localização atual é a rota dos valores
        setValoresIcon(location.pathname === '/valores' ? "imgs/icons/navIcons/valoresLaranja.png" : "imgs/icons/navIcons/valoresBranco.png");
    }, [location]);

    const handleLogout = () => {
        // Limpar o sessionStorage
        sessionStorage.clear();

        // Redirecionar para a página de login
        window.location.href = '/login'; 
    };

    const confirmarLogout = () => {
        Swal.fire({
            title: "Deseja realmente sair?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#ff8000",
            cancelButtonColor: "#1b1b1b",
            confirmButtonText: "Sim, sair!",    
            cancelButtonText: "Não, cancelar."
          }).then((result) => {
            if (result.isConfirmed) {
              handleLogout()
            }
          });
    }

    const menuItems = [
        {
            text: "Dashboard",
            icon: dashboardIcon,
            href: "/dashboard",
            alt: "img_dash"
        },
        {
            text: "Histórico",
            icon: historicoIcon,
            href: "/historico",
            alt: "img_historico"
        },
        {
            text: "Estacionamento",
            icon: estacionamentoIcon,
            href: "/estacionamento",
            alt: "img_estacionamento"
        },
        {
            text: "Funcionários",
            icon: funcionariosIcon,
            href: "/funcionarios",
            alt: "img_funcionarios"
        },
        {
            text: "Valores",
            icon: valoresIcon,
            href: "/valores",
            alt: "img_valores"
        },

    ]

    const filteredMenuItems = menuItems.filter(item => {
        return sessionStorage.getItem("IS_ADMIN") !== "0" || !["Estacionamento", "Funcionários", "Valores"].includes(item.text);
      });
      
    
    return (
        <>
            <div className={isExpended ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
                <div className="nav-upper">
                    <div className="nav-heading">
                        {isExpended && (<div className="nav-brand">
                            <img src="imgs/Group 39.png" alt="logo CCS"
                                className={isExpended ? "logo-img" : "logo-img1"} />
                            <h2 className={isExpended ? "h2-nav" : "h2-nav1"}>Car Crowd System</h2>
                        </div>
                        )}
                        <button className={
                            isExpended ? "hamburguer hamburguer-in" : "hamburguer hamburguer-out"
                        }
                            onClick={() => setExpendedState(!isExpended)}
                        >
                            <span className='spanBurguer'></span>
                            <span className='spanBurguer'></span>
                            <span className='spanBurguer'></span>
                        </button>
                    </div>
                    <div className="nav-menu">
                        {filteredMenuItems.map(({ text, icon, href, alt }) => (
                            <a
                                href={href}
                                className={isExpended ? "menu-item" : "menu-item menu-item-NX"}
                            >
                                <img src={icon} alt="navIcons"  />
                                {isExpended && <p>{text}</p>}
                                {!isExpended && <div className="tooltip">{text}</div>}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="nav-footer">
                    {isExpended && (
                        <div className="nav-details">
                            <img src="imgs/Group 39.png" alt="logoFooter" />
                            <div className="nav-footer-info">
                            </div>
                        </div>
                    )}
                    <a onClick={confirmarLogout}><img className='logout-icon' src="imgs/icons/navIcons/logout.png" alt="iconLogout"/>
                    {!isExpended && <div className="tooltip">Sair</div>}</a>
                </div>
            </div>
        </>
    );
}

export default NavSideBar;
