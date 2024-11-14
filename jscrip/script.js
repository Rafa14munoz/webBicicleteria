function getBicis() {
    const xhr = new XMLHttpRequest();
    $contenedorBicis = document.getElementById("contenedor_bicis")

    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('conectado');


            let datos = JSON.parse(xhr.responseText);
            //
            let bicis = datos.todasLasBicis;

            bicis.forEach((bici) => {
                $contenedorBicis.innerHTML += `
                <div class="SBK">
                    <div class="face front">
                        <img src="${bici.front.imgSrc}" alt="${bici.front.alt}">
                        <h3>${bici.front.title}</h3>
                    </div>
                    <div class="face back">
                        <p class="descripcion_bici">${bici.back.description}</p>
                        <div class="precio">
                            <p>$${bici.back.precio}</p>
                        </div>
                    </div>
                </div>
                `
            });

        } else {
            $contenedorBicis.innerHTML = `
            <div class="tarjeta">
                <img src="" alt="">
                <h2>Error no se encontraron datos</h2>
                <p>${xhr.status}</p>
                <p>${xhr.statusText}</p>
            </div>`;
        }
    })

    xhr.open("GET", '/data/data.json');

    xhr.send();
}
