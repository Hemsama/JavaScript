const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = false;

    if(auth){
        resolve('Usuario Autenticado'); // EL PROMISE SE CUMPLE
    }else{
        reject('No se pudo iniciar seción'); // el promise no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

//En los promisesz existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected : Se ha rechazado o no se pudo cumplir