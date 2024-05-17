import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(titulo, descripcion, url, imagen) {
    const video = document.createElement("li");
    video.className = "videos__item";

    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; geolocation"
        allowfullscreen></iframe>
        <div class="descripcion-video">
            <img src="${imagen}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>`

    return video;
}


async function listaVideos() {
    try{
        const listaAPI = await conectaAPI.listaVideos();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.titulo, element.descripcion, element.url, element.imagen)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de videos</h2>`;
    }
}

listaVideos();