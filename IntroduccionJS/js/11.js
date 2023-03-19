// Objetos
const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
};

// Forma anterior
 const precioProducto = producto.precio;

 // Destructuring
const {precio} = producto;

console.log(precio);