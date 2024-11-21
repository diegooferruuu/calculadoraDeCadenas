function calcular(cadena) {
    if (cadena.trim() === '') // Verifica si la cadena está vacía o solo contiene espacios
        return 0;

    let delimitadores = [',', '-']; // Delimitadores por defecto

    // Verifica si la cadena tiene un delimitador personalizado
    const customDelimiterMatch = cadena.match(/^\/\/\[(.+?)\]\s+/); // Busca el delimitador en el formato //[;]
    if (customDelimiterMatch) {
        const customDelimiter = customDelimiterMatch[1]; // Obtiene el delimitador personalizado
        delimitadores.push(escapeRegex(customDelimiter)); // Agrega el delimitador personalizado escapado
        cadena = cadena.replace(/^\/\/\[(.+?)\]\s+/, ''); // Elimina la declaración del delimitador
    }

    // Construye una expresión regular para dividir la cadena por cualquier delimitador
    const delimitadoresRegex = new RegExp(delimitadores.join('|'), 'g');

    return cadena
        .split(delimitadoresRegex) // Divide la cadena usando los delimitadores
        .map(Number) // Convierte cada elemento a número
        .filter((n) => !isNaN(n)) // Filtra valores que no son números
        .reduce((acc, curr) => acc + curr, 0); // Suma los números
}

// Escapa caracteres especiales en delimitadores personalizados para usarlos en una expresión regular
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapa caracteres especiales
}

export default calcular;
