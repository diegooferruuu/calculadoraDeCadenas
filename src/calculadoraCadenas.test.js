import calcularSumaDeCadena from "./calculadoraCadenas.js";

describe("Calcular suma de cadenas", () => {
  describe("Casos básicos", () => {
    it("debería devolver 0 para una cadena vacía o solo espacios", () => {
      const inputVacio = " ";
      const resultadoEsperado = 0;

      expect(calcularSumaDeCadena(inputVacio)).toEqual(resultadoEsperado);
    });

    it("debería devolver el número si la cadena contiene solo un número", () => {
      const inputUnNumero = "2";
      const resultadoEsperado = 2;

      expect(calcularSumaDeCadena(inputUnNumero)).toEqual(resultadoEsperado);
    });

    it("debería sumar números separados por comas", () => {
      const inputComas = "1,2,4,8";
      const resultadoEsperado = 15;

      expect(calcularSumaDeCadena(inputComas)).toEqual(resultadoEsperado);
    });

    it("debería sumar números separados por comas o guiones", () => {
      const inputComasGuiones = "1-2,3";
      const resultadoEsperado = 6;

      expect(calcularSumaDeCadena(inputComasGuiones)).toEqual(resultadoEsperado);
    });

    it("debería ignorar números mayores o iguales a 1001", () => {
      const inputIgnorarGrandes = "2,1001";
      const resultadoEsperado = 2;

      expect(calcularSumaDeCadena(inputIgnorarGrandes)).toEqual(resultadoEsperado);
    });
  });

  describe("Delimitadores personalizados", () => {
    it("debería aceptar un delimitador simple entre corchetes", () => {
      const inputUnDelimitador = "//[;] 6;7;4";
      const resultadoEsperado = 17;

      expect(calcularSumaDeCadena(inputUnDelimitador)).toEqual(resultadoEsperado);
    });

    it("debería aceptar múltiples delimitadores entre corchetes", () => {
      const inputMultiplesDelimitadores = "//[*][%] 1*2%3,7-9";
      const resultadoEsperado = 22;

      const inputMultiplesDelimitadoresConIgnorados = "//[*][%][+] 1*2%3,7-9+3,1001";
      const resultadoEsperadoConIgnorados = 25;

      expect(calcularSumaDeCadena(inputMultiplesDelimitadores)).toEqual(resultadoEsperado);
      expect(calcularSumaDeCadena(inputMultiplesDelimitadoresConIgnorados)).toEqual(resultadoEsperadoConIgnorados);
    });

    it("debería funcionar con delimitadores personalizados junto con comas o guiones", () => {
      const inputMixto = "//[;] 6,3-2;1";
      const resultadoEsperado = 12;

      expect(calcularSumaDeCadena(inputMixto)).toEqual(resultadoEsperado);
    });
  });
});
