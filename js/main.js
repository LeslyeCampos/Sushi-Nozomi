const dataCopiada = CARTA.carta.slice(0, 40);
const contenedor = document.getElementById('contenedor');

let nosotros = document.getElementById('nosotros');
//submenu
let promos = document.getElementById('promos');
let hand = document.getElementById('hand');
let promoespecial = document.getElementById('promoespecial');
let titulocarta = document.getElementById('titulocarta')
//
let catering = document.getElementById('catering');
let contacto = document.getElementById('contacto');
let logotipo = document.getElementById('logotipo');

let vista1 = document.getElementById('vista1')

ocultar=()=>{
  vista1.classList.add("hide");
  vistaNosotros.classList.add("hide");
  vistaCarta.classList.add("hide");
  vistaCatering.classList.add("hide");
  vistaContacto.classList.add("hide");
}

mostrar=(argVista)=>{
  argVista.classList.remove("hide");
}

logotipo.addEventListener("click", ()=>{
  ocultar();
  ocultarMenu();
  mostrar(vista1);
});

nosotros.addEventListener("click", ()=>{
  ocultar();
  ocultarMenu();
  mostrar(vistaNosotros);

});

catering.addEventListener("click", ()=>{
  ocultar();
  ocultarMenu();
  mostrar(vistaCatering);
});

contacto.addEventListener("click", ()=>{
  ocultar();
  ocultarMenu();
  mostrar(vistaContacto);
});

promos.addEventListener("click", ()=>{
  ocultar();
  ocultarMenu();
  mostrar(vistaCarta)
  titulocarta.innerHTML = "Carta de Promos";
  const cartaFiltrada = filtrar("promos", dataCopiada);
  mostrarCarta(cartaFiltrada);
});

hand.addEventListener("click", ()=>{
  ocultar();
  ocultarMenu();
  mostrar(vistaCarta)
  titulocarta.innerHTML = "Carta de Hand Rolls";
  const cartaFiltrada = filtrar("hand", dataCopiada);
  mostrarCarta(cartaFiltrada);
});

promoespecial.addEventListener("click", ()=>{
  ocultar();
  ocultarMenu();
  mostrar(vistaCarta)
  titulocarta.innerHTML = "Carta de Promociones Especiales";
  const cartaFiltrada = filtrar("promoespecial", dataCopiada);
  mostrarCarta(cartaFiltrada);
  });
