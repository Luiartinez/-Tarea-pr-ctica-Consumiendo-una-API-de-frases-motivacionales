const boton = document.getElementById('btnObtenerFrase');

boton.addEventListener('click', mostrarFrase);

function mostrarFrase() {
    const apiURL = 'https://api.quotable.io/random';

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
           document.getElementById('textoFrase').textContent = `"${data.content}"`;
            document.getElementById('autorFrase').textContent = `— ${data.author}`;
        })
        .catch(error => {
            document.getElementById('textoFrase').textContent = 'Ocurrió un error al obtener la frase.';
            document.getElementById('autorFrase').textContent = '';
            console.error('Detalles del error:', error);
        });
}
