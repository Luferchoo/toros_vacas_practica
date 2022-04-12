import { torosVacas } from "./vacasToros";

    const secret = document.querySelector("#codigo-secreto");
    const intento = document.querySelector("#intento");
    const form = document.querySelector("#juego");
    const div = document.querySelector("#resultado-div");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      var index = 10;
      const secretNumber = String(secret.value);
      const intentoNumber = String(intento.value);
      const intentos = torosVacas(secretNumber,intentoNumber,index);
      index -= 1;
      div.innerHTML = "<p>" + intentos[1] + "</p>";
    });
 



