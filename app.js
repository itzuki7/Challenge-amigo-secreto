// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo () {
  let agregarAmigos = document.getElementById("amigo");
      if (agregarAmigos.value.trim() === "") {
    alert("Por favor inserte un nombre");
}    else {
    amigos.push(agregarAmigos.value);
    console.log(amigos)
}
limpiarCaja();
}

function limpiarCaja (){
    document.querySelector("#amigo").value = "";
}