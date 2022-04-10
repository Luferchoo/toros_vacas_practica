import Exception from "./exception";
class Adivinador{
    ingresarAdivinado(numAdivinado) {
        let verificador = new Exception(numAdivinado);
        let numMostrado = "Intento no válido, " + verificador.mensaje;
        if(verificador.error === false){
            numMostrado = numAdivinado;
        }
        return numMostrado;
    }
}

export default Adivinador;