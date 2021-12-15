function inicio() {
    const main = document.querySelector('main section');

    const empresa = document.querySelector('header #bottom #menu2 #empresa');
    const integrales = document.querySelector('header #bottom #menu2 #integrales');
    const perfiladas = document.querySelector('header #bottom #menu2 #perfiladas');
    const capuchinas = document.querySelector('header #bottom #menu2 #capuchinas');
    const van = document.querySelector('header #bottom #menu2 #van');

    empresa.addEventListener("click", () => {
        fetch('../html/empresa.html')
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log (respuestaHtml);
                main.innerHTML = respuestaHtml;
            })
    });

    van.addEventListener("click", () => {
        fetch('../html/van.html')
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log (respuestaHtml);
                main.innerHTML = respuestaHtml;
            })
    });

    capuchinas.addEventListener("click", () => {
        fetch('../html/capuchinas.html')
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log (respuestaHtml);
                main.innerHTML = respuestaHtml;
            })
        });

    integrales.addEventListener("click", () => {
        fetch('../html/integrales.html')
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log (respuestaHtml);
                main.innerHTML = respuestaHtml;
            })
    });

    perfiladas.addEventListener("click", () => {
        fetch('../html/perfiladas.html')
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log (respuestaHtml);
                main.innerHTML = respuestaHtml;
            })
    });
};