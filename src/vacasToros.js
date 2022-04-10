function ingresarCodigo(codigo) {
  var codigoNoSecreto = "por favor ingresar un número para empezar a jugar";
  var caracterNoValido = "ingrese tipo de caracteres válido"
  console.log(isNaN(Number(codigo)))
  if(codigo.length != 0){
    codigoNoSecreto = codigo;
  }
  if(isNaN(Number(codigo)) === true){
    codigoNoSecreto = caracterNoValido;
  }
  return codigoNoSecreto;
}

export default ingresarCodigo;