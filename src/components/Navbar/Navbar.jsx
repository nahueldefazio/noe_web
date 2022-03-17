import React from 'react';
import './navbar.css'
import '../../App.css'
import { Link } from 'react-scroll'
import { NavLink } from "react-router-dom";
import instagram from '../../imagenes/Instagram.png'
import facebook from '../../imagenes/Facebook.png'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg body_margin ">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active white" aria-current="page" to={ '/' }>Inicio</NavLink>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle white" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Servicios
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className={ 'text-decoration-none d-flex justify-content-center' }
                                             to={ 'consultor_digital' }>Consultor Digital</NavLink></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><NavLink
                                    className={ 'text-decoration-none d-flex justify-content-center' }
                                    to={ 'asesoria' }>Asesoria</NavLink>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><NavLink
                                    className={ 'text-decoration-none d-flex justify-content-center' }
                                    to={ 'auditoria' }>Auditoria</NavLink>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><NavLink className={ 'text-decoration-none d-flex justify-content-center' }
                                             to={ 'gestion_rrss' }>Gestion
                                    de redes sociales</NavLink></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><NavLink
                                    className={ 'text-decoration-none d-flex justify-content-center' }
                                    to={ 'podcast' }>Podcast</NavLink>
                                    
                                </li>
                            </ul>
                        </li>
                        <Link className="nav-link white" to="portfolio" spy={ true } smooth={ true } offset={ 50 }
                              duration={ 1000 }>Portfolio</Link>
                        <Link className="nav-link white" to="contacto" spy={ true } smooth={ true } offset={ 50 }
                              duration={ 1000 }>Contacto</Link>
                    </div>
                    <div>
                        <a href="http://www.instagram.com" target="_blank">
                            <img src={ instagram } alt="instagram" className="ico_nav"/>
                        </a>
                        <a href="http://www.facebook.com" target="_blank">
                            <img src={ facebook } alt="facebook" className="ico_nav"/>
                        </a>


                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
