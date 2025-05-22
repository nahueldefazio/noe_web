import Contacto from "../Contacto/Contacto";
import "./servicios.css";
import icono_solo from "../../imagenes/iso solo.png";
import icono_foto from "../../imagenes/icono consultoria.png";

function ConsultorDigital(props) {
  return (
    <>
      <div className="d-flex flex-column align-items-center img_fondo">
        <div className="seccion">
          <h1>Servicios</h1>
          <h3>Consultor Digital</h3>
        </div>
        <img
          src={icono_solo}
          alt="noe-bareille-comunicadora digital"
          className="icono_fondo_solo"
        />
      </div>
      <div className="img_1 ">
        <img src={icono_foto} alt="Noe Bareille" />
      </div>
      <div className="body_margin">
        <div className="d-flex text-start">
          <div className="section_margin">
            <h3>Una solución a problemas concretos</h3>

            <p>
              ¿Empezaste hace poco en el mundo digital y todavía tenes dudas
              sobre como gestionar tus redes?
            </p>
            <p>
              Este servicio consiste en una reunión de 60 minutos en donde debes
              acudir con preguntas y objetivos concretos para que podamos
              trabajar.
            </p>
            <p>
              Además con la contratación de la consultoría recibís una guía
              gratuita para que puedas seguir trabajando en tus redes sociales.
            </p>
            <p>Temas que podemos trabajar</p>
            <ul>
              <li>Objetivos de tu marca</li>
              <li>Identidad de marca</li>
              <li>Planificación de contenido</li>
              <li>Estrategias para crecer</li>
              <li>Ideas de contenido</li>
            </ul>
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

export default ConsultorDigital;
