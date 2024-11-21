function calcular(cadena) {
    if (cadena.trim() === '')
        return 0;

    let delimitadores = [',', '-']; 

    const customDelimiterMatch = cadena.match(/^\/\/\[(.+?)\]\s+/); 
    if (customDelimiterMatch) {
        const customDelimiter = customDelimiterMatch[1];
        delimitadores.push(escapeRegex(customDelimiter)); 
        cadena = cadena.replace(/^\/\/\[(.+?)\]\s+/, ''); 
    }

    const delimitadoresRegex = new RegExp(delimitadores.join('|'), 'g');

    return cadena
        .split(delimitadoresRegex)
        .map(Number)
        .filter((n) => !isNaN(n) && n <= 1000)
        .reduce((acc, curr) => acc + curr, 0);
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default calcular;
