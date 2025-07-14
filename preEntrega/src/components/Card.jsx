import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';




function Card({producto}) {




  return (
    <>
      <article id={producto.id} className="tarjetas">
        <h2>{producto.name}</h2>
        <img src={producto.image} alt={producto.name} className="img" />
        <p>{producto.price + "$"}</p>
        <Link to={'/productos/' + producto.id}> <button>Ver Mas...</button> </Link>
      </article>
    </>
  );
}

export default Card;



