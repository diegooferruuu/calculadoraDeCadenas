import calcular from "./calculadoraCadenas.js";

describe("Calcular", () => {
  it("deberia devolver 0", () => {
    expect(calcular(' ')).toEqual(0);
  });
  it("deberia devolver 2", () => {
    expect(calcular('2')).toEqual(2);
  });
});
