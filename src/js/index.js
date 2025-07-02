//1- pegar o botão de filtros
const botaoFiltrar = document.querySelector(".btn_filtrar");

//2- aplicar os filtros
botaoFiltrar.addEventListener('click', function () {

//3- pegar valores de categoria e preço
const categoriaSelecionada = document.querySelector("#categoria").value;
  const precoMaximoSelecionado = document.querySelector("#preco").value;
//4- filtrar
const cartas = document.querySelectorAll(".carta");

cartas.forEach(function (carta) {
const categoriaCarta = carta.dataset.categoria;
const precoCarta = carta.dataset.preco;

let mostrarCarta = true;

const temFiltroDeCategoria = categoriaSelecionada !== '';
const cartaErrada = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

if (temFiltroDeCategoria && cartaErrada) {
    mostrarCarta = false;
}

const temFiltroDePreco = precoMaximoSelecionado !== '';
const precoMaximoErrado = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

if (temFiltroDePreco && precoMaximoErrado) {
    mostrarCarta = false;
}
//parseFloat converte texto pra numero

if (mostrarCarta) {
    carta.classList.add("mostrar");
    carta.classList.remove("esconder");
} else {
    carta.classList.remove("mostrar");
    carta.classList.add("esconder");
}
    })
})