const formulario = document.getElementById("formulario");
const input_curso = document.getElementById("curso");
const input_profesor = document.getElementById("profesor");
const input_precio = document.getElementById("precio");
const input_ciudad = document.getElementById("ciudad");
const input_cupo = document.getElementById("cupo");
const mensaje = document.getElementById("mensajeCurso");
const eliminar = document.getElementById("delete");

// Guardar curso
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const curso = input_curso.value.trim();
    const profesor = input_profesor.value.trim();
    const precio = input_precio.value.trim();
    const ciudad = input_ciudad.value.trim();
    const cupo = input_cupo.value.trim();

    if (!curso || !profesor || !precio || !ciudad || !cupo) {
        alert("Por favor complete todos los campos");
        return;
    }

    const nuevoCurso = { nombre: curso, profesor, precio, ciudad, cupo };

    // Guardar en localStorage
    const cursosGuardados = JSON.parse(localStorage.getItem("cursos")) || [];
    cursosGuardados.push(nuevoCurso);
    localStorage.setItem("cursos", JSON.stringify(cursosGuardados));

    mostrarUltimoCurso(nuevoCurso);
    formulario.reset();
});

// Mostrar último curso en pantalla
function mostrarUltimoCurso(curso) {
    mensaje.innerHTML =
        "Curso: " + curso.nombre + "<br>" +
        "Profesor: " + curso.profesor + "<br>" +
        "Precio: " + curso.precio + "<br>" +
        "Ciudad: " + curso.ciudad + "<br>" +
        "Cupo: " + curso.cupo;
}

// Eliminar todos los cursos
eliminar.addEventListener("click", () => {
    localStorage.removeItem("cursos");
    mensaje.textContent = "Ya no hay cursos";
});
