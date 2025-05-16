function EquipoLabs({ array }) {
  return (
    <>
      <div class="container">
        {array.map((persona) => (
          <article class="articulo">
            <img src={persona.imagen} alt={`Imagen de ${persona.nombre}`} />
            <h2>{persona.nombre}</h2>
            <p>{persona.rol}</p>
          </article>
        ))}
      </div>
    </>
  );
}

export default EquipoLabs;
