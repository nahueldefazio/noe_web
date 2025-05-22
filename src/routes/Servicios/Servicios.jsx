import React from 'react';
import consultor_digital from "../../imagenes/icono consultoria.png";
import asesoria from "../../imagenes/icono asesoria.png";
import auditoria from "../../imagenes/icono auditotia.png";
import gestion_rrss from "../../imagenes/icono redes sociales.png";
import podcast from "../../imagenes/icono podcast.png";
import './servicios.css'
import '../../App.css'

function Servicios() {
    return (
        <div className="servicios_body">
            <h2 className="margin_title white py-4" style={ {fontSize: "40px"} }>Servicios</h2>
            <div className="d-flex m-5 m_0 zoom">
                <img alt="consultor digital" src={ consultor_digital } className="img_servicios mx-5 "/>
                <div>
                    <h3 className="white">Consultor Digital</h3>
                    <h4>Una solucion a problemas concretos.</h4>
                    <p style={ {fontSize: "16px"} } className="margin_p "> Este servicio consiste en una reunión de 60
                        minutos, en dónde
                        debes acudir con preguntas u objetivos concretos para que podamos trabajar.
                        Además, con la contratación de la consultoría recibís una guía gratuita
                        para que puedas seguir trabajando en tus redes sociales. </p>
                </div>

            </div>
            <div className="d-flex m-5 m_0 zoom">
                <img alt="asesoria" src={ asesoria } className="img_servicios mx-5 "/>
                <div>
                    <h3 className="white">Asesoria</h3>
                    <h4>Personalizada con tu marca.</h4>
                    <p style={ { fontSize: "16px"} } className="margin_p"> Analizó tu cuenta de
                        redes sociales y trabajamos en mejorar el
                        contenido,
                        la identidad visual y el análisis de resultados.
                        Tres planes distintos de acuerdo a tus necesidades. </p>
                </div>

            </div>
            <div className="d-flex m-5 m_0 zoom">
                <img alt="auditoria-logo" src={ auditoria } className="img_servicios mx-5 "/>
                <div>
                    <h3 className="white">Auditoria</h3>
                    <h4>Analizamos juntos tu comunicación.</h4>
                    <p style={ { fontSize: "16px"} } className="margin_p"> Mido la efectividad de
                        las herramientas de comunicación que estás utilizando y
                        como se perciben los mensajes por parte del público objetivo.
                        Reviso tus cuentas a fondo: descripción, contenido, identidad visual, bio, foto de perfil.
                        Recibís una devolución y una reunión de 30 minutos conmigo para resolver dudas. </p>
                </div>

            </div>
            <div className="d-flex m-5 m_0 zoom">
                <img alt="gestion-rrss-logo" src={ gestion_rrss } className=" img_servicios mx-5 "/>
                <div>
                    <h3 className="white">Gestion de redes sociales</h3>
                    <h4>¿No tenes tiempo para publicar en redes? </h4>
                    <p style={ { fontSize: "16px"} } className="margin_p"> ¿No sabés que publicar? Con mi servicio
                        Gestión de Redes sociales vas a tener
                        contenidos para todo el mes. </p>
                </div>

            </div>
            <div className="d-flex p-5 p_0 zoom">
                <img alt="podcast-logo" src={ podcast } className="img_servicios mx-5 "/>
                <div>
                    <h3 className="white">Podcast</h3>
                    <h4>Edición de podcast</h4>
                    <p style={ {fontSize: "16px"} } className="margin_p"> ¿Querés empezar con un podcast y no sabes
                        editar?
                        ¿Tenes una idea pero no tenes tiempo para la edición?
                        Edito tu podcast, armamos una apertura, separadores y cierres de programas
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Servicios;
