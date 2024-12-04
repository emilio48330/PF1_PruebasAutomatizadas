document.addEventListener("DOMContentLoaded", function () {
    // Datos de los perros (25 perros con datos estáticos)
    const perros = [
    { nombre: "Luna", raza: "Pitbull", edad: "Adulto", ubicacion: "Santo Domingo", fechaAlta: "2023-07-22" },
      { nombre: "Rocky", raza: "Dachshund", edad: "Bebé", ubicacion: "Distrito Nacional", fechaAlta: "2023-10-17" },
      { nombre: "Toby", raza: "Pastor Belga", edad: "Joven", ubicacion: "Santo Domingo", fechaAlta: "2023-09-02" },
      { nombre: "Nala", raza: "Cocker Spaniel", edad: "Adulto", ubicacion: "Santo Domingo", fechaAlta: "2023-06-30" },
      { nombre: "Leo", raza: "Boxer", edad: "Joven", ubicacion: "Santo Domingo", fechaAlta: "2023-08-05" },
      { nombre: "Maya", raza: "Pitbull", edad: "Adulto", ubicacion: "Santo Domingo", fechaAlta: "2023-06-10" },
      { nombre: "Charlie", raza: "Maltés", edad: "Joven", ubicacion: "Distrito Nacional", fechaAlta: "2023-08-25" },
      { nombre: "Tina", raza: "Doberman", edad: "Bebé", ubicacion: "Santo Domingo", fechaAlta: "2023-07-17" },
      { nombre: "Oscar", raza: "Pastor Alemán", edad: "Adulto", ubicacion: "Distrito Nacional", fechaAlta: "2023-09-03" },
      { nombre: "Zoe", raza: "Beagle", edad: "Joven", ubicacion: "Santo Domingo", fechaAlta: "2023-06-18" },
      { nombre: "Lola", raza: "Chihuahua", edad: "Bebé", ubicacion: "Santo Domingo", fechaAlta: "2023-07-25" },
      { nombre: "Kaiser", raza: "Rottweiler", edad: "Joven", ubicacion: "Distrito Nacional", fechaAlta: "2023-09-12" },
      { nombre: "Simba", raza: "Golden Retriever", edad: "Adulto", ubicacion: "Santo Domingo", fechaAlta: "2023-06-03" },
      { nombre: "Cleo", raza: "Shih Tzu", edad: "Bebé", ubicacion: "Santo Domingo", fechaAlta: "2023-08-10" },
      { nombre: "Omar", raza: "Pitbull", edad: "Joven", ubicacion: "Distrito Nacional", fechaAlta: "2023-11-02" },
      { nombre: "Fiona", raza: "Beagle", edad: "Adulto", ubicacion: "Santo Domingo", fechaAlta: "2023-09-08" },
      { nombre: "Toby", raza: "Bulldog", edad: "Joven", ubicacion: "Santo Domingo", fechaAlta: "2023-07-20" }
    ];
  
    // Obtener el cuerpo de la tabla
    const tablaPerros = document.getElementById("tabla-perros");
  
    // Iterar sobre los perros y agregar una fila por cada perro
    perros.forEach((perro, index) => {
      const fila = document.createElement("tr");
  
      // Crear y agregar las celdas
      fila.innerHTML = `
        <td>${index + 1}</td>
        <td>${perro.nombre}</td>
        <td>${perro.raza}</td>
        <td>${perro.edad}</td>
        <td>${perro.ubicacion}</td>
        <td>${perro.fechaAlta}</td>
      `;
      
      // Agregar la fila al cuerpo de la tabla
      tablaPerros.appendChild(fila);
    });
  });
  