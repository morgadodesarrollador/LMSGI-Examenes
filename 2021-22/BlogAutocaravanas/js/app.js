function inicio() {
    console.log('documento app cargado');
    console.log(document);
    const main = document.querySelector('main');

    const integrales = document.querySelector('header div#mapa nav a#integrales');
    const perfiladas = document.querySelector('header div#mapa nav a#perfiladas');
    const capuchinas = document.querySelector('header div#mapa nav a#capuchinas');
    const van = document.querySelector('header div#mapa nav a#van');

    integrales.addEventListener("click", () => {
        console.log(' has pinchado en integrales');
        fetch('html/integrales.html')
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log (respuestaHtml);
                main.innerHTML = respuestaHtml;
            })
    });

    perfiladas.addEventListener("click", () => {
        console.log('has pinchado en perfiladas');
        fetch('html/perfiladas.html')
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log (respuestaHtml);
                main.innerHTML = respuestaHtml;
            })
    });

    capuchinas.addEventListener("click", () => {
        console.log('has pinchado en capuchinas');
        fetch('html/capuchinas.html')
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log (respuestaHtml);
                main.innerHTML = respuestaHtml;
            })
    });

    van.addEventListener("click", () => {
        console.log('has pinchado en van');
        fetch('html/van.html')
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log (respuestaHtml);
                main.innerHTML = respuestaHtml;
            })
    });
}