import torosVacas from "./vacasToros.js";

const secret = document.querySelector("#codigo-secreto");
const intento = document.querySelector("#intento");
const form = document.querySelector("#torosVacas");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const contador = 10
  const secretNumber = secret.value;
  const intentoNumber = intento.value;
  const retroalimentacion="";

  div.innerHTML = "<p>" + torosVacas(secretNumber,intentoNumber,contador,retroalimentacion) + "</p>";
});

