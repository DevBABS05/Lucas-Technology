function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
    });
}

/* ---------- Mobile menu toggle ---------- */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        // accessibility hint
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close menu when a link is clicked (nice UX)
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}
