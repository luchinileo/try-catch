const archivo = document.getElementById('archivo')


function leerArchivo(event) {
    const dataArchivo = event.target.files[0]

    try {
        if(dataArchivo.type !== 'text/plain'){
            throw new Error('El archivo no es de tipo texto')
        }
        var lector = new FileReader() 
        lector.onload = function(event) {
            var elemento = document.getElementById('contenedor-archivo')
            elemento.classList.remove('error');
            elemento.innerHTML = event.target.result
        }
       lector.readAsText(dataArchivo)
    } catch (error) {
        var elemento = document.getElementById('contenedor-archivo')
        elemento.innerText = error
        elemento.classList.add('error')
    }
}

archivo.addEventListener('change', leerArchivo)