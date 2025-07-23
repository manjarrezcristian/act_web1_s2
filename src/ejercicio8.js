let edad = 67;
let distancia_Km = 120;
let tarifa_Base = distancia_Km * 0.21;
let precio_Final;

if (edad < 18) {
  precio_Final = tarifa_Base * 0.8;  
} else if (edad >= 65) {
  precio_Final = tarifa_Base * 0.6;  
} else {
  precio_Final = tarifa_Base;       
}

console.log(precio_Final.toFixed(2));
