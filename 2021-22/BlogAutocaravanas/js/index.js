function inicio(){
    console.log('documento app cargado');
    console.log(document);
    const vmain = document.querySelector('main section');
    const integral = document.querySelector('header nav a#integral')
    const perfiladas = document.querySelector('header nav a#perfiladas')

    integral.addEventListener('click', () => {
        console.log('has pinchado en integral')
        fetch('html/integral.html')
        .then(respuesta => {
            return respuesta.text()
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML)
            vmain.innerHTML = respuestaHTML;
        })
    });
    perfiladas.addEventListener('click', () => {
        console.log('has pinchado en perfiladas')
        fetch('html/perfiladas.html')
        .then(respuesta => {
            return respuesta.text()
        })
        .then(respuestaHTML => {
            console.log(respuestaHTML)
            vmain.innerHTML = respuestaHTML;
        })
    });
}