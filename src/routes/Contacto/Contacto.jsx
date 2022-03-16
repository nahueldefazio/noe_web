import React from 'react';
import './contacto.css'
import instagram from "../../imagenes/Instagram.png";
import facebook from "../../imagenes/Facebook.png";

function Contacto() {
    return (
        <div className="d-flex align-items-center justify-content-around contacto_container" id="contacto">
            <div>
                <h4>Contacto</h4>
                <p>Email: noeperalta43@gmail.com</p>
                <p>WhatsApp: 54 9 2974 57-5881</p>
            </div>
            <div className="text-end">
                <div>
                    <span>Noe Bareille</span>
                    <a href="http://www.facebook.com" target="_blank">
                        <img src={facebook} alt="facebook" className="ico_nav"/>
                    </a>
                </div>
                <div>
                    <span>@soynoebareille</span>
                    <a href="http://www.instagram.com" target="_blank">
                        <img src={instagram} alt="instagram" className="ico_nav"/>
                    </a>
                </div>
            </div>
        </div>




    );
}

export default Contacto;
