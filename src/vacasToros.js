function ingresarCodigo(codigo) {
  var codigoNoSecreto = "por favor ingresar un número para empezar a jugar";
  if(codigo.length != 0){
    codigoNoSecreto = codigo;
  }
  return codigoNoSecreto;
}

export default ingresarCodigo;
