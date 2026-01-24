// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const dropdownToggles = document.querySelectorAll('.nav-item.dropdown > .nav-link');

if (hamburger && navMenu) {
    // Toggle hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#navbar')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Handle dropdown menus on mobile
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        // Only prevent default on mobile
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = toggle.closest('.nav-item');
            parent.classList.toggle('active');
        }
    });
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
if (hamburger && navMenu) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                if (link.closest('.nav-item.dropdown')) {
                    return;
                }
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// TESTIMONIALS SLIDER
// ============================================

const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function showSlide(n) {
    // Wrap around
    if (n >= testimonialCards.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = testimonialCards.length - 1;
    } else {
        currentSlide = n;
    }

    // Hide all slides
    testimonialCards.forEach(card => {
        card.style.opacity = '0';
        card.style.position = 'absolute';
    });

    // Show current slide
    testimonialCards[currentSlide].style.opacity = '1';
    testimonialCards[currentSlide].style.position = 'relative';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

if (testimonialCards.length && prevBtn && nextBtn) {
    // Initialize slider
    showSlide(0);

    // Button event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slides every 8 seconds
    setInterval(nextSlide, 8000);
}

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// LAZY LOAD HERO VIDEO (Performance)
// ============================================

const video = document.querySelector('.hero-video');
if (video) {
    // Only load video on larger screens for better mobile performance
    if (window.innerWidth > 768) {
        video.play().catch(error => {
            console.log('Video autoplay prevented:', error);
        });
    } else {
        // For mobile, show a placeholder or static image
        video.style.display = 'none';
    }
}

// ============================================
// STATS COUNTER ANIMATION (Optional)
// ============================================

let hasAnimated = false;

function animateStats() {
    if (hasAnimated) return;

    const stats = document.querySelectorAll('.stat-content h3');
    stats.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = Math.ceil(finalValue / 30);
        const duration = 1000; // 1 second
        const interval = duration / 30;

        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                stat.textContent = stat.textContent.replace(/\d+/, finalValue);
                clearInterval(counter);
            } else {
                stat.textContent = stat.textContent.replace(/\d+/, currentValue);
            }
        }, interval);
    });

    hasAnimated = true;
}

// Trigger stats animation when stats section is in view
const statsBar = document.querySelector('.stats-bar');
if (statsBar) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(statsBar);
}

// ============================================
// RESPONSIVE UTILITIES
// ============================================

// Handle window resize for nav menu
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (hamburger && navMenu && window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            // Reset dropdown states
            document.querySelectorAll('.nav-item.dropdown').forEach(item => {
                item.classList.remove('active');
            });
        }
    }, 250);
});

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
});

console.log('DroneAir Solutions - Website loaded successfully');
