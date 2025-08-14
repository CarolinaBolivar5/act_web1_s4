const retrasarMensaje = (mensaje, tiempo) => {
  setTimeout(() => {
    console.log(mensaje);
  }, tiempo);
};

retrasarMensaje("Hola", 2000);
