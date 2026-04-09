document.addEventListener('DOMContentLoaded', () => {

    /* --- Navbar Scroll Effect --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- Mobile Menu Toggle --- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    /* --- Smooth Scrolling --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active'); // Cerrar menú en mobile si estaba abierto
            if (menuToggle) {
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /* --- Scroll Reveal Animations --- */
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150; // Punto desde abajo de la pantalla donde se activa
        
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Llamada inicial por si ya hay elementos visibles

    /* --- Skills Slider Generation --- */
    const skillsTrack = document.getElementById('skillsTrack');
    const skills = [
        "JavaScript", "PHP", "Laravel", "MySQL", "Java", 
        "Spring Boot", "C#", ".NET", "TypeScript", "Docker",
        "GitHub", "Figma", "Soporte IT", "Redes"
    ];

    if (skillsTrack) {
        // Generar elementos
        let html = '';
        skills.forEach(skill => {
            html += `<div class="slider-item"><i class="fas fa-check-circle" style="color: var(--primary)"></i> ${skill}</div>`;
        });
        
        // Duplicar para el efecto infinito 
        skillsTrack.innerHTML = html + html;
    }
    
    /* --- 3D Tilt Effect on Profile Image --- */
    const tiltContainer = document.querySelector('.hero-image-wrapper');
    const tiltElement = document.querySelector('.tilt-effect');
    
    if (tiltContainer && tiltElement) {
        tiltContainer.addEventListener('mousemove', (e) => {
            const rect = tiltContainer.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = -(y / 15);
            const rotateY = x / 15;
            
            tiltElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        tiltContainer.addEventListener('mouseleave', () => {
            tiltElement.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            tiltElement.style.transition = 'transform 0.5s ease';
        });
        
        tiltContainer.addEventListener('mouseenter', () => {
            tiltElement.style.transition = 'none';
        });
    }

});
