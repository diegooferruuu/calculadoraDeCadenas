import calcularSumaDeCadena from "./calculadoraCadenas";

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + calcularSumaDeCadena(cadena.value) + "</p>";
});
