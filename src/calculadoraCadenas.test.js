import calcularSumaDeCadena from "./calculadoraCadenas.js";

describe("Calcular", () => {
  it("deberia devolver 0", () => {
    expect(calcularSumaDeCadena(' ')).toEqual(0);
  });
  it("deberia devolver 2", () => {
    expect(calcularSumaDeCadena('2')).toEqual(2);
  });
  it("deberia devolver 15", () => {
    expect(calcularSumaDeCadena('1,2,4,8')).toEqual(15);
  });
  it("deberia devolver 6", () => {
    expect(calcularSumaDeCadena('1-2,3')).toEqual(6);
  });
  it("deberia devolver 17", () => {
    expect(calcularSumaDeCadena('//[;] 6;7;4')).toEqual(17);
  });
  it("deberia devolver 12", () => {
    expect(calcularSumaDeCadena("//[;] 6,3-2;1")).toEqual(12);
  });
  it("deberia devolver 2", () => {
    expect(calcularSumaDeCadena("2, 1001")).toEqual(2);
  });
  it("deberia devolver 22", () => {
    expect(calcularSumaDeCadena("//[*][%] 1*2%3,7-9")).toEqual(22);
  });
  it("deberia devolver 25", () => {
    expect(calcularSumaDeCadena("//[*][%][+] 1*2%3,7-9+3,1001")).toEqual(25);
  });
});

