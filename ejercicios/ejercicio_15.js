const invertir = (str) => {
  if (str.length <= 1) return str;
  return invertir(str.substring(1)) + str[0];
};

console.log(invertir("hola")); 
clearInterval