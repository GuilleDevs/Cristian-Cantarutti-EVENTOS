document.addEventListener('DOMContentLoaded', () => {
    console.log('Cristian Cantarutti EVENTOS - Web cargada correctamente');

    // Animación suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const evento = document.getElementById('evento').value;
            const mensaje = document.getElementById('mensaje').value;

            const texto = `Hola Cristian! 👋%0AQuiero reservar una fecha.%0A%0ANombre: ${nombre}%0ATipo de evento: ${evento}%0AMensaje: ${mensaje}`;
            const numero = '5492302524275'; // reemplaza con tu número real sin espacios ni guiones

            const url = `https://wa.me/${numero}?text=${texto}`;
            window.location.href = url;

            contactForm.reset();

        });
    }

    // Efecto de scroll para el header
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
            nav.style.padding = '15px 5%';
        } else {
            nav.style.background = 'rgba(5, 5, 5, 0.8)';
            nav.style.padding = '20px 5%';
        }
    });
});
