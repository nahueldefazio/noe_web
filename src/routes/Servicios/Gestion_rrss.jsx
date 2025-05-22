import Contacto from "../Contacto/Contacto";
import "./servicios.css";
import icono_solo from "../../imagenes/iso solo.png";
import icono_foto from "../../imagenes/icono redes sociales.png";

function GestionRrss(props) {
  return (
    <>
     <div className="d-flex flex-column align-items-center img_fondo">
        <div className="seccion">
          <h1>Servicios</h1>
          <h3>Gestión de Redes Sociales</h3>
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
            <h3>Un servicio para cada necesidad</h3>
            <p>
              ¿No tenes tiempo para publicar en redes? ¿No sabés que publicar?<br/>
              Con mi servicio Gestión de Redes sociales vas a tener contenidos
              para todo el mes.
            </p>

            <p className="text-decoration-underline fw-bolder">Plan Básico:</p>
            <ul>
              <li>Hasta 5 posteos con sus respectivos copys</li>
              <li>10 historias</li>
              <li>Informa mensual</li>
              <li>Reuniones semanales para trabajar el contenido</li>
            </ul>

            <p className="text-decoration-underline fw-bolder">Plan Medio:</p>
            <ul>
              <li>Hasta 10 posteos con sus respectivos copys</li>
              <li>15 historias</li>
              <li>Informa mensual</li>
              <li>Reuniones semanales para trabajar el contenido</li>
              <li>1 reel</li>
            </ul>

            <p className="text-decoration-underline fw-bolder">Plan Completo:</p>
            <ul>
              <li>Hasta 15 posteos con sus respectivos copys</li>
              <li>20 historias</li>
              <li>Informa mensual</li>
              <li>Reuniones semanales para trabajar el contenido</li>
              <li>3 reel</li>
            </ul>

            <p className="text-decoration-underline fw-bolder">Extra:</p>
            <ul>
              <li>Gestión de publicidad en Facebook e Instagram</li>
              <li>Gestión de comentarios y mensajes</li>
              <li>Posteo extra</li>
              <li>Historia extra</li>
              <li>Calendario con 30 ideas de contenido</li>
              <li>Calendario con fechas y efemérides importantes para tu marca</li>
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

export default GestionRrss;
