import Secretista from "./secretista";
import Adivinador from "./adivinador";
import Exception from "./exception";
function torosVacasVerificador(codigoSecreto, adivinanza){
    let verificador = new Exception("OK","adivinador","Jugador 2");
    verificador.verificador(codigoSecreto.length != adivinanza.length,"cantidad de dígitos errónea, por favor ingrese una cantidad válida");
    let numMostrado = "Intento no válido, " + verificador.mensaje;
    if(!verificador.getError()){
        numMostrado = adivinanza;
    }
    return numMostrado;
}

function seleccionarGanador(codigoSecreto, adivinanza){
    let adivinanzaVerificada = torosVacasVerificador(codigoSecreto, adivinanza);
    let ganador = "Jugador 2 GANA"
    if (adivinanzaVerificada != codigoSecreto) {
        ganador = "Jugador 1 GANA";
    }
    return ganador;
}

function torosVacas(codigoSecreto, adivinanza){
    return null;
}

export {torosVacas,torosVacasVerificador,seleccionarGanador};
