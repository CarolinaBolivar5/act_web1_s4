const saludo = function(nombre = "Invitado") {
    return ` Hola, ${nombre}!`;
};

console.log(saludo("Juan")); 
console.log(saludo());