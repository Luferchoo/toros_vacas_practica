import Secretista from "./secretista";
import Adivinador from "./adivinador";
import Exception from "./exception";

function torosVacas(codigoSecreto, adivinanza){
    let verificador = new Exception("OK");
    verificador.verificador(codigoSecreto.length != adivinanza.length,"cantidad de dígitos errónea, por favor ingrese una cantidad válida");
    let numMostrado = "Intento no válido, " + verificador.mensaje;
    if(!verificador.getError()){
        numMostrado = codigoSecreto;
    }
    return numMostrado;
}

export default torosVacas;
