//requireds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
  for (let index = 1; index <= limite; index++) {
    console.log(`${base} * ${index} = ${base * index}\n`);
  }
}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`);
      return;
    }

    let data = '';

    for (let index = 1; index <= limite; index++) {
      data += `${base} * ${index} = ${base * index}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla
}