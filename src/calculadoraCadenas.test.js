import calcular from "./calculadoraCadenas.js";

describe("Calcular", () => {
  it("deberia devolver 0", () => {
    expect(calcular('')).toEqual(0);
  });
});
