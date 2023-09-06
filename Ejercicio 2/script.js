const posts = document.getElementById('usuarios');
const boton = document.getElementById('boton');

async function pedir() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const infoPedido = await response.json();
        for (let i = 0; i < infoPedido.length; i++) {
            const mostrarPedido = `
        <p>El nombre del usuario ${[i + 1]} es <strong>${infoPedido[i].name}</strong>, y su direccion es <strong>${infoPedido[i].address.street}, ${infoPedido[i].address.suite}, ${infoPedido[i].address.city}</strong></p>
        
       `
            usuarios.innerHTML += mostrarPedido
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