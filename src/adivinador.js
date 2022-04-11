import Exception from "./exception";
class Adivinador{
    ingresarAdivinado(numAdivinado) {
        let verificador = new Exception(numAdivinado, "adivinador", "Intento no válido, ");
        let numMostrado = verificador.mensaje;
        return numMostrado;
    }
}

export default Adivinador;