let usuario = JSON.parse(localStorage.getItem("user")) || null;

//Si está la opción rol o no
if (usuario?.rol !== "admin") {
  document.getElementById("administrador").innerHTML = "";
}

function irMascota(id) {
  location.href = `../pages/mascota.html?id=${id}`;
}
