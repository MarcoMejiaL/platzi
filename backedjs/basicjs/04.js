function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
var autoNuevo = new auto("toyota", "taquito", 2020);

console.log(`nombre ${autoNuevo.marca}, anio ${autoNuevo.anio} modelo ${autoNuevo.modelo}`);