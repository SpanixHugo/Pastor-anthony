// Sidebar toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Rotate quotes every 5 seconds
const quotes = document.querySelectorAll('.quote');
let idx = 0;
setInterval(() => {
    quotes[idx].classList.remove('active');
    idx = (idx + 1) % quotes.length;
    quotes[idx].classList.add('active');
}, 5000);

// Lazy reveal for elements
const elements = document.querySelectorAll('.achievement-item, .ministry-card, .testimonial-item');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
    }
    });
}, { threshold: 0.1 });
elements.forEach(item => {
    item.style.transform = 'translateY(20px)';
    item.style.opacity = '0';
    observer.observe(item);
});