
console.log('fichero cargado');
function inicio(){
    console.log('documento app cargado');
    const vmain = document.querySelector('main section');
    const integrales = document.querySelector('header #top nav a#integrales');
    const perfiladas = document.querySelector('header #top nav a#perfiladas');

    integrales.addEventListener('click', () => {
        console.log('has pinchado en integrales');
        fetch('html/integrales.html')
        .then(respuesta => {
            return respuesta.text()
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML);
            vmain.innerHTML = respuestaHTML;
        })
    });
    perfiladas.addEventListener('click', () => {
        console.log('has pinchado en perfiladas');
        fetch('html/perfiladas.html')
        .then(respuesta => {
            return respuesta.text()
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML);
            vmain.innerHTML = respuestaHTML;
        })
    });
}