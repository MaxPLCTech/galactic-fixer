// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value,
            urgency: document.getElementById('urgency').value
        };
        
        // Show success message
        alert('🚀 Message received! We\'ll contact you faster than light speed!');
        
        // Log to console (in production, this would send to your backend)
        console.log('Form submission:', formData);
        
        // Reset form
        contactForm.reset();
        
        // In production, you would send this to your backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // })
    });
}

// Add parallax effect to stars on scroll
let lastScrollY = window.scrollY;
const stars = document.querySelector('.stars');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const delta = scrollY - lastScrollY;
    
    if (stars) {
        const currentTransform = stars.style.transform || 'translateY(0)';
        const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)/) ? RegExp.$1 : 0);
        stars.style.transform = `translateY(${currentY + delta * 0.5}px)`;
    }
    
    lastScrollY = scrollY;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and service items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .service-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.15s ease';
    });
});

// Rocket animation on hover
const rocket = document.querySelector('.rocket');
if (rocket) {
    rocket.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-30px) rotate(-5deg)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    rocket.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
}

// Mobile menu toggle (if you want to add a hamburger menu later)
const createMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const navBar = document.querySelector('.nav-bar');
    
    if (window.innerWidth <= 640) {
        // Mobile menu logic could go here
        console.log('Mobile view detected');
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    if (konamiCode.length > konamiPattern.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiPattern)) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        console.log('🚀 GALACTIC MODE ACTIVATED! 🚀');
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
