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
            alert('¡Gracias por tu mensaje! Cristian se pondrá en contacto contigo pronto.');
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
