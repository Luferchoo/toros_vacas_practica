import Exception from "./exception";
class Secretista{
    ingresarCodigo(codigo) {
        let verificador = new Exception(codigo);
        let codigoNoSecreto = verificador.mensaje; 
        if(verificador.error === false){
          codigoNoSecreto = codigo;
        }
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