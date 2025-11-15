// ========================================
// CYBERPUNK PORTFOLIO - JAVASCRIPT
// Interactive Animations & Navigation
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSmoothScroll();
    initMobileMenu();
    initProjectCards();
    initCertificateCards();
    initParticles();
    initScrollAnimations();
});

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show target section with animation
            const target = document.getElementById(targetSection);
            if (target) {
                target.classList.add('active');
                
                // Smooth scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Add page transition effect
                target.style.animation = 'none';
                setTimeout(() => {
                    target.style.animation = '';
                }, 10);
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Function to scroll to specific section (used by CTA buttons)
function scrollToSection(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Remove active class from all
    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    
    // Activate target section
    const targetSection = document.getElementById(sectionId);
    const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
    
    if (targetSection && targetLink) {
        targetSection.classList.add('active');
        targetLink.classList.add('active');
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ========================================
// MOBILE MENU
// ========================================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Add micro-interaction animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    }
}

// ========================================
// PROJECT CARDS ANIMATION
// ========================================
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Staggered entrance animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        // Hover micro-interactions
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Download button animation
        const downloadBtn = card.querySelector('.download-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                
                const rect = this.getBoundingClientRect();
                ripple.style.left = (e.clientX - rect.left) + 'px';
                ripple.style.top = (e.clientY - rect.top) + 'px';
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        }
    });
}

// ========================================
// CERTIFICATE CARDS ANIMATION
// ========================================
function initCertificateCards() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    certificateCards.forEach((card, index) => {
        // Staggered entrance animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        // 3D tilt effect on hover
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ========================================
// FLOATING PARTICLES GENERATION
// ========================================
function initParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    
    if (!particlesContainer) return;
    
    // Create multiple floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${Math.random() > 0.5 ? 'var(--primary-cyan)' : 'var(--primary-magenta)'};
            border-radius: 50%;
            left: ${startX}%;
            top: ${startY}%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
            box-shadow: 0 0 10px currentColor;
            pointer-events: none;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add particle animation to stylesheet if not exists
    if (!document.querySelector('#particle-animation')) {
        const style = document.createElement('style');
        style.id = 'particle-animation';
        style.textContent = `
            @keyframes floatParticle {
                0%, 100% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0.2;
                }
                25% {
                    transform: translate(50px, -50px) scale(1.2);
                    opacity: 0.5;
                }
                50% {
                    transform: translate(-30px, 50px) scale(0.8);
                    opacity: 0.3;
                }
                75% {
                    transform: translate(40px, 30px) scale(1.1);
                    opacity: 0.6;
                }
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.project-card, .certificate-card, .section-header');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove shadow based on scroll position
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ========================================
// TYPING EFFECT FOR HERO SUBTITLE
// ========================================
function typingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.borderRight = '2px solid var(--primary-cyan)';
    
    let index = 0;
    const speed = 100;
    
    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // Blinking cursor
            setInterval(() => {
                subtitle.style.borderRight = subtitle.style.borderRight === '2px solid transparent' 
                    ? '2px solid var(--primary-cyan)' 
                    : '2px solid transparent';
            }, 500);
        }
    }
    
    setTimeout(type, 1000);
}

// ========================================
// CURSOR TRAIL EFFECT
// ========================================
function initCursorTrail() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');
    
    if (circles.length === 0) {
        // Create cursor trail elements
        for (let i = 0; i < 5; i++) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            circle.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: var(--primary-cyan);
                pointer-events: none;
                opacity: 0.3;
                transition: all 0.1s ease;
                z-index: 9999;
                mix-blend-mode: screen;
            `;
            document.body.appendChild(circle);
        }
    }
    
    const updatedCircles = document.querySelectorAll('.circle');
    
    updatedCircles.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
    });
    
    window.addEventListener('mousemove', function(e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });
    
    function animateCircles() {
        let x = coords.x;
        let y = coords.y;
        
        updatedCircles.forEach((circle, index) => {
            circle.style.left = x - 5 + 'px';
            circle.style.top = y - 5 + 'px';
            circle.style.transform = `scale(${(updatedCircles.length - index) / updatedCircles.length})`;
            
            circle.x = x;
            circle.y = y;
            
            const nextCircle = updatedCircles[index + 1] || updatedCircles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
        
        requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
}

// Initialize cursor trail on desktop only
if (window.innerWidth > 768) {
    initCursorTrail();
}

// ========================================
// STATS COUNTER ANIMATION
// ========================================
function animateStats() {
    const stats = document.querySelectorAll('.stat-value');
    
    stats.forEach(stat => {
        const target = parseFloat(stat.textContent);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target.toFixed(target % 1 === 0 ? 0 : 2);
                clearInterval(timer);
            } else {
                stat.textContent = current.toFixed(target % 1 === 0 ? 0 : 2);
            }
        }, 16);
    });
}

// Run stats animation when home section is active
setTimeout(animateStats, 500);

// ========================================
// BUTTON CLICK EFFECTS
// ========================================
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ========================================
// KEYBOARD NAVIGATION
// ========================================
document.addEventListener('keydown', function(e) {
    const sections = ['home', 'konsultan', 'penelitian', 'scriptwriter', 'sertifikasi'];
    const activeSection = document.querySelector('.section.active');
    const currentIndex = sections.indexOf(activeSection.id);
    
    // Arrow key navigation
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % sections.length;
        scrollToSection(sections[nextIndex]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        scrollToSection(sections[prevIndex]);
    }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Handle window resize
window.addEventListener('resize', throttle(function() {
    // Reinitialize particles on resize
    const particles = document.querySelectorAll('.particle');
    particles.forEach(p => p.remove());
    initParticles();
}, 500));

// ========================================
// CONSOLE EASTER EGG
// ========================================
console.log('%c🚀 Cyberpunk Portfolio', 'color: #00f3ff; font-size: 24px; font-weight: bold;');
console.log('%cDesigned by Aditya Tri Prasetyo', 'color: #ff00ff; font-size: 14px;');
console.log('%cInterested in working together? Let\'s connect!', 'color: #ffff00; font-size: 12px;');

// ========================================
// EXPORT FUNCTIONS (for use in HTML onclick)
// ========================================
window.scrollToSection = scrollToSection;
