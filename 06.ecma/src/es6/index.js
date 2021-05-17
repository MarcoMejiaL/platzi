function newFunction(name, age, country){
    var name = name || 'marco';
    var age = age || 30;
    var country = country || 'cuautla';
    console.log(name,age,country);
}

//
function newFunction2(name='marco', age=30, country='cuautla'){
    console.log(name, age, country);
}


newFunction2();


//literales

let hello ='gello';


let cadena ={
    nombre:'marco',
    edad : 30,
    pais: 'mexico'
}

console.log(cadena.nombre)
let {nombre, edad} =cadena;

console.log(nombre, edad);

/* ----------------------------------------------------- */
let team1={'marco', 'barbara', 'elis'};
let team2={}