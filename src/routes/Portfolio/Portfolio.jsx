import React from 'react';
import g_amanus from '../../imagenes/amanus.png'
import c_del_valle from '../../imagenes/clinica.png'
import emec from '../../imagenes/emergencia.png'
import expasa from '../../imagenes/seguridad.png'
import documental from '../../imagenes/documental.png'
import uno_salud from '../../imagenes/uno.png'
import cafeteria from '../../imagenes/cafeteria.png'
import './portfolio.css'


function Portfolio(props) {
    return (
        <div id="portfolio">
            <div className="portfolio-1 ">
                <div className="text-center m-5">
                    <img src={ g_amanus } alt="clinica" className="img_port"/>
                    <h4>Grupo empresario de salud</h4>
                    <p>Creacion, gestion y analisis de contenido para Facebook e Instagram. Registro y edicion de
                        videos.</p>
                </div>
                <div className="text-center m-5">
                    <img src={ c_del_valle } alt="Clinica de salud"  className="img_port"/>
                    <h4>Clinica de salud</h4>
                    <p>Creacion, gestion y analisis de contenido para Facebook e Instagram. Registro y edicion de
                        videos.</p>
                </div>
                <div className="text-center m-5">
                    <img src={ emec } alt="Empresa de urgencia y emergencia"  className="img_port"/>
                    <h4>Empresa de urgencia y emergencia</h4>
                    <p>Creacion, gestion y analisis de contenido para Facebook e Instagram. Registro y edicion de
                        videos.</p>
                </div>

            </div>
            <div className="portfolio-2 ">
                <div className="text-center m-5">
                    <img src={ expasa } alt="Empresa de seguridad"  className="img_port"/>
                    <h4>Empresa de seguridad</h4>
                    <p>Edicion de videos para comunicacion interna.</p>
                </div>
                <div className="text-center m-5">
                    <img src={ documental } alt="Documental" className="img_port"/>
                    <h4>Documental</h4>
                    <p>Edicion del segundo capitulo de la serie documental "Con la Fuerza del Viento" realizo por el
                        colectivo integrado por estudiantes y docnetes de la UNPSJB</p>
                </div>

            </div>
            <div className="portfolio-2">
                <div className="text-center">
                    <img src={ uno_salud } alt="Prepaga de salud"  className="img_port"/>
                    <h4>Prepaga de salud</h4>
                    <p>Creacion, gestion y analisis de contenido para Facebook e Instagram</p>
                </div>
                <div className="text-center m-5">
                    <img src={ cafeteria } alt="Cafeteria"  className="img_port"/>
                    <h4>Cafeteria</h4>
                    <p>Creacion, gestion y analisis de contenido</p>
                </div>


            </div>
        </div>
    );
}

export default Portfolio;
