import { writeFileSync } from "node:fs";

const sumar = async (base, showDescription, range) => {
  try {
    let content = "";
    for (let x = 1; x <= range; x++) {
      content += `${base} X ${x} = ${base * x}\n`;
    }
    if (showDescription) {
      console.log(content);
    }
    writeFileSync(`../archivos/tablaDeMultiplicar-${base}.txt`, content);
    return true;
  } catch (error) {
    throw error;
  }
};
export { sumar };
