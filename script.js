// ============================================
// MOBILE MENU TOGGLE
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// PORTFOLIO FILTER
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.3s ease-in';
            } else {
                if (item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.3s ease-in';
                } else {
                    item.classList.add('hidden');
                }
            }
        });
    });
});

// Add fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simulate form submission
        console.log('Form submitted:', data);

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
            z-index: 2000;
            animation: slideIn 0.3s ease-out;
        `;
        successMessage.textContent = 'Message sent successfully! Thank you for reaching out.';
        document.body.appendChild(successMessage);

        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => successMessage.remove(), 300);
        }, 5000);

        // Reset form
        contactForm.reset();
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill cards and portfolio items
document.querySelectorAll('.skill-card, .portfolio-item, .contact-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Add fade in up animation
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(animationStyle);

// ============================================
// SMOOTH SCROLL OFFSET FOR FIXED NAVBAR
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-md)';
    }
});

// ============================================
// FORM VALIDATION
// ============================================
function validateForm() {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = 'var(--border-color)';
        }

        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.style.borderColor = '#ef4444';
                isValid = false;
            }
        }
    });

    return isValid;
}

// Add real-time validation
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(input => {
    input.addEventListener('blur', () => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = 'var(--border-color)';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = 'var(--primary-color)';
    });
});
