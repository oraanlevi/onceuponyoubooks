// Main JavaScript file for Léa Esmaili website clone
document.addEventListener('DOMContentLoaded', function() {
    console.log('Léa Esmaili website loaded successfully');
    
    // Handle image loading errors
    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.addEventListener('error', function() {
            console.warn('Image failed to load:', this.src);
            // The onerror attribute in HTML will handle the fallback display
        });
        
        img.addEventListener('load', function() {
            console.log('Image loaded successfully:', this.alt);
        });
    });
    
    // Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                // For placeholder links, just prevent default behavior
                return false;
            }
        });
    });
    
    // Add hover effects for project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#fafafa';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
    
    // Simple analytics tracking (placeholder)
    function trackPageView() {
        console.log('Page view tracked:', window.location.href);
    }
    
    // Track page view
    trackPageView();
    
    // Handle window resize for responsive adjustments
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            console.log('Window resized to:', window.innerWidth + 'x' + window.innerHeight);
            // Any responsive adjustments can be added here
        }, 250);
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Add keyboard shortcuts if needed
        if (e.key === 'Escape') {
            // Close any modals or overlays (placeholder for future functionality)
            console.log('Escape key pressed');
        }
    });
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('Page load time:', loadTime + 'ms');
            }, 0);
        });
    }
    
    // Accessibility improvements
    function improveAccessibility() {
        // Add skip links for keyboard navigation
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            z-index: 1000;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main landmark
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main';
        }
    }
    
    // Initialize accessibility improvements
    improveAccessibility();
    
    // Error handling for uncaught errors
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        // In a production environment, you might want to send this to an error tracking service
    });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        e.preventDefault();
    });
});

// Utility functions
const Utils = {
    // Debounce function for performance optimization
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Smooth scroll to element
    scrollToElement: function(element, offset = 0) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// Export utils for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Utils;
}
