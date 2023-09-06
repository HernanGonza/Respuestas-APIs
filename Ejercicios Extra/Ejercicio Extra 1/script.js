const posts = document.getElementById('imagen');
const boton = document.getElementById('boton');

async function pedir() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const infoPedido = await response.json();
        const mostrarPedido = `
        <img src="${infoPedido.message}" height="200" width="200">`
            imagen.innerHTML = mostrarPedido
        
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