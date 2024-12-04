// Función para mostrar el popup de búsqueda deshabilitada
function showSearchDisabledPopup() {
    // Crear el contenedor del modal
    const modalHTML = `
      <div class="modal fade" id="searchDisabledModal" tabindex="-1" aria-labelledby="searchDisabledModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <!-- Cabecera del modal -->
            <div class="modal-header">
              <h5 class="modal-title" id="searchDisabledModalLabel">
                <i class="fa fa-info-circle me-2" aria-hidden="true"></i> Función en mantenimiento
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Cuerpo del modal -->
            <div class="modal-body text-center">
              <p class="mb-4">
                La función de búsqueda está temporalmente deshabilitada debido a tareas de mantenimiento. 
                Estamos trabajando para habilitarla lo antes posible. 
                <strong>¡Gracias por tu paciencia!</strong>
              </p>
              <img src="../assets/sin resultados.jpg" alt="Mantenimiento" class="img-fluid mb-3" style="width: 200px; height: auto;">
            </div>
            <!-- Pie del modal -->
            <div class="modal-footer">
              <button type="button" class="btn btn-primary w-100" data-bs-dismiss="modal">
                <i class="fa fa-check-circle me-2" aria-hidden="true"></i> Entendido
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Añadir el modal al documento
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
  
    // Inicializar y mostrar el modal
    const modalElement = new bootstrap.Modal(document.getElementById("searchDisabledModal"));
    modalElement.show();
  }
  
  // Función para manejar el envío del formulario
  function handleSearchFormSubmit(event) {
    event.preventDefault(); // Evita el envío del formulario
    showSearchDisabledPopup(); // Muestra el popup
  }
  