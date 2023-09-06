const cervecerias = document.getElementById('cervecerias');
const boton = document.getElementById('boton');
const tablaCervecerias = document.createElement('table');
tablaCervecerias.className = 'tabla';

async function pedir() {
    try {
        const response = await fetch('https://api.openbrewerydb.org/breweries');
        const infoPedido = await response.json();

        // Crear encabezados de la tabla
        const thead = document.createElement('thead');
        const trHeader = document.createElement('tr');
        const thNombre = document.createElement('th');
        thNombre.textContent = 'Nombre';
        const thCiudad = document.createElement('th');
        thCiudad.textContent = 'Ciudad';
        const thEstado = document.createElement('th');
        thEstado.textContent = 'Estado';
        trHeader.appendChild(thNombre);
        trHeader.appendChild(thCiudad);
        trHeader.appendChild(thEstado);
        thead.appendChild(trHeader);

        // Crear filas de datos de la tabla
        const tbody = document.createElement('tbody');
        for (let i = 0; i < infoPedido.length; i++) {
            const trData = document.createElement('tr');
            const tdNombre = document.createElement('td');
            tdNombre.textContent = infoPedido[i].name;
            const tdCiudad = document.createElement('td');
            tdCiudad.textContent = infoPedido[i].city;
            const tdEstado = document.createElement('td');
            tdEstado.textContent = infoPedido[i].state;
            trData.appendChild(tdNombre);
            trData.appendChild(tdCiudad);
            trData.appendChild(tdEstado);
            tbody.appendChild(trData);
        }

   
        cervecerias.innerHTML = '';
        tablaCervecerias.appendChild(thead);
        tablaCervecerias.appendChild(tbody);
        cervecerias.appendChild(tablaCervecerias);

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