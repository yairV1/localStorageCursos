const formulario = document.getElementById("formulario");
const input_curso = document.getElementById("curso");
const input_profesor = document.getElementById("profesor");
const input_precio = document.getElementById("precio");
const input_ciudad = document.getElementById("ciudad");
const input_cupo = document.getElementById("cupo");
const mensaje = document.getElementById("mensajeCurso")

// de aca catutramos todo 
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Tomar valores correctamente
    const curso = input_curso.value.trim();
    const profesor = input_profesor.value.trim();
    const precio = input_precio.value.trim();
    const ciudad = input_ciudad.value.trim();
    const cupo = input_cupo.value.trim();

    // Validar
    if (curso === "" || profesor === "" || precio === "" || ciudad === "" || cupo === "") {
        alert("Por favor llene el formulario");
        return;
    }

    // Crear objeto curso
    const nuevoCurso = {
        nombre: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo
    };

    // Guardar en localStorage
    localStorage.setItem("curso", JSON.stringify(nuevoCurso));

    // Resetear formulario
    formulario.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const cursoCrear = localStorage.getItem("curso");

    if (cursoCrear) {
        const objetoCurso = JSON.parse(cursoCrear); // Usamos el JSON.parce para capturar un texto en un objeto

        // con este inerHTML se puede poner lo que son las "<br>" para hacir poder un salto de lineas desde js 
        mensaje.innerHTML =
            "Curso: " + objetoCurso.nombre + "<br>" +
            "Profesor: " + objetoCurso.profesor + "<br>" +
            "Precio: " + objetoCurso.precio + "<br>" +
            "Ciudad: " + objetoCurso.ciudad + "<br>" +
            "Cupo: " + objetoCurso.cupo;

    }
});

eliminar.addEventListener("click", ()=>{
    localStorage.removeItem("curso")

    mensaje.textContent="Ya no hay cursos"
})