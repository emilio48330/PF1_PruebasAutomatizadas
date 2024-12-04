// Función para mostrar el popup modal
function showAdoptionPopup() {
    // Crear el contenedor del modal
    const modalHTML = `
      <div class="modal fade" id="adoptionModal" tabindex="-1" aria-labelledby="adoptionModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="adoptionModalLabel">Adopta o Acoge a un Amigo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body text-center">
              <img src="../assets/adoptar.jpg" class="rounded-circle mb-3" alt="Mascota" style="width: 200px; height: auto;">
              <p>
                ¡Dar una nueva oportunidad a una mascota puede ser una experiencia transformadora! <br>
                Adopta para darle un hogar definitivo o acógela temporalmente para ayudarla a encontrar su familia ideal. <br>
                Cada acción cuenta para cambiar la vida de estos adorables compañeros.
              </p>
            </div>
            <div class="modal-footer justify-content-center">
              <a href="https://www.instagram.com/_arielguzman_/" target="_blank" class="btn btn-secondary">
                <i class="fa fa-handshake-o" aria-hidden="true"></i> Acoger
              </a>
              <a href="https://www.instagram.com/_arielguzman_/" target="_blank" class="btn btn-primary">
                <i class="fa fa-heart" aria-hidden="true"></i> Adoptar
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Insertar el modal en el body
    const body = document.querySelector("body");
    body.insertAdjacentHTML("beforeend", modalHTML);
  
    // Mostrar el modal
    const adoptionModal = new bootstrap.Modal(document.getElementById("adoptionModal"));
    adoptionModal.show();
  
    // Eliminar el modal del DOM cuando se cierre
    document.getElementById("adoptionModal").addEventListener("hidden.bs.modal", function () {
      document.getElementById("adoptionModal").remove();
    });
  }
  