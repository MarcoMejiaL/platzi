var articulos = [
        { nombre: "bici", costo: 3300 },
        { nombre: "cuipi", costo: 33000 },
        { nombre: "taco", costo: 7000 },
        { nombre: "lap", costo: 30 },
        { nombre: "chancla", costo: 300 },
    ]
    /* var articulosFiltrados = articulos.filter(function(articulo) {
        return articulo.costo <= 500;
    })
    console.log(articulosFiltrados); */

var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
})


console.log(nombreArticulos);