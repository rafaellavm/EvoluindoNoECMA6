//var nome = localStorage.nome;
//console.log(nome);

var nome = "";
var lista = '';
//sessionStorage.nome = "Sessionstorage apaga quando o navegador é fechado";

if (typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt("Digite seu nome:");
    localStorage.lista = ["Rafaela", "Elaine", "Manuela"];

}

nome = localStorage.nome;
lista = localStorage.lista;
console.log(lista);

document.getElementById("nome").textContent = nome;