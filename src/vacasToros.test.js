import ingresarCodigo from "./vacasToros.js";

describe("Jugador 1", () => {
  it("muestra en pantalla lo que ingresa el jugador", () => {
    expect(ingresarCodigo("1234")).toEqual("1234");
  });
  it("no admite números vacios", () => {
    expect(ingresarCodigo("")).toEqual("por favor ingresar un número para empezar a jugar");
  });
});

