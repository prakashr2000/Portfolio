const certificates = [
    {
        id: "1",
        title: "Certified Web Developer",
        details: "Issued by Simplilearn in 2025. This certification covers advanced web development techniques including HTML, CSS, JavaScript, and responsive design.",
        image: "./assets/images/certificate1.jpeg"
    },
    {
        id: "2",
        title: "Human Computer Interaction",
        details: "Issued by NPTEL in 2025.Successfully Completed with 91% and honored with Gold Metal.",
        image: "./assets/images/certificate2.jpeg"
    },
    {
        id: "3",
        title: "Full Stack Developer",
        details: "Issued by NoviTech R&D in 2025. This certification is to design,develop,and maintain both front-end and back-end components of web applications.",
        image: "./assets/images/certificate3.jpeg"
    },
    {
        id: "4",
        title: "Building with AI",
        details: "Issued by saylor.org in 2025. This certification is to design, develop, and deploy intelligent systems that solve real-world problems using machine learning and data-driven techniques.",
        image: "./assets/images/certificate4.jpeg"
    }
 
];

// Get certificate ID from URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const certId = urlParams.get('id');

// Find the certificate by ID
const certificate = certificates.find(cert => cert.id === certId);

// Update the page content
const titleElement = document.getElementById('cert-title');
const detailsElement = document.getElementById('cert-details');
const imageElement = document.getElementById('cert-image');

if (certificate) {
    titleElement.textContent = certificate.title;
    detailsElement.textContent = certificate.details;
    if (certificate.image) {
        imageElement.src = certificate.image;
        imageElement.style.display = 'block';
    }
} else {
    titleElement.textContent = "Certificate Not Found";
    detailsElement.textContent = "Sorry, the requested certificate could not be found.";
}

// ScrollReveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.certificate-container, .heading', { origin: 'top' });
ScrollReveal().reveal('.certificate-box', { origin: 'bottom' });

// Navbar toggle for mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Sticky header and navbar reset on scroll
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Update digital clock
function updateClock() {
    const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    document.getElementById('current-time').textContent = now;
}
setInterval(updateClock, 1000);
updateClock();