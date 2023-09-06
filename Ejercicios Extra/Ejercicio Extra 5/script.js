const cerveza = document.getElementById('cerveza');
const boton = document.getElementById('boton');

async function pedir() {
    try {
        const response = await fetch('https://api.punkapi.com/v2/beers/random');
        const infoPedido = await response.json();
        const mostrarPedido = `
        <p><img src="${infoPedido[0].image_url}" height="100" width="50"></p>
        <p>Nombre de la cerveza: ${infoPedido[0].name}</p>
        <p>Descripcion: ${infoPedido[0].description}</p>
        <p>ABV: ${infoPedido[0].abv}</p>
        <p>IBU: ${infoPedido[0].ibu}</p>
        <p>PH: ${infoPedido[0].ph}</p>
        `
            cerveza.innerHTML += mostrarPedido
        
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