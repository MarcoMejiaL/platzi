var nombre = {
    nombre: "marco",
    edad: 30,
    status: "cansado",
    ganasdecagar: function() {
        console.log(this.status);
    }
};
console.log(nombre.ganasdecagar());