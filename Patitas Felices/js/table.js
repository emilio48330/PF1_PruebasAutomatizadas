let cuerpoTabla = document.querySelector("tbody") || null;
let contadorMascotas = document.getElementById("count");
let idMascota = null;
const myModal = new bootstrap.Modal(document.getElementById("modalUpdate"));
// let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

crearTabla();

function crearTabla() {
  if (cuerpoTabla) {
    cuerpoTabla.innerHTML = "";
    contadorMascotas.innerText = "Mascotas registradas: " + mascotas.length;
    // if(localStorage.getItem('mascotas')){
    //     mascotas = JSON.parse(localStorage.getItem('mascotas'))
    // }else{
    //     mascotas=[]
    // }
    if (mascotas.length > 0) {
      //recorrer el array
      mascotas.map((mascota) => {
        let fila = document.createElement("tr");
        let celdas = /*HTML */ `<td>${mascota.nombre}</td>
            <td>${mascota.especie}</td>
            <td>${mascota.raza}</td>
            <td>${mascota.edad}</td>
            <td>${mascota.sexo}</td>
            <td>${mascota.estatura}</td>
            <td>${mascota.color}</td>
            <td>
            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUpdate" onclick="cargarFormulario('${mascota.id}')">
            <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button class="btn btn-danger" onclick="borrarRegistro('${mascota.id}')">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            </td>`;

        fila.innerHTML = celdas;
        cuerpoTabla.append(fila);
      });
    } else {
      cuerpoTabla.append("No hay datos para mostrar");
    }
  }
}

//cargar datos en el modal
const cargarFormulario = (id) => {
  idMascota = mascotas.findIndex((item) => item.id === id);
  let formulario = document.querySelector("#formulario-update");

  Array.from(formulario.elements).forEach((campo) => {
    //vacuna
    if (campo.type === "checkbox") {
      campo.checked = mascotas[idMascota][campo.id];
    } else {
      campo.value = mascotas[idMascota][campo.id]; //mascotas[1].especie
    }
  });

  //  nombre.value = mascotas[idMascota].nombre;
  // especie.value = mascotas[idMascota].especie;
  // raza.value = mascotas[idMascota].raza;
  // edad.value = mascotas[idMascota].edad;
  // sexo.value = mascotas[idMascota].sexo;
  // estatura.value = mascotas[idMascota].estatura;
  // color.value = mascotas[idMascota].color;
  // vacunado.checked = mascotas[idMascota].vacunado;
  // esterilizado.checked = mascotas[idMascota].esterilizado;
  // contacto.value = mascotas[idMascota].contacto;
  // destacado.checked = mascotas[idMascota].destacado;
  // imagen.value = mascotas[idMascota].imagen;
};
//Actualizar los datos de mascota con el modal
const actualizarMascota = (event) => {
  event.preventDefault();

  let formulario = document.querySelector("#formulario-update");

  Array.from(formulario.elements).forEach((campo) => {
    //vacuna
    if (campo.type === "checkbox") {
      mascotas[idMascota][campo.id] = campo.checked;
    } else {
      mascotas[idMascota][campo.id] = campo.value; //mascotas[1].especie
    }
  });
  // mascotas[idMascota].nombre = nombre.value
  // especie.value = mascotas[idMascota].especie;
  // raza.value = mascotas[idMascota].raza;
  // edad.value = mascotas[idMascota].edad;
  // sexo.value = mascotas[idMascota].sexo;
  // estatura.value = mascotas[idMascota].estatura;
  // color.value = mascotas[idMascota].color;
  // mascotas[idMascota].vacuna= vacuna.checked
  // esterilizado.checked = mascotas[idMascota].esterilizado;
  // contacto.value = mascotas[idMascota].contacto;
  // destacado.checked = mascotas[idMascota].destacado;
  // imagen.value = mascotas[idMascota].imagen;
  localStorage.setItem("mascotas", JSON.stringify(mascotas));
  crearTabla();
  myModal.hide();
};

const borrarRegistro = (id) => {
  let index = mascotas.findIndex((item) => item.id === id);

  if (index >= 0) {
    let validar = confirm(
      `Está seguro que quiere eliminar a ${mascotas[index].nombre}`
    );

    if (validar) {
      mascotas.splice(index, 1);
      localStorage.setItem("mascotas", JSON.stringify(mascotas));
      crearTabla();
    }
  }
};
