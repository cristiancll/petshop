import React from "react";
import image from '../assets/img/dog.svg'
import '../assets/css/componentes/header.css'

const Header = () => {
    return (
        <header className="header container">
            <div className="menu">
                <span className="menu_icon"/>
            </div>
            <div className="header-container">
                <a href="/" className="flex flex--center">
                    <img className="header_logo" src={image} alt="Dog Logo"/>
                    <h1 className="header_title">~Pet Shop</h1>
                </a>
            </div>

            <nav className="menu-header">
                <ul className="menu-items">
                    <li><a href="#" className="menu-item menu-item_enter">Entrar</a></li>
                    <li><a href="#" className="menu-item">Produtos</a></li>
                    <li><a href="/" className="menu-item">Blog</a></li>
                    <li><a href="/about" className="menu-item">Sobre</a></li>
                </ul>
            </nav>
            <div className="menu-header_background"/>
        </header>
    );
};

export default Header;