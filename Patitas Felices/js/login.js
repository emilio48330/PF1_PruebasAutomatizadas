// Inicializar un único usuario válido
const inicializarUsuario = () => {
    let adminUser = {
      id: 1,
      email: "admin@adopt-ar.com",
      password: "admin12345678",
    };
  
    localStorage.setItem("adminUser", JSON.stringify(adminUser));
  };
  
  // Cerrar sesión al cargar la página
  const logOut = () => {
    localStorage.removeItem("user");
  };
  logOut();
  
  // Elementos del formulario
  const correo = document.getElementById("email");
  const pass = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");
  
  // Lógica de inicio de sesión
  const logIn = (event) => {
    event.preventDefault();
  
    // Obtener el usuario administrador almacenado
    let adminUser = JSON.parse(localStorage.getItem("adminUser"));
  
    // Validar los datos ingresados
    if (
      correo.value.trim() === adminUser.email &&
      pass.value.trim() === adminUser.password
    ) {
      // Usuario válido, redirigir al index
      localStorage.setItem("user", JSON.stringify(adminUser));
      location.assign("../indexadmin.html");
    } else {
      // Mostrar error
      errorMessage.style.display = "block";
      errorMessage.textContent = "Correo o contraseña incorrectos.";
    }
  };
  
  // Inicializar el formulario
  document.getElementById("formulario").addEventListener("submit", logIn);
  
  // Inicializar el usuario al cargar la página
  inicializarUsuario();
  