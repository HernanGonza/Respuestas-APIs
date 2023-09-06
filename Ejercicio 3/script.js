const posts = document.getElementById('fotos');
const boton = document.getElementById('boton');

async function pedir() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const infoPedido = await response.json();
        for (let i = 0; i < 10; i++) {
            const mostrarPedido = `
        <img src="${infoPedido[i].url}" alt="Imagen de perfil">
        
       `
            fotos.innerHTML += mostrarPedido
        }
        if (response.ok) {
            const contentType = response.headers.get('Content-Type');

            if (contentType.includes('text/html')) {
                console.log('La respuesta contiene HTML');
            } else if (contentType.includes('application/json')) {
                console.log('La respuesta contiene JSON');
            } else {
                console.log('La respuesta contiene otro tipo de contenido');
            }
        } else {
            console.log('Error al realizar la solicitud');
        }
    } catch (error) {
        console.log(error); "no se pudo pedir"
    }
};

boton.addEventListener('click', pedir);