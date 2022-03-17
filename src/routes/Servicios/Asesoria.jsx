import Contacto from "../Contacto/Contacto";
import "./Servicios.css";
import icono_solo from "../../imagenes/iso solo.png";
import icono_foto from "../../imagenes/icono asesoria.png";

function Asesoria(props) {
  return (
    <>
      <div className="d-flex flex-column align-items-center img_fondo">
        <div className="seccion">
          <h1>Servicios</h1>
          <h3>Asesoría</h3>
        </div>
        <img
          src={icono_solo}
          alt="noe-bareille-comunicadora digital"
          className="icono_fondo_solo"
        />
      </div>
      <div className="img_1">
        <img src={icono_foto} alt="Noe Bareille" />
      </div>
      <div className="body_margin">
        <div className="d-flex text-start">
          <div className="section_margin">
            <h3>Un plan para cada necesidad</h3>
            <p ><spam className="text-decoration-underline fw-bolder">
              Servicio express:</spam>
              <br />
              En un lapso de 72 hs.
              <br />
              Analizo tu cuenta de Instagram y trabajamos en mejorar el
              contenido, la identidad visual y el análisis de resultados.
            </p>

            <p><spam className="text-decoration-underline fw-bolder">
              Plan Básico:</spam>
              <br />
              Recibís un documento con:
            </p>
            <ul>
              <li>Análisis de la cuenta</li>
              <li>Optimización de biografía</li>
              <li>Uso de hashtags</li>
              <li>Historias destacadas e interactivas</li>
              <li>Plan de contenido básico</li>
              <li>Calendario semanal</li>
              <li>3 guías con consejo para potenciar tu marca</li>
            </ul>

            <p><spam className="text-decoration-underline fw-bolder">
              Plan Medio:</spam>
              <br />
              Encuentro vía meet de 40 minutos y recibís un documento con:
            </p>
            <ul>
              <li>Análisis de la cuenta</li>
              <li>Optimización de biografía</li>
              <li>Uso de hashtags</li>
              <li>Historias destacadas e interactivas</li>
              <li>Plan de contenido básico</li>
              <li>Calendario semanal</li>
              <li>3 guías con consejo para potenciar tu marca</li>
            </ul>
            <p>
              La reunión se agenda una vez enviado el documento con el análisis
              de la cuenta para que podamos trabajar sobre eso.
            </p>

            <p><spam className="text-decoration-underline fw-bolder">
              Plan Completo:</spam>
              <br />
              Un encuentro vía meet de 60 minutos y recibís un documento con:
            </p>
            <ul>
              <li>Análisis de la cuenta</li>
              <li>Optimización de biografía</li>
              <li>Uso de hashtags</li>
              <li>Historias destacadas e interactivas</li>
              <li>Plan de contenido básico</li>
              <li>Calendario semanal</li>
              <li>3 guías con consejo para potenciar tu marca</li>
            </ul>
            <p>
              La reunión se agenda una vez enviado el documento con el análisis
              de la cuenta para que podamos trabajar sobre eso.
            </p>

            <button type="button" className="btn button_style mt-4">
              Si, quiero consultar
            </button>
          </div>
        </div>
      </div>
      <Contacto />
    </>
  );
}

export default Asesoria;
