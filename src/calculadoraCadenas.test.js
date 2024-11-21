import calcular from "./calculadoraCadenas.js";

describe("Calcular", () => {
  it("deberia devolver 0", () => {
    expect(calcular(' ')).toEqual(0);
  });
  it("deberia devolver 2", () => {
    expect(calcular('2')).toEqual(2);
  });
  it("deberia devolver 15", () => {
    expect(calcular('1,2,4,8')).toEqual(15);
  });
  it("deberia devolver 6", () => {
    expect(calcular('1-2,3')).toEqual(6);
  });
});
