function TarjetaProyecto({ titulo, descripcion, botonTexto }) {
  const handleClick = () => {
    console.log(`Estás viendo el artículo de ${titulo}`)
  }

  return (
    <>
      <article class="tarjeta-proyecto">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <button onClick={handleClick}>{botonTexto}</button>
      </article>
    </>
  );
}

export default TarjetaProyecto;
