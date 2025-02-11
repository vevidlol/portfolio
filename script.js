// Custom Cursor



const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Intersection Observer for cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Particle Effect
class Particle {
    constructor() {
        this.reset();
        this.size = Math.random() * 3;
        this.element = document.createElement('div');
        this.element.className = 'particle';
        this.element.style.width = this.size + 'px';
        this.element.style.height = this.size + 'px';
        document.getElementById('particles').appendChild(this.element);
    }

    reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.velocityX = (Math.random() - 0.5) * 2;
        this.velocityY = (Math.random() - 0.5) * 2;
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x < 0 || this.x > window.innerWidth) this.velocityX *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.velocityY *= -1;

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

const particles = Array.from({ length: 50 }, () => new Particle());

function animate() {
    particles.forEach(particle => particle.update());
    requestAnimationFrame(animate);
}

animate();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var typed = new Typed("#typed", {
    strings: [
        "Crafting digital experiences.",
        "Blending design with code.",
        "Building seamless interfaces.",
        "Securing the web, one line at a time."
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "",
    fadeOut: true,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500
});
