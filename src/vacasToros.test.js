import Adivinador from "./adivinador";
import Secretista from "./secretista";
import {torosVacas, torosVacasVerificador, seleccionarGanador, mostrarVacas} from "./vacasToros.js";



var jugador1 = new Secretista();
var jugador2 = new Adivinador();

describe("Jugador 1", () => {
  it("Muestra en pantalla lo que ingresa", () => {
    expect(jugador1.ingresarCodigo("1234")).toEqual("1234");
  });
  it("No admite números vacios", () => {
    expect(jugador1.ingresarCodigo("")).toEqual("por favor ingresar un número para empezar a jugar");
  });
  it("No admite caracteres", () => {
    expect(jugador1.ingresarCodigo("*/-+")).toEqual("ingrese tipo de caracteres válido");
  });
  it("No puede colocar menos de 4 digitos", () => {
    expect(jugador1.ingresarCodigo("123")).toEqual("cantidad de dígitos errónea, por favor ingrese una cantidad válida");
  });
  it("No admite mas de 6 digitos", () => {
    expect(jugador1.ingresarCodigo("1234567")).toEqual("cantidad de dígitos errónea, por favor ingrese una cantidad válida");
  });
  it("Codigo secreto no es identificable", () => {
    expect(jugador1.ocultarCodigo("123456")).toEqual("@@@@@@");
  });
});

describe("Jugador 2", () => {
  it("Muestra en pantalla el numero que adivina", () => {
    expect(jugador2.ingresarAdivinado("1234")).toEqual("1234");
  });
  it("No admite números vacios", () => {
    expect(jugador2.ingresarAdivinado("")).toEqual("Intento no válido, por favor ingresar un número para empezar a jugar");
  });
  it("No admite caracteres", () => {
    expect(jugador2.ingresarAdivinado("*/-+")).toEqual("Intento no válido, ingrese tipo de caracteres válido");
  });
  it("No puede colocar menos de 4 digitos", () => {
    expect(jugador2.ingresarAdivinado("446")).toEqual("Intento no válido, cantidad de dígitos errónea, por favor ingrese una cantidad válida");
  });
  it("No admite mas de 6 digitos", () => {
    expect(jugador2.ingresarAdivinado("7543210")).toEqual("Intento no válido, cantidad de dígitos errónea, por favor ingrese una cantidad válida");
  });
});

describe("Toros y Vacas", () => {
  it("El Jugador 2 solo puede poner la cantidad exacta de digitos que puso el Jugador 1", () => {
    expect(torosVacasVerificador("1234","12345")).toEqual("Intento no válido, cantidad de dígitos errónea, por favor ingrese una cantidad válida");
  });
  it("El Jugador 2 solo puede poner la cantidad exacta de digitos que puso el Jugador 1", () => {
    expect(torosVacasVerificador("1234","5678")).toEqual("5678");
  });
  it("El Jugador 2 pierde si no adivina", () => {
    expect(seleccionarGanador("1234","1235")).toEqual("Jugador 1 GANA");
  });
  it("El Jugador 2 gana si adivina", () => {
    expect(seleccionarGanador("1234","1234")).toEqual("Jugador 2 GANA");
  });
  it("El Jugador 2 tiene 10 intentos", () => {
    expect(torosVacas("1234","8567","10","")).toEqual(9);
  });
  it("El Jugador 2 tiene 10 intentos y se vuelven 0 cuando jugador 2 gana", () => {
    expect(torosVacas("1234","1234","10","")).toEqual(-1);
  });
  it("Mostrar cantidad de coincidencias igual a los caracteres que coinciden con el codigo", () => {
    expect(mostrarVacas("1234","2351")).toEqual("***");
  });
  it("mostrar si no hay coincidencias igual a los caracteres que coinciden con el codigo", () => {
    expect(mostrarVacas("1234","5678")).toEqual("");
  });
});



