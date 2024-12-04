//Si está la opción rol o no
if (usuario?.rol !== "admin") {
    document.getElementById("administrador").innerHTML = "";
  }
  
  let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  
  const cargarDestacados = () => {
    let contenedor = document.querySelector("#destacados");
    let destacados = mascotas.filter((mascota) => mascota.destacado === true);
  
    if (destacados.length > 0) {
      destacados.map((destacado) => {
        let col = document.createElement("div");
        col.classList = "col my-3";
  
        let card = /*HTML */ ` <div class="card">
                  <img src=${destacado.imagen} class="card-img-top" alt=${destacado.nombre}>
                  <div class="card-body">
                  <h5 class="card-title">${destacado.nombre}</h5>
                  <p class="card-text">${destacado.raza}</p>
                  <a href="#" onclick="irMascota('${destacado.id}')">Ver más...</a>
                  </div>
               </div>`;
  
        col.innerHTML = card;
        contenedor.append(col);
      });
    } else {
      let col = document.createElement("div");
      let mensaje = `<h4 class="text-center">No hay mascotas destacadas</h4>`;
      col.innerHTML = mensaje;
      contenedor.append(col);
    }
  };
  
  cargarDestacados();
  