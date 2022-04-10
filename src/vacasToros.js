import Exception from "./exception";

function ingresarCodigo(codigo) {
  var verificador = new Exception(codigo);
  var codigoNoSecreto = verificador.mensaje; 
  if(verificador.error === false){
    codigoNoSecreto = codigo;
  }
  return codigoNoSecreto;
}
function ocultarCodigo(codigo){
  let suma = "";
  for (let indice = 0; indice < codigo.length; indice++) {
    suma += "@";
  }
  return suma;
}


export {ocultarCodigo,ingresarCodigo};
