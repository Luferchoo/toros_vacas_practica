import ingresarCodigo from "./vacasToros.js";

describe("Jugador 1", () => {
  it("muestra en pantalla lo que ingresa el jugador", () => {
    expect(ingresarCodigo("1234")).toEqual("1234");
  });
  it("no admite números vacios", () => {
    expect(ingresarCodigo("")).toEqual("por favor ingresar un número para empezar a jugar");
  });
  it("no admite caracteres", () => {
    expect(ingresarCodigo("*/-+")).toEqual("ingrese tipo de caracteres válido");
  });
  it("no puede colocar menos de 4 digitos", () => {
    expect(ingresarCodigo("123")).toEqual("cantidad de dígitos errónea, por favor ingrese una cantidad válida");
  });
});

