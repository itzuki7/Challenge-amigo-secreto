// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo () {
  let agregarAmigos = document.getElementById("amigo");
  if (agregarAmigos.value.trim() === "") {
    alert("Por favor inserte un nombre");
} else {
    amigos.push(agregarAmigos.value);
    lista();
    console.log(amigos)
}
limpiarCaja();
}
function limpiarCaja (){
    document.querySelector("#amigo").value = "";
}
function lista (){
let lista = document.getElementById("listaAmigos");
lista.innerHTML = "";
for  (const nombre of amigos) {
    let listaAgrega = document.createElement("li");
    listaAgrega.textContent = nombre;
    lista.appendChild(listaAgrega);
}
}
function sortearAmigo() {
 if (amigos.length > 0 ){
    let numeroSorteo = Math.floor(Math.random()*amigos.length);
    let ganador =  amigos[numeroSorteo];
    let textoGanador = document.getElementById("resultado");
    textoGanador.innerHTML = `El amigo sorteado es ${ganador}`
    console.log(numeroSorteo);
    document.getElementById("listaAmigos").innerHTML = "";
 } else {
    alert("No hay amigos para sortear")
 }
} 