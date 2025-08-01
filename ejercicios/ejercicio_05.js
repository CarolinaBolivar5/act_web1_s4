function contarVocales(n) {
    const vocales = n.match(/[aeiou]/gi);
    return vocales ? vocales.length : 0;
}

console.log(contarVocales("hola")); 