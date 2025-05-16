/*
Este componente debe recibir un array de temas como prop y mostrar un botón para cada uno.

Interactividad: Al hacer clic en un botón, cambia su color de fondo dinámicamente.
*/

function GaleriaIntereses({ array}) {
    function randomColor(){
       return("#" + Math.floor(Math.random()*16777215).toString(16));
    }
  return (
    <>
      <div class="container">
            {array.map((interes)=>
                <button style ={{backgroundColor: randomColor()}}>{interes}</button>
            )}
      </div>
    </>
  );
}

export default GaleriaIntereses;
