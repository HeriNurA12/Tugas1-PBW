document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll pada Navigasi
    const navLinks = document.querySelectorAll('.nav-link');
    const mainNav = document.getElementById('main-nav');
    const ctaButton = document.getElementById('ctaJelajahi');
    const loadingOverlay = document.getElementById('loading-overlay');
    const backToTopBtn = document.getElementById('backToTopBtn');

    const smoothScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const loadAndScroll = (targetId) => {
        loadingOverlay.style.display = 'flex';
        setTimeout(()=>{
            loadingOverlay.style.display = 'none';
            smoothScroll(targetId);
        }, 2000);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            loadAndScroll(targetId);
                    
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        loadAndScroll('destinasi');
    });

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

            // Toggle Menu Hamburger untuk Responsif
    const menuToggle = document.getElementById('menuToggle');
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
});