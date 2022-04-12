import Secretista from "./secretista";
import Adivinador from "./adivinador";
import Exception from "./exception";
function torosVacasVerificador(codigoSecreto, adivinanza){
    let verificador = new Exception(adivinanza,"adivinador","");
    verificador.verificador(codigoSecreto.length != adivinanza.length,"Intento no válido, cantidad de dígitos errónea, por favor ingrese una cantidad válida");
    return verificador.mensaje;
}

function seleccionarGanador(codigoSecreto, adivinanza){
    let adivinanzaVerificada = torosVacasVerificador(codigoSecreto, adivinanza);
    let ganador = "Jugador 1 GANA"
    if (adivinanzaVerificada === codigoSecreto) {
        ganador = "Jugador 2 GANA";
    }
    return ganador;
}

function torosVacas(codigoSecreto, adivinanza,intentosDisponibles){
    let ganador = seleccionarGanador(codigoSecreto, adivinanza);
    if (ganador === "Jugador 1 GANA") {
        intentosDisponibles -= 1;
    }
    else{
        intentosDisponibles = -1;
    }
    return intentosDisponibles;
}

export {torosVacas,torosVacasVerificador,seleccionarGanador};
