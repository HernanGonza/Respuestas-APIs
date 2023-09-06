const perros = document.getElementById('perros');
const boton = document.getElementById('boton');
const selectPerros = document.createElement('select');

async function pedir() {
    try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds');
        const infoPedido = await response.json();
        
        for (let i = 0; i < infoPedido.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = infoPedido[i].name;
            selectPerros.appendChild(option);
        }
        
        perros.innerHTML = '';
        perros.appendChild(selectPerros);

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