const clima = document.getElementById('clima');
const boton = document.getElementById('boton');

async function pedir() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=6ee8d07c5b04493fb74113918230409&q=London');
        const infoPedido = await response.json();
        const mostrarPedido = `
        <p>La temperatura actual en Londres es de: ${infoPedido.current.temp_c}°C</p>
        <p>El clima actual en Londres es: ${infoPedido.current.condition.text} <img src="${infoPedido.current.condition.icon}"></p>

        `
            clima.innerHTML += mostrarPedido
        
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