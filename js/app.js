const mostrarCarta = (arg1) => {
  contenedor.innerHTML = '';
  for (let i = 0; i < arg1.length; i++) {
    const num = arg1[i].num;
    const id = arg1[i].id;
    const nombre = arg1[i].nombre;
    const descripcion = arg1[i].descripcion;
    const precio = arg1[i].precio;
    const imagen = arg1[i].img;
    contenedor.innerHTML += `
    <div class='producto' name='producto' id=${id}>
    <p> Numero: ${num} </p>
    <p> ${nombre} </p>
    <p> ${descripcion} </p>
    <p> ${precio} </p>
    <img class='img-producto' src='${imagen}'/>
    </div>`;
  }
};


/* Funcion filtrar tipo */
const filtrar = (filtroSeleccionado, array) => {
  const CartaFiltrada = array.filter((condicion) => {
    /* Busca el filtro seleccionado dentro del tipo de cada pokemon, si
    lo encuentra dara un valor de 0 o mayor a 0, en caso no lo encuentre
    devolvera -1. En este caso 0 es mayor que menos 1, por lo tanto es verdadero*/
    return condicion.tipo.indexOf(filtroSeleccionado) > -1;
  });
  return CartaFiltrada;
};
