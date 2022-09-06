console.log("proceso iniciado");

/* const recepsion = (nombre, callback) => {
  setTimeout(() => {
    callback(nombre);
  }, 3000);
};
recepsion("julian", (persona) => {
  console.log("persona :>> ", persona);
  console.log("la persona es : " + persona);
  recepsion("pedro", (persona2) => {
    console.log("la persona anterior es: " + persona);
    console.log("la persona actual es: " + persona2);
  });
});
 */
let promesa = new Promise(function(resolve, reject) {
  let estado = 0;
  if (estado == 0) {
    reject("error")
  }
  resolve('julian');
})
promesa.then(respuesta => {
  console.log('respuesta :>> ', respuesta);
})
.catch(error => {
  console.log('error :>> ', error);
})