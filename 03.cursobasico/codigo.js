var texto= document.getElementById("texto_linea");
var boton= document.getElementById("boton");
boton.addEventListener("click",texto_boton);

var d = document.getElementById("div");
var li = d.getContext("2d");


function texto_boton(){


var lin =parseInt(texto.value);
var l=0;
var ecua =300/lin;

console.log(ecua);
function linea(color,x,y,x2,y2){
    li.beginPath();
li.strokeStyle =color;
li.moveTo(x,y);
li.lineTo(x2, y2);
li.stroke();
li.closePath();
}
while(l<lin){
    var yi=l*ecua;
    var xf=ecua*(l+1);
    linea("red",0,yi,xf,300); 
    
    l++;
}

}
/* linea("red",0,0,150,300);

linea("red",150,300,300,0);
linea("red",300,0,0,240);
linea("red",0,240,300,240);
linea("red",300,240,0,0); */