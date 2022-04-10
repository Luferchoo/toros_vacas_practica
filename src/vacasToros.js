import Exception from "./exception";

function ingresarCodigo(codigo) {
  let verificador = new Exception(codigo);
  let codigoNoSecreto = verificador.mensaje; 
  if(verificador.error === false){
    codigoNoSecreto = codigo;
  }
  return codigoNoSecreto;
}

function ingresarAdivinado(codigo) {
  return codigo;
}

function ocultarCodigo(codigo){
  let suma = "";
  for (let indice = 0; indice < codigo.length; indice++) {
    suma += "@";
  }
  return suma;
}


export {ocultarCodigo,ingresarCodigo,ingresarAdivinado};
