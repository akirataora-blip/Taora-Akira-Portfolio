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
// LANGUAGE SWITCHER
// ============================================
const translations = {
    en: {
        title: "Taora Akira - Portfolio",
        nav: { home: "Home", about: "About", portfolio: "Portfolio", skills: "Skills", contact: "Contact" },
        hero: {
            title: "Hi, I'm Taora Akira",
            subtitle: "Creative Designer & Developer | Bringing Ideas to Life",
            description: "Welcome to my portfolio. I specialize in creating beautiful, functional digital experiences that tell compelling stories.",
            ctaWork: "View My Work",
            ctaContact: "Get in Touch"
        },
        about: {
            title: "About Me",
            p1: "I'm a passionate designer and developer with a love for creating digital products that make a difference. With expertise in both design and development, I bridge the gap between aesthetics and functionality.",
            p2: "My approach combines strategic thinking, creative problem-solving, and technical excellence to deliver results that exceed expectations.",
            stats: {
                projects: "Projects Completed",
                clients: "Happy Clients",
                years: "Years Experience"
            }
        },
        portfolio: {
            title: "My Portfolio",
            filters: { all: "All", design: "Design", development: "Development", branding: "Branding" },
            projects: {
                uiTitle: "Modern UI Design System",
                uiDesc: "A comprehensive design system featuring clean components and intuitive user interfaces.",
                uiCategory: "Design",
                ecomTitle: "E-commerce Platform",
                ecomDesc: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
                ecomCategory: "Development",
                brandTitle: "Brand Identity Package",
                brandDesc: "Complete branding solution including logo, color palette, and brand guidelines.",
                brandCategory: "Branding",
                mobileTitle: "Mobile App Interface",
                mobileDesc: "Beautifully crafted mobile application with focus on user experience.",
                mobileCategory: "Design",
                dashboardTitle: "Web Analytics Dashboard",
                dashboardDesc: "Interactive dashboard for real-time data visualization and analysis.",
                dashboardCategory: "Development",
                campaignTitle: "Marketing Campaign",
                campaignDesc: "Integrated campaign design across multiple digital and print channels.",
                campaignCategory: "Branding"
            }
        },
        skills: {
            title: "My Skills",
            design: {
                title: "Design",
                item1: "UI/UX Design",
                item2: "Figma & Adobe Suite",
                item3: "Wireframing",
                item4: "Prototyping"
            },
            development: {
                title: "Development",
                item1: "HTML/CSS/JavaScript",
                item2: "React & Vue.js",
                item3: "Node.js & Express",
                item4: "Database Design"
            },
            tools: {
                title: "Tools & Tech",
                item1: "Git & GitHub",
                item2: "Docker & DevOps",
                item3: "REST APIs",
                item4: "AWS & Cloud Services"
            },
            soft: {
                title: "Soft Skills",
                item1: "Project Management",
                item2: "Team Leadership",
                item3: "Communication",
                item4: "Creative Problem-Solving"
            }
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Have a project in mind? I'd love to hear about it. Let's create something amazing together!",
            emailLabel: "Email",
            phoneLabel: "Phone",
            locationLabel: "Location",
            locationValue: "Creative Hub, Digital City",
            followLabel: "Follow Me",
            social: { linkedin: "LinkedIn", github: "GitHub", twitter: "Twitter", instagram: "Instagram" },
            form: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Your Message",
                submit: "Send Message"
            }
        },
        footer: { copy: "© 2026 Taora Akira. All rights reserved.", madeWith: "Designed & Built with passion" },
        notification: { sent: "Message sent successfully! Thank you for reaching out." }
    },
    fr: {
        title: "Taora Akira - Portfolio",
        nav: { home: "Accueil", about: "À propos", portfolio: "Portfolio", skills: "Compétences", contact: "Contact" },
        hero: {
            title: "Bonjour, je suis Taora Akira",
            subtitle: "Designer créatif & développeur | Donner vie aux idées",
            description: "Bienvenue sur mon portfolio. Je crée des expériences numériques belles et fonctionnelles qui racontent une histoire.",
            ctaWork: "Voir mon travail",
            ctaContact: "Contactez-moi"
        },
        about: {
            title: "À propos de moi",
            p1: "Je suis un concepteur et développeur passionné, avec un amour pour la création de produits numériques qui font la différence. Avec une expertise en design et en développement, je comble le fossé entre l'esthétique et la fonctionnalité.",
            p2: "Ma démarche combine réflexion stratégique, résolution de problèmes créative et excellence technique pour offrir des résultats qui dépassent les attentes.",
            stats: {
                projects: "Projets réalisés",
                clients: "Clients satisfaits",
                years: "Années d'expérience"
            }
        },
        portfolio: {
            title: "Mon Portfolio",
            filters: { all: "Tous", design: "Design", development: "Développement", branding: "Branding" },
            projects: {
                uiTitle: "Système de Design UI Moderne",
                uiDesc: "Un système de design complet avec des composants propres et des interfaces utilisateur intuitives.",
                uiCategory: "Design",
                ecomTitle: "Plateforme e-commerce",
                ecomDesc: "Une solution e-commerce full-stack avec intégration de paiement et gestion d'inventaire en temps réel.",
                ecomCategory: "Développement",
                brandTitle: "Package d'identité visuelle",
                brandDesc: "Solution de branding complète incluant logo, palette de couleurs et guide de marque.",
                brandCategory: "Branding",
                mobileTitle: "Interface d'application mobile",
                mobileDesc: "Application mobile magnifiquement conçue avec un focus sur l'expérience utilisateur.",
                mobileCategory: "Design",
                dashboardTitle: "Tableau de bord analytique",
                dashboardDesc: "Tableau de bord interactif pour la visualisation et l'analyse de données en temps réel.",
                dashboardCategory: "Développement",
                campaignTitle: "Campagne marketing",
                campaignDesc: "Conception de campagne intégrée sur plusieurs canaux numériques et imprimés.",
                campaignCategory: "Branding"
            }
        },
        skills: {
            title: "Mes compétences",
            design: {
                title: "Design",
                item1: "UI/UX Design",
                item2: "Figma & Adobe Suite",
                item3: "Wireframing",
                item4: "Prototyping"
            },
            development: {
                title: "Développement",
                item1: "HTML/CSS/JavaScript",
                item2: "React & Vue.js",
                item3: "Node.js & Express",
                item4: "Conception de bases de données"
            },
            tools: {
                title: "Outils & Tech",
                item1: "Git & GitHub",
                item2: "Docker & DevOps",
                item3: "APIs REST",
                item4: "AWS & services cloud"
            },
            soft: {
                title: "Soft Skills",
                item1: "Gestion de projet",
                item2: "Leadership d'équipe",
                item3: "Communication",
                item4: "Résolution créative de problèmes"
            }
        },
        contact: {
            title: "Me contacter",
            subtitle: "Vous avez un projet en tête ? Je serais ravi d'en discuter. Créons quelque chose d'incroyable ensemble !",
            emailLabel: "Email",
            phoneLabel: "Téléphone",
            locationLabel: "Localisation",
            locationValue: "Creative Hub, Digital City",
            followLabel: "Suivez-moi",
            social: { linkedin: "LinkedIn", github: "GitHub", twitter: "Twitter", instagram: "Instagram" },
            form: {
                name: "Votre nom",
                email: "Votre email",
                subject: "Objet",
                message: "Votre message",
                submit: "Envoyer"
            }
        },
        footer: { copy: "© 2026 Taora Akira. Tous droits réservés.", madeWith: "Conçu et créé avec passion" },
        notification: { sent: "Message envoyé avec succès ! Merci pour votre message." }
    }
};

const getNestedTranslation = (obj, path) => path.split('.').reduce((acc, part) => acc && acc[part], obj);

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) el.textContent = translation;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) el.placeholder = translation;
    });

    document.documentElement.lang = lang;
    if (translations[lang]?.title) document.title = translations[lang].title;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('preferredLang', lang);
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    applyTranslations(lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

const savedLang = localStorage.getItem('preferredLang');
const defaultLang = (navigator.language || navigator.userLanguage || 'en').startsWith('fr') ? 'fr' : 'en';
setLanguage(savedLang || defaultLang);

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
        const currentLang = document.documentElement.lang || 'en';
        const successText = getNestedTranslation(translations[currentLang], 'notification.sent') || 'Message sent successfully! Thank you for reaching out.';
        successMessage.textContent = successText;
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
