const tablaBody = document.querySelector("#tablaCursos tbody");

document.addEventListener("DOMContentLoaded", () => {
    const cursosGuardados = JSON.parse(localStorage.getItem("cursos")) || [];

    cursosGuardados.forEach((curso) => {
        const fila = document.createElement("tr");

        const tdNombre = document.createElement("td");
        tdNombre.textContent = curso.nombre;

        const tdProfesor = document.createElement("td");
        tdProfesor.textContent = curso.profesor;

        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = curso.precio;

        const tdCiudad = document.createElement("td");
        tdCiudad.textContent = curso.ciudad;

        const tdCupo = document.createElement("td");
        tdCupo.textContent = curso.cupo;

        // Agregar las celdas a la fila
        fila.appendChild(tdNombre);
        fila.appendChild(tdProfesor);
        fila.appendChild(tdPrecio);
        fila.appendChild(tdCiudad);
        fila.appendChild(tdCupo);

        // Insertar fila en la tabla
        tablaBody.appendChild(fila);
    });
});
