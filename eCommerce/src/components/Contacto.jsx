
import '../styles/Contacto.css'

export default function Contacto({}) {
  return (
    <>
      <form class="formulario">
        <input type="text" placeholder="Ingrese su nombre" class="campo" />
        <input type="number" placeholder="Ingrese su celular" class="campo" />
        <textarea
          placeholder="Deje su mensaje aquí"
          class="campo area"
        ></textarea>
        <button>Enviar</button>
      </form>
    </>
  );
}
