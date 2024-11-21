function calcularSumaDeCadena(cadenaEntrada) {
    if (cadenaEntrada.trim() === '') 
        return 0;

    let delimitadores = [',', '-'];

    const coincidenciaDelimitadorPersonalizado = cadenaEntrada.match(/^\/\/(\[.*?\])+\s+/);
    if (coincidenciaDelimitadorPersonalizado) {
        const arregloDelimitadores = [...cadenaEntrada.matchAll(/\[(.+?)\]/g)].map(coincidencia => coincidencia[1]);
        delimitadores.push(...arregloDelimitadores.map(escaparRegex));
        cadenaEntrada = cadenaEntrada.replace(/^\/\/(\[.*?\])+\s+/, '');
    }

    const regexDelimitadores = new RegExp(delimitadores.join('|'), 'g');

    return cadenaEntrada
        .split(regexDelimitadores)
        .map(Number)
        .filter((numero) => !isNaN(numero) && numero <= 1000)
        .reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

function escaparRegex(cadena) {
    return cadena.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default calcularSumaDeCadena;
