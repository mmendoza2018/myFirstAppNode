import { sumar } from "./suma.js";
import { args } from "../config/yargs.js";


const base = args.base;
const showDescripction = args.d;
const range = args.r;
console.log('range :>> ', range);
sumar(base, showDescripction, range)
.then(respuesta => {
  console.log('Inserto el archivo : ', respuesta)
})
.catch( error => console.log(error))
