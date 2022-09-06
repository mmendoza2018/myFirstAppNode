import yargs from "yargs";

let args = yargs(process.argv.slice(2))
  .option("d", {
    alias: "description",
    type: "boolean",
    default:true
  })
  .option("b", {
    alias: "base",
    type: "number",
    demand: true,
  })
  .option("r", {
    alias: "range",
    type: "number",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

  export {args}