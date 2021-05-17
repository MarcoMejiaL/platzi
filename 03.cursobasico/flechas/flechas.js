var teclas ={
  Left: 37,
  Up: 38,
  Rigth:39,
  Down:  40
};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");
var x=150;
var y=150;
linea("red",149,149,151,151,papel);
function linea(color,xi,yi,xf,yf,lienzo){
lienzo.beginPath();
lienzo.strokeStyle =color;
lienzo.lineWidth = 3;
lienzo.moveTo(xi,yi);
lienzo.lineTo(xf, yf);
lienzo.stroke();
lienzo.closePath();
}

function dibujarTeclado(evento){
   var color="blue";
    var movimiento =10;
   switch(evento.keyCode){
       case teclas.Up:
           linea(color,x,y,x,y-movimiento,papel);
           y=y-movimiento;
           break;

        case teclas.Down:
            linea(color,x,y,x,y+movimiento,papel);
           y=y+movimiento;
            break;
        case teclas.Left:
            linea(color,x,y,x-movimiento,y,papel);
           x=x-movimiento;
            break;
        case teclas.Rigth:
            linea(color,x,y,x+movimiento,y,papel);
           x=x+movimiento;
            break;
        default:
            console.log(":V");
            break;
   }
}