import Adivinador from "./adivinador";
import Secretista from "./secretista";
import {torosVacas, torosVacasVerificador} from "./vacasToros.js";


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
  it("El Jugador 2 pierde si no adivina", () => {
    expect(torosVacas("1234","1235")).toEqual("Jugador 1 GANA");
  });
});



