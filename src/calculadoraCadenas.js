function calcular(cadena) {
    if (cadena.trim() === '')
        return 0;

    return cadena
        .replace(/-/g, ',')
        .split(",")
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0); 
}
export default calcular;