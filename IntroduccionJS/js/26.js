// This

const reservacion ={
    nombre: 'Hanna',
    apellido: 'Montoya',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}
const reservacion2 ={
    nombre: 'Elizabeth',
    apellido: 'Rios',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion();
reservacion2.informacion();