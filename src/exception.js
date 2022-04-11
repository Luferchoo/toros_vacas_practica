class Exception{
    mensaje = "OK";
    error = false;
    constructor(code, tipo, encabezado) {
        this.switteVerificador(code,encabezado);
    }
    switteVerificador(codigo, encabezado){
        this.verificador(codigo.length > 6 || codigo.length < 4,encabezado + "cantidad de dígitos errónea, por favor ingrese una cantidad válida");
        this.verificador(codigo.length === 0,encabezado + "por favor ingresar un número para empezar a jugar");
        this.verificador(isNaN(Number(codigo)),encabezado +"ingrese tipo de caracteres válido");
        if(!this.error){
            this.mensaje = codigo;
        }
    }
    verificador(funcion, mensaje){
        if(funcion){
            this.mensaje = mensaje;
            this.error = true
        }
    }  
    getError(){
        return this.error;
    }   
}

export default Exception;