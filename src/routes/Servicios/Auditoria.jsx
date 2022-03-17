import Contacto from "../Contacto/Contacto";
import "./Servicios.css";
import icono_solo from "../../imagenes/iso solo.png";
import icono_foto from "../../imagenes/icono auditotia.png";

function Auditoria(props) {
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
            <h3>Un análisis profundo</h3>

            <p>
              La auditoría es un análisis en profundidad de tu presencia actual
              en redes sociales (demora hasta cinco días).
            </p>
            <p>
              Si sentís que hay un problema en tu comunicación externa pero no
              sabés identificar qué, este servicio es para tu marca.
            </p>
            <p>
              Mido la efectividad de las herramientas de comunicación que estás
              utilizando y como se perciben los mensajes por parte del público
              objetivo.
            </p>
            <p>
              Reviso todas tus cuentas de redes sociales a fondo: descripción,
              contenido, hashtags, identidad visual, textos, bio, foto de
              perfil.
            </p>
            <p>
              Recibis una devolución por escrito y una reunión de 90 minutos
              conmigo para resolver dudas y trabajar en un plan de marketing.
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

export default Auditoria;
