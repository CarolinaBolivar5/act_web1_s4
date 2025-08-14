function esCorreo(cadena) {
  return /@/.test(cadena) && /\.com$/.test(cadena);
}

console.log(esCorreo("test@example.com"));

