const posts = document.getElementById('lanzamiento');
const boton = document.getElementById('boton');

async function pedir() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/launches/latest');
        const infoPedido = await response.json();
        const mostrarPedido = `
        <p><img src="${infoPedido.links.patch.small}"></p>
        <p>Nombre de la tripulacion: ${infoPedido.name}</p>
        <p>Numero de vuelo: ${infoPedido.flight_number}</p>
        <p>Fecha de lanzamiento: ${infoPedido.date_local}</p>
        <p>Enlace Wikipedia: <a href="${infoPedido.links.wikipedia}" target="_blank">${infoPedido.links.wikipedia}</a></p>
        <p>Enlace Youtube: <a href="${infoPedido.links.webcast}" target="_blank">${infoPedido.links.webcast}</a></p>
        `
            lanzamiento.innerHTML += mostrarPedido
        
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