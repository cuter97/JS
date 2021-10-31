const productos = [{id: 1, producto: "IPA 1L", precio: 120},
{id: 2, producto: "Amber Lager 1L", precio: 100},
{id: 3, producto: "Red Ipa 1L", precio: 140},
{id: 4, producto: "Pilsen 1L", precio: 90}];

let padre = document.getElementById("productos");

for (const i of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<p> cerveza: ${i.producto}</p>
                            <p> precio: ${i.precio}</p>`;
    padre.appendChild(contenedor);
}
