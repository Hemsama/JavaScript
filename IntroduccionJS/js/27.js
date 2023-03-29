//  POO

// Object Literal
const producto ={
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.formaterCliente = function(){
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
//Crear fnciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formaterProducto = function(){
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop"', 300);
const cliente = new Cliente('Hanna', 'Montoya');

console.log(cliente.formaterCliente());
console.log(producto2.formaterProducto());
console.log(producto3.formaterProducto());
