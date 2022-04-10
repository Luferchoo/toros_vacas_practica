class Exception{
    mensaje = "OK";
    error = false;;
    constructor(code) {
        this.switteVerificador(code);
    }
    switteVerificador(codigo){
        this.verificador(codigo.length > 6 || codigo.length < 4,"cantidad de dígitos errónea, por favor ingrese una cantidad válida");
        this.verificador(codigo.length === 0,"por favor ingresar un número para empezar a jugar");
        this.verificador(isNaN(Number(codigo)),"ingrese tipo de caracteres válido");
    }
    verificador(funcion, mensaje){
        if(funcion){
            this.mensaje = mensaje;
            this.error = true
        }
    }   
}

export default Exception;