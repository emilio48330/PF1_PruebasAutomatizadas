document.addEventListener("DOMContentLoaded", () => {
    const tablaMascotas = document.getElementById("tabla-mascotas");
    const formMascota = document.getElementById("formMascota");
    let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
    let editIndex = null;
  
    const renderTabla = () => {
      tablaMascotas.innerHTML = "";
      mascotas.forEach((mascota, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${index + 1}</td>
          <td>${mascota.nombre}</td>
          <td>${mascota.genero}</td>
          <td>${mascota.edad}</td>
          <td>${mascota.tamano}</td>
          <td>
            <button class="btn btn-warning btn-sm me-2" onclick="editarMascota(${index})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="borrarMascota(${index})">Borrar</button>
          </td>
        `;
        tablaMascotas.appendChild(fila);
      });
    };
  
    formMascota.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const genero = document.getElementById("genero").value;
      const edad = document.getElementById("edad").value;
      const tamano = document.getElementById("tamano").value;
  
      const nuevaMascota = { nombre, genero, edad, tamano };
  
      if (editIndex !== null) {
        mascotas[editIndex] = nuevaMascota;
        editIndex = null;
      } else {
        mascotas.push(nuevaMascota);
      }
  
      localStorage.setItem("mascotas", JSON.stringify(mascotas));
      renderTabla();
      formMascota.reset();
      const modal = bootstrap.Modal.getInstance(document.getElementById("modalMascota"));
      modal.hide();
    });
  
    window.editarMascota = (index) => {
      editIndex = index;
      const mascota = mascotas[index];
      document.getElementById("nombre").value = mascota.nombre;
      document.getElementById("genero").value = mascota.genero;
      document.getElementById("edad").value = mascota.edad;
      document.getElementById("tamano").value = mascota.tamano;
      const modal = new bootstrap.Modal(document.getElementById("modalMascota"));
      modal.show();
    };
  
    window.borrarMascota = (index) => {
      mascotas.splice(index, 1);
      localStorage.setItem("mascotas", JSON.stringify(mascotas));
      renderTabla();
    };
  
    renderTabla();
  });
  