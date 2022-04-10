class Exception{
    mensaje;
    error;
    constructor(code) {
        this.switteVerificador(code);
    }
    switteVerificador(codigo){
        this.mensaje = "OK"; 
        this.error = false;
        this.codigoCorto(codigo);
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
    codigoCorto(codigo){
        if(codigo.length < 4){
            this.mensaje = "cantidad de dígitos errónea, por favor ingrese una cantidad válida";
            this.error = true
        }
    }
}

export default Exception;