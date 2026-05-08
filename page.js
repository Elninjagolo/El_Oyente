
// Simulamos una base de datos de noticias
const noticias = [
    {
        titulo: "Nuevo avance en energías renovables",
        resumen: "Científicos desarrollan paneles solares un 40% más eficientes utilizando nuevos materiales...",
        categoria: "Ciencia",
        imagen: "https://placehold.co/400x250/eeeeee/999999?text=Energía"
    },
    {
        titulo: "La final del campeonato será este domingo",
        resumen: "Los dos mejores equipos de la temporada se enfrentan en un partido que promete ser histórico...",
        categoria: "Deportes",
        imagen: "https://placehold.co/400x250/eeeeee/999999?text=Deportes"
    },
    {
        titulo: "Lanzamiento del nuevo smartphone",
        resumen: "La compañía líder en tecnología anuncia su dispositivo más avanzado hasta la fecha con batería infinita...",
        categoria: "Tecnología",
        imagen: "https://placehold.co/400x250/eeeeee/999999?text=Tecnología"
    }
];

// Función para inyectar las noticias en el HTML
function cargarNoticias() {
    const contenedorNoticias = document.getElementById('news-grid');
    
    noticias.forEach(noticia => {
        // Creamos la estructura HTML para cada noticia
        const articuloHTML = `
            <article class="news-card">
                <img src="${noticia.imagen}" alt="${noticia.titulo}">
                <br><br>
                <span class="category">${noticia.categoria}</span>
                <h3>${noticia.titulo}</h3>
                <p>${noticia.resumen}</p>
                <a href="#" class="read-more">Leer más</a>
            </article>
        `;
        
        // Lo añadimos al contenedor
        contenedorNoticias.innerHTML += articuloHTML;
    });
}

// Función para el menú hamburguesa en móviles
function configurarMenuMovil() {
    const botonMenu = document.getElementById('menuToggle');
    const enlacesNav = document.querySelector('.nav-links');

    botonMenu.addEventListener('click', () => {
        enlacesNav.classList.toggle('active');
    });
}

// Ejecutar las funciones cuando la página termine de cargar
document.addEventListener('DOMContentLoaded', () => {
    cargarNoticias();
    configurarMenuMovil();
});
