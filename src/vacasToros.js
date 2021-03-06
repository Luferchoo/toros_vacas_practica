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

function mostrarVacunos(codigoSecreto,intento) {
    let sumaToros = "";
    let sumaVacas = "";
    let sumaTerneros = "";
    let suma = "";
    let vaca = "*";
    let toro = "!";
    let ternero = "#";
    for (let indice = 0; indice < codigoSecreto.length; indice++) {
        if (codigoSecreto.indexOf(intento[indice]) !== -1) {
            if (codigoSecreto.search(intento[indice])=== indice) {
                sumaToros += toro;
            }
            else{
                sumaVacas += vaca;
            }
        }
        else if (codigoSecreto.indexOf(intento[indice]+1) !== -1 || codigoSecreto.indexOf(intento[indice]-1) !== -1){
            sumaTerneros += ternero;
        }
    }
    suma = sumaToros + sumaVacas + sumaTerneros;
    return suma;
}


function torosVacas(codigoSecreto, adivinanza, intentosDisponibles){
    let ganador = seleccionarGanador(codigoSecreto, adivinanza);
    let codigo = new Secretista(codigoSecreto);
    let secreto = codigo.ocultarCodigo(codigoSecreto);
    if (ganador === "Jugador 1 GANA") {
        intentosDisponibles -= 1;
    }
    else{
        intentosDisponibles = -1;
    }
    let retroalimentacion = "CODIGO SECRETO: " + secreto + " TOROS Y VACAS: " + mostrarVacunos(codigoSecreto,adivinanza) + " INTENTOS DISPONIBLES: " + intentosDisponibles + " GANADOR: " + ganador;
    return [intentosDisponibles, retroalimentacion];
}

export {torosVacas,torosVacasVerificador,seleccionarGanador,mostrarVacunos};
