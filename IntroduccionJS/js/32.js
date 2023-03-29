// Async / await

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            console.log('Los Clientes fueron Descargados')
        }, 5000);
    });

}

async function app(){
    console.log('app Lista');
}

app()