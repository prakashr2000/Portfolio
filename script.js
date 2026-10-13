const menuButton = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('main section[id]');
const clock = document.querySelector('#current-time');
const year = document.querySelector('#year');

if (menuButton && navbar) {
    menuButton.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
        menuButton.innerHTML = isOpen ? '<i class="bx bx-x"></i>' : '<i class="bx bx-menu"></i>';
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
        if (menuButton) {
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Open navigation');
            menuButton.innerHTML = '<i class="bx bx-menu"></i>';
        }
    });
});

function updatePageState() {
    const scrollPosition = window.scrollY + 150;
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);

    let currentId = 'home';
    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) currentId = section.id;
    });

    navLinks.forEach(link => {
        const target = link.getAttribute('href');
        link.classList.toggle('active', target === `#${currentId}`);
    });
}
window.addEventListener('scroll', updatePageState, { passive: true });
updatePageState();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
} else {
    revealItems.forEach(item => item.classList.add('visible'));
}

const roles = ['Engineer', 'SAP Consultant', 'BTP Developer', 'Data Analyst'];
const typedTarget = document.querySelector('.typed-text');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
    if (!typedTarget) return;
    const currentRole = roles[roleIndex];
    typedTarget.textContent = currentRole.substring(0, charIndex);

    if (!deleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeRole, 75);
    } else if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        setTimeout(typeRole, 1250);
    } else if (deleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeRole, 35);
    } else {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 250);
    }
}
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typeRole();
} else if (typedTarget) {
    typedTarget.textContent = roles[0];
}

function updateClock() {
    if (!clock) return;
    clock.textContent = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(new Date());
}
updateClock();
setInterval(updateClock, 30000);
if (year) year.textContent = `© ${new Date().getFullYear()}`;

function updatePageState() {
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 24);
    }

    let currentId = 'home';

    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 160) {
            currentId = section.id;
        }
    });

    // Highlight Contact when the page reaches the bottom
    if (window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5) {
        currentId = 'contact';
    }

    navLinks.forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + currentId
        );
    });
}

window.addEventListener('scroll', updatePageState, { passive: true });
window.addEventListener('resize', updatePageState);
updatePageState();
