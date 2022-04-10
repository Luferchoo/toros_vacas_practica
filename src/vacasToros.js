import Exception from "./exception.js";

function ingresarCodigo(codigo) {
  var verificador = new Exception(codigo);
  var codigoNoSecreto = verificador.mensaje; 
  if(verificador.error === false){
    codigoNoSecreto = codigo;
  }
  return codigoNoSecreto;
}

export default ingresarCodigo;