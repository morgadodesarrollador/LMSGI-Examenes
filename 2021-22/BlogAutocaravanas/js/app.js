function inicio(){
    const main = document.querySelector("main section");

    const empresa = document.querySelector("header div#menutablet nav a#empresa");
    const integrales = document.querySelector("header div#menutablet nav a#integrales");
    const perfiladas = document.querySelector("header div#menutablet nav a#perfiladas");
    const capuchinas = document.querySelector("header div#menutablet nav a#capuchinas");

    empresa.addEventListener("click", () => {
        console.log("Has pinchado en empresa");
        fetch("index.html")
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestahtml => {
                console.log (respuestahtml)
                main.innerHTML = respuestahtml;
            })
    });
    
    
    integrales.addEventListener("click", () => {
        console.log("Has pinchado en integrales");
        fetch("html/integrales.html")
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestahtml => {
                console.log (respuestahtml)
                main.innerHTML = respuestahtml;
            })
    });


    perfiladas.addEventListener("click", () => {
        console.log("Has pinchado en perfiladas");
        fetch("html/perfiladas.html")
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestahtml => {
                console.log (respuestahtml)
                main.innerHTML = respuestahtml;
            })
    });


    capuchinas.addEventListener("click", () => {
        console.log("Has pinchado en capuchinas");
        fetch("html/integrales.html")
            .then(respuesta => {
                return respuesta.text()
            })
            .then(respuestahtml => {
                console.log (respuestahtml)
                main.innerHTML = respuestahtml;
            })
    });
}