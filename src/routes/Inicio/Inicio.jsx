import React from 'react';
import noe_intro from '../../imagenes/Note SIN fondos png-03 (1).png'
import noe_foto from '../../imagenes/Noe foto.png'
import flecha from '../../imagenes/flecha a.png'
import Servicios from "../Servicios/Servicios";
import Portfolio from "../Portfolio/Portfolio";
import Contacto from "../Contacto/Contacto";
import './inicio.css'

function Inicio() {
    return (
        <>
            <div className="d-flex flex-column align-items-center " style={ {background: "#cc5880"} }>

                    <img src={ noe_intro } alt="noe-bareille-comunicadora digital" className="noe_intro fadeInLeftBig"/>


            </div>
            <div className="body_margin">
                <div className="d-flex text-start align-items-center p-5 flex_1024 slideInRight">
                    <img src={ flecha } alt="icono_flecha" className="flecha m-4"/>
                    <div>
                        <h3 className="white fs_sub_title" style={{fontWeight:"600"}}> Quien soy?</h3>
                        <p className="mt-5 white" style={ {fontSize: "22px"} }> Licenciada en Comunicación Social de la
                            UNPS.JB
                            Durante mi carrera descubrí mi pasión por la comunicación
                            digital, en especial por las redes sociales. Eso me llevo
                            a capacitarme y comenzar una Maestría en Comunicación
                            Digital Interactiva. Me dedico a planificar, crear y analizar
                            contenido en Redes Sociales.</p>

                    </div>
                    <img src={ noe_foto } alt="Noe Bareille" className="img_port px-4" style={{width:"268px", marginLeft:"30px"}}/>
                </div>
                <Servicios/>
                <Portfolio/>
            </div>

            <Contacto/>

        </>
    );
}

export default Inicio;
