// LitReview Website JavaScript

/**
 * Smooth scrolling for navigation links
 */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default for # links (like the navbar brand)
            if (href === '#') {
                return;
            }

            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: true
                    });
                }
            }
        });
    });

    // Add active class to navigation links on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        let current = '';
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add fade-in animation to feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

/**
 * Track App Store button clicks (optional analytics)
 */
function trackAppStoreClick() {
    // Add your analytics tracking code here
    console.log('App Store button clicked');

    // Example: Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'click', {
    //         'event_category': 'App Store',
    //         'event_label': 'Download Button'
    //     });
    // }
}

// Add click tracking to App Store buttons
document.addEventListener('DOMContentLoaded', function() {
    const appStoreButtons = document.querySelectorAll('.app-store-btn');
    appStoreButtons.forEach(button => {
        button.addEventListener('click', trackAppStoreClick);
    });
});
