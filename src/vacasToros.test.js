import ingresarCodigo from "./vacasToros.js";

describe("Jugador 1", () => {
  it("muestra en pantalla lo que ingresa el jugador", () => {
    expect(ingresarCodigo(1234)).toEqual(1234);
  });
});
