const expresiones = {
    numeros: /^[0-9]+$/, 
}

/* función para filtrar datos del datos.json */
function BuscarProductos() {
    var desde = parseInt(document.getElementById('desde').value);//Parseamos a entero el valor tomado desde el input
    var hasta = parseInt(document.getElementById('hasta').value);//Ya que los valores que se toman por defecto son string
    var cat = document.getElementById('categoria').value;

    if (hasta == "") {
        hasta = 9999999999999 //En caso de que el usuario no cargue ningun valor declaramos el mayor numero posible
    }
    if (desde == "") {
        desde = 0 //En caso de que el usuario no cargue ningun valor declaramos el menor numero posible
    }

    const xhr = new XMLHttpRequest(),
        $lista = document.getElementById('contenedor_bicis');

    console.log(xhr);
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('conectado');
            console.log('HOLA2',document.getElementById('desde').value,hasta);

            //Parseo el texto plano del JSON
            let json = JSON.parse(xhr.responseText);
            console.log(json.todasLasBicis);
            $lista.innerHTML = ``;
 
            if (cat == "1" || cat == "2") {  
                
                //Se muestran los productos según categoria y precio seleccionado
                
                json.todasLasBicis.forEach((bici) => {
                    console.log('PRUEBA 2.0');
                
                    if (desde <= bici.back.precio && hasta >= bici.back.precio && bici.back.categoria == cat) {
                        console.log(bici.back.precio)
                        $lista.innerHTML += `
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
                </div>`;
                    } else {
                    }
                } )

            } else { 
                //En caso de que el usuario no coloque la categoria
                //El codigo va a imprimir todas las categorias disponibles
               json.todasLasBicis.forEach((bici) => {
                    console.log('PRUEBA 2.0');
                    if (desde <= bici.back.precio && hasta >= bici.back.precio) {
                        console.log(bici.back.precio)
                        $lista.innerHTML += `
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
                </div>`;
                    } else {
                    } 
                });
            }
        } else {
            //Mensaje en caso de no conectarse a datos.json
            $lista.innerHTML = `
            <div class="tarjeta">
            <img src="" alt="">
            <h2>Error no se encontraron datos</h2>
            <p>${xhr.status}</p>
            <p>${xhr.statusText}</p>
            </div>`;
        }
    });

    xhr.open("GET", '../data/data.json');
    xhr.send();
}