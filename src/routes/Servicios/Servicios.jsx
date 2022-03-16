import React from 'react';
import consultor_digital from "../../imagenes/icono consultoria.png";
import asesoria from "../../imagenes/icono asesoria.png";
import auditoria from "../../imagenes/icono auditotia.png";
import gestion_rrss from "../../imagenes/icono redes sociales.png";
import podcast from "../../imagenes/icono podcast.png";

function Servicios() {
    return (
        <>
            <h2>Servicios</h2>
            <div>
                <img alt="consultor digital" src={ consultor_digital }/>
                <h3>Consultor Digital</h3>
                <h4>Una solucion a problemas concretos.</h4>
                <p> Este servicio consiste en una reunión de 60 minutos, en dónde
                    debes acudir con preguntas u objetivos concretos para que podamos trabajar.
                    Además, con la contratación de la consultoría recibís una guía gratuita
                    para que puedas seguir trabajando en tus redes sociales. </p>
            </div>
            <div>
                <img alt="asesoria" src={ asesoria }/>
                <h3>Asesoria</h3>
                <h4>Personalizada con tu marca.</h4>
                <p> Analizó tu cuenta de redes sociales y trabajamos en mejorar el contenido,
                    la identidad visual y el análisis de resultados.
                    Tres planes distintos de acuerdo a tus necesidades. </p>
            </div>
            <div>
                <img alt="auditoria-logo" src={ auditoria }/>
                <h3>Auditoria</h3>
                <h4>Analizamos juntos tu comunicación.</h4>
                <p> Mido la efectividad de las herramientas de comunicación que estás utilizando y
                    como se perciben los mensajes por parte del público objetivo.
                    Reviso tus cuentas a fondo: descripción, contenido, identidad visual, bio, foto de perfil.
                    Recibís una devolución y una reunión de 30 minutos conmigo para resolver dudas. </p>
            </div>
            <div>
                <img alt="gestion-rrss-logo" src={ gestion_rrss }/>
                <h3>Gestion de redes sociales</h3>
                <h4>¿No tenes tiempo para publicar en redes? </h4>
                <p> ¿No sabés que publicar? Con mi servicio Gestión de Redes sociales vas a tener
                    contenidos para todo el mes. </p>
            </div>
            <div>
                <img alt="podcast-logo" src={ podcast }/>
                <h3>Podcast</h3>
                <h4>Edición de podcast</h4>
                <p> ¿Querés empezar con un podcast y no sabes editar?
                    ¿Tenes una idea pero no tenes tiempo para la edición?
                    Edito tu podcast, armamos una apertura, separadores y cierres de programas
                </p>
            </div>
        </>
    );
}

export default Servicios;
