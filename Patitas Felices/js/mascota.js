let url = new URL(location.href);
let idMascota = url.searchParams.get("id");

console.log(idMascota);

let mascotas = JSON.parse(localStorage.getItem("mascotas"));

let mascota = mascotas.find((item) => item.id === idMascota);

// console.log(mascota);
document.querySelector("h3").innerText = mascota.nombre;

//Agregar imagen de la mascota
document.querySelector("#imagen-mascota").src = mascota.imagen;
document.querySelector("#imagen-mascota").alt = mascota.nombre;

//Crear tabla con los datos
let contenedorTabla = document.querySelector("tbody");
let fila = document.createElement("tr");
let celdas = /*HTML */ `<td>${mascota.especie}</td>
<td>${mascota.estatura}</td>
<td>${mascota.edad}</td>
<td>${mascota.sexo}</td>`;
fila.innerHTML = celdas;
contenedorTabla.append(fila);
