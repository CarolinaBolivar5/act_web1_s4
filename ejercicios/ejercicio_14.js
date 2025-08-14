const generarId = (() => {
  let contador = 0; 
  return () => {
    contador++; 
    return contador; 
  };
})();

console.log(generarId());
console.log(generarId());
console.log(generarId()); 
