import React from "react";
import image from '../assets/img/dog.svg'
import '../assets/css/componentes/header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header container">
            <div className="menu">
                <span className="menu_icon"/>
            </div>
            <div className="header-container">
                <Link to="/" className="flex flex--center">
                    <img className="header_logo" src={image} alt="Dog Logo"/>
                    <h1 className="header_title">~Pet Shop</h1>
                </Link>
            </div>

            <nav className="menu-header">
                <ul className="menu-items">
                    <li><Link to="#" className="menu-item menu-item_enter">Entrar</Link></li>
                    <li><Link to="#" className="menu-item">Produtos</Link></li>
                    <li><Link to="/" className="menu-item">Blog</Link></li>
                    <li><Link to="/about" className="menu-item">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu-header_background"/>
        </header>
    );
};

export default Header;