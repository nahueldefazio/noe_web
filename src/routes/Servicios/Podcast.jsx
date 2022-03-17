import Contacto from "../Contacto/Contacto";
import "./Servicios.css";
import icono_solo from "../../imagenes/iso solo.png";
import icono_foto from "../../imagenes/icono podcast.png";

function Podcast(props) {
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
            <h3>Edición de podcast</h3>

            <p>
              ¿Querés empezar con tu podcast pero no sabés editar o no contás
              con el tiempo para hacerlo?
            </p>
            <p>
              Edito tu podcast y producimos juntos/as una apertura, separadores
              y cierre para tu programa.
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

export default Podcast;
