class Exception{
    mensaje;
    error;
    constructor(code) {
        this.switteVerificador(code);
    }
    switteVerificador(codigo){
        this.mensaje = "OK"; 
        this.error = false;
        this.codigoVacio(codigo);
        this.codigoNoValido(codigo);
    }
    codigoVacio(codigo){
        if(codigo.length === 0){
            this.mensaje = "por favor ingresar un número para empezar a jugar";
            this.error = true
        }
    }
    codigoNoValido(codigo){
        if(isNaN(Number(codigo)) === true){
            this.mensaje = "ingrese tipo de caracteres válido";
            this.error = true
        }
    }
}

export default Exception;