/* function Hijas(name,age){
    const bebes ={
        name:name,
        age:age
    }


bebes.saludar=function(){
    console.log(`hola mi nombre es: ${this.name} y mi edad es de ${this.age}` )
}
return bebes;
}
const bebe =Hijas("barbara" ,10)
bebe.saludar()
const bebe2= Hijas("elis" , 3);
bebe2.saludar();
 */
/* const metodos ={
    saludar: function(){
        console.log(`hola mi nombre es: ${this.name}` )
}
}
function Hijas(name){
    const bebes ={
        name:name,
    };  
    bebes.saludar = metodos.saludar;
return bebes;
}


const bebe =Hijas("barbara" ,10)
bebe.saludar()
const bebe2= Hijas("elis" , 3);
bebe2.saludar(); */
/* ------------------------------------ */
const metodos ={
    saludar: function(){
        console.log(`hola mi nombre es: ${this.name}` )
}
}
function Hijas(name){
    const bebes = Object.create(metodos);
    bebes.name = name
    return bebes
}


const bebe =Hijas("barbara" ,10)
bebe.saludar()
const bebe2= Hijas("elis" , 3);
bebe2.saludar();