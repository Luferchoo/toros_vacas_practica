import {ocultarCodigo,ingresarCodigo,ingresarAdivinado} from "./vacasToros.js";

describe("Jugador 1", () => {
  it("Muestra en pantalla lo que ingresa", () => {
    expect(ingresarCodigo("1234")).toEqual("1234");
  });
  it("No admite números vacios", () => {
    expect(ingresarCodigo("")).toEqual("por favor ingresar un número para empezar a jugar");
  });
  it("No admite caracteres", () => {
    expect(ingresarCodigo("*/-+")).toEqual("ingrese tipo de caracteres válido");
  });
  it("No puede colocar menos de 4 digitos", () => {
    expect(ingresarCodigo("123")).toEqual("cantidad de dígitos errónea, por favor ingrese una cantidad válida");
  });
  it("No admite mas de 6 digitos", () => {
    expect(ingresarCodigo("1234567")).toEqual("cantidad de dígitos errónea, por favor ingrese una cantidad válida");
  });
  it("Codigo secreto no es identificable", () => {
    expect(ocultarCodigo("123456")).toEqual("@@@@@@");
  });
});
describe("Jugador 2", () => {
  it("Muestra en pantalla el numero que adivina", () => {
    expect(ingresarAdivinado("1234")).toEqual("1234");
  });
});



