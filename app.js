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