const operacion = (a, b, callback) => callback(a, b);

console.log(operacion(5, 3, (a, b) => a * b)); 

