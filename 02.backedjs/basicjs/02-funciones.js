/* funcion delcarativa */
function nombre() {
    console.log("paquito");
}
nombre();

/* funcion anonima */
let nombre2 = function(a, b) {
    console.log(a + b);
}
nombre2(2, 2);


function tabla(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} X ${a} = ${i*a}`);
    }
    return;

}
tabla(2);

function sumar(a, b) {
    var sumar = a + b;
    return console.log(sumar);;
}
sumar(2, 2)