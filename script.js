const botonJugar = document.getElementById('botonJugar');
const resultado = document.getElementById('resultado');
const imagen = resultado.querySelector('img');
const texto = resultado.querySelector('p');

// Cargar datos JSON
fetch('data/textos.json')
    .then(response => response.json())
    .then(datosTextos => {
        // Cargar las rutas de las imágenes desde el archivo JSON
        fetch('data/imagenes.json')
            .then(response => response.json())
            .then(imagenes => {
                // Función mostrarResultado
                function mostrarResultado() {
                    const indiceImagen = Math.floor(Math.random() * imagenes.length);
                    const indiceTexto = Math.floor(Math.random() * datosTextos.length);

                    // Restablecer el estado de error
                    let errorCargado = false; // Variable para controlar si ya se ha mostrado un error

                    // Establecer la fuente de la imagen
                    imagen.src = imagenes[indiceImagen];
                    texto.textContent = datosTextos[indiceTexto];

                    // Mostrar el resultado
                    resultado.style.display = 'block';

                    // Control de errores para la carga de imágenes
                    imagen.onerror = function() {
                        if (!errorCargado) { // Solo mostrar el error una vez
                            errorCargado = true; // Marcar que se ha mostrado un error
                            imagen.src = 'assets/img/error.JPG'; // Ruta de una imagen de error
                            texto.textContent = "Mira cómo lloro porque no se pudo cargar la imagen. ¡Ánimo...Inténtalo de nuevo!";
                        }
                    };
                }

                // Evento click en el botón
                botonJugar.addEventListener('click', mostrarResultado);
            })
            .catch(error => {
                console.error('Error al cargar las imágenes:', error);
            });
    })
    .catch(error => {
        console.error('Error al cargar los textos:', error);
    });

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

// Hamburger menu functionality
hamburger.addEventListener("click", openMenu);


function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Theme switcher functionality
checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});
