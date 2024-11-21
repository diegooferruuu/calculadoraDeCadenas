function calcular(cadena) {
    if (cadena.trim() === '') 
        return 0;

    let delimitadores = [',', '-'];

    const customDelimiterMatch = cadena.match(/^\/\/(\[.*?\])+\s+/);
    if (customDelimiterMatch) {
        const delimitersArray = [...cadena.matchAll(/\[(.+?)\]/g)].map(match => match[1]);
        delimitadores.push(...delimitersArray.map(escapeRegex));
        cadena = cadena.replace(/^\/\/(\[.*?\])+\s+/, '');
    }

    const delimitadoresRegex = new RegExp(delimitadores.join('|'), 'g');

    return cadena
        .split(delimitadoresRegex)
        .map(Number)
        .filter((number) => !isNaN(number) && number <= 1000)
        .reduce((acc, curr) => acc + curr, 0);
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default calcular;
