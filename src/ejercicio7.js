let precio_Unitario = 25;
let cantidad = 60;
let precio_Final;

let total_Sin_Descuento = precio_Unitario * cantidad;

if (cantidad < 10) {
  precio_Final = total_Sin_Descuento;
} else if (cantidad >= 10 && cantidad < 50) {
  precio_Final = total_Sin_Descuento * 0.9; 
} else if (cantidad >= 50) {
  precio_Final = total_Sin_Descuento * 0.8; 
}

console.log(precio_Final.toFixed(2));
