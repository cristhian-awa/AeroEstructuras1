const botonEnviar = document.getElementById("btnEnviar");

if (botonEnviar) {

    botonEnviar.addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {

        alert("Por favor, completa todos los campos.");

    } else {

        alert("¡Gracias, " + nombre + "! Tu mensaje fue enviado correctamente.");

    }

});
}
// =========================================
// FILTROS DE PROYECTOS
// =========================================

const botonesFiltro = document.querySelectorAll(".filtro");
const proyectos = document.querySelectorAll(".tarjeta-proyecto");

botonesFiltro.forEach(boton => {

    boton.addEventListener("click", () => {

        // Quitar activo de todos los botones
        botonesFiltro.forEach(boton => {
            boton.classList.remove("activo");
        });

        // Activar el botón seleccionado
        boton.classList.add("activo");

        // Saber qué categoría seleccionó el usuario
        const filtro = boton.getAttribute("data-filtro");

        // Mostrar los proyectos correspondientes
        proyectos.forEach(proyecto => {

            const categoria = proyecto.getAttribute("data-categoria");

            if (filtro === "todos" || categoria === filtro) {
                proyecto.style.display = "block";
            } else {
                proyecto.style.display = "none";
            }

        });

    });

});
// =========================================
// BUSCADOR DE PROYECTOS
// =========================================

const buscador = document.getElementById("buscador");

if (buscador) {

    buscador.addEventListener("input", () => {

        const texto = buscador.value.toLowerCase();

        proyectos.forEach(proyecto => {

            const contenido = proyecto.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                proyecto.style.display = "block";
            } else {
                proyecto.style.display = "none";
            }

        });

    });

}