let precioUnitario = 25;
let cantidad = 60;
let precioFinal;

let totalSinDescuento = precioUnitario * cantidad;

if (cantidad < 10) {
  precioFinal = totalSinDescuento;
} else if (cantidad >= 10 && cantidad < 50) {
  precioFinal = totalSinDescuento * 0.9; 
} else if (cantidad >= 50) {
  precioFinal = totalSinDescuento * 0.8; 
}

console.log(precioFinal.toFixed(2));
