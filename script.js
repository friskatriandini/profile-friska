
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Jika elemen masuk viewport → tambahkan animasi
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
        // Jika elemen keluar viewport → reset supaya animasi bisa muncul lagi
        else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2
});

// Target elemen
const elements = document.querySelectorAll(
    "section, .about-card, .biodata-card, .info-box, .edu-entry, .project-card, .hero .text, .profile-img, .social-icons a"
);



elements.forEach((el) => {
    el.classList.add("scroll-reveal");
    observer.observe(el);
});

// ========== Navbar berubah saat scroll ==========
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ========== Highlight menu sesuai section yang aktif ==========
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

function updateActiveMenu() {
    let current = "";

    sections.forEach(sec => {
        const top = sec.offsetTop - 150;
        if (scrollY >= top) current = sec.getAttribute("id");
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveMenu);
