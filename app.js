// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos
let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const btnAdicionar = document.getElementById("adicionar");
    const btnSortear = document.getElementById("sortear");

    // Evento para añadir amigos
    btnAdicionar.addEventListener("click", agregarAmigo);

    // Evento para sortear amigo
    btnSortear.addEventListener("click", sortearAmigo);

    function agregarAmigo() {
        let nombre = input.value.trim();
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
        } else {
            amigos.push(nombre);
            actualizarLista();
            input.value = "";
        }
    }

    function actualizarLista() {
        lista.innerHTML = "";
        amigos.forEach((amigo) => {
            let li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agrega nombres primero.");
        } else {
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            resultado.textContent = "El amigo secreto es: " + amigos[indiceAleatorio];
        }
    }
});