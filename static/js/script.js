document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value; // Obtiene el nombre
    const email = document.getElementById('email').value; // Obtiene el email
    const mensaje = document.getElementById('mensaje');

    // Muestra un mensaje de confirmación
    mensaje.textContent = `Gracias, ${nombre}. Hemos recibido tu mensaje y te contactaremos pronto.`;
    this.reset(); // Reinicia el formulario
});
