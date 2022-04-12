import torosVacas from "./vacasToros.js";

const secret = document.querySelector("#codigo-secreto");
const intento = document.querySelector("#intento");
const form = document.querySelector("#juego");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const contador = 10;
  const secretNumber = String(secret.value);
  const intentoNumber = String(intento.value);
  const retroalimentacion="";
  const intentos = torosVacas(secretNumber,intentoNumber,contador);
  div.innerHTML = "<p>" + intentos[0] + "</p>";
});

