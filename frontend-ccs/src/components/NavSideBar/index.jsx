import React, { useState } from 'react';
import "./NavSideBar.css";

// import { Container } from './styles';

function NavSideBar() {
    const [isExpended, setExpendedState] = useState(false);
    const menuItems = [
        {
            text: "Dashboard",
            icon: "imgs/icons/navIcons/dashBranco.png"
        },
        {
            text: "Histórico",
            icon: "imgs/icons/navIcons/historicoBranco.png"
        },
        {
            text: "Estacionamento",
            icon: "imgs/icons/navIcons/estacionamentoBranco.png"
        },
        {
            text: "Funcionários",
            icon: "imgs/icons/navIcons/funcionarioBranco.png"
        },
        {
            text: "Valores",
            icon: "imgs/icons/navIcons/valoresBranco.png"
        },

    ]
    
    return (
        <>
            <div className={isExpended ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
                <div className="nav-upper">
                    <div className="nav-heading">
                        {isExpended && (<div className="nav-brand">
                            <img src="imgs/Group 39.png" alt="logo CCS"
                                className={isExpended ? "logo-img" : "logo-img1"} />
                            <h2 className={isExpended ? "h2-nav" : "h2-nav1"}> Car Crowd System</h2>
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
                        {menuItems.map(({ text, icon }) => (
                            <a
                                href="#"
                                className={isExpended ? "menu-item" : "menu-item menu-item-NX"}
                            >
                                <img src={icon} alt="" srcSet="" />
                                {isExpended && <p>{text}</p>}
                                {!isExpended && <div className="tooltip">{text}</div>}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="nav-footer">
                    {isExpended && (
                        <div className="nav-details">
                            <img src="imgs/Group 39.png" alt="" srcset="" />
                            <div className="nav-footer-info">
                                <p className='nav-footer-user-name'>User name</p>
                                <p className='nav-footer-user-position'>Store Admin</p>
                            </div>
                        </div>
                    )}
                    <img className='logout-icon' src="imgs/icons/navIcons/logout.png" alt="" srcset="" />
                    {!isExpended && <div className="tooltip">Sair</div>}
                </div>
            </div>
        </>
    );
}

export default NavSideBar;