import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function About({}){
    
    const navigate = useNavigate();

return(
<>
    <div className="container my-5">
      <h1 className="mb-4">Bienvenidos a Nuestro E-commerce</h1>
      <p className="lead">
        En nuestra tienda online encontrarás una gran variedad de productos de alta calidad, pensados para brindarte la mejor experiencia de compra.
      </p>
      <p>
        Nuestro objetivo es ofrecerte productos exclusivos, con precios competitivos y un servicio al cliente excepcional. Navega, elige y disfruta de una compra segura y sencilla.
      </p>
      <p>
        Esta página es un proyecto ficticio creado para demostrar habilidades en desarrollo web con React y Bootstrap. ¡Esperamos que te guste!
      </p>

      <h2 className="mt-5">¿Por qué elegirnos?</h2>
      <ul>
        <li>Amplio catálogo de productos.</li>
        <li>Envíos rápidos y seguros.</li>
        <li>Atención personalizada.</li>
        <li>Compra 100% segura.</li>
      </ul>

      <h2 className="mt-5">Contacto</h2>
      <p>
        Si tienes alguna duda o consulta, no dudes en escribirnos en <a href="/contacto">nuestra seccion de contacto</a>
      </p>
    </div>
</>
)
}