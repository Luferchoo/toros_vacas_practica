import Exception from "./exception";
class Secretista{
    ingresarCodigo(codigo) {
        let verificador = new Exception(codigo, "secretista","");
        let codigoNoSecreto = verificador.mensaje; 
        return codigoNoSecreto;
    }
    ocultarCodigo(codigo){
        let suma = "";
        for (let indice = 0; indice < codigo.length; indice++) {
          suma += "@";
        }
        return suma;
    }
}

export default Secretista;