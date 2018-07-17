const opciones = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 20
  }
}

const argv = require('yargs')
  .command('listar', 'tabla de multipicar', opciones)
  .command('crear', 'tabla de multipicar', opciones).help().argv;

module.exports = {
  argv
}