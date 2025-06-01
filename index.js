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

// const scriptURL = 'https://script.google.com/macros/s/AKfycby1-xD6fB1nApVa99lzs86qbVVI0SvuVRCs1biG-x6p-YX5G7FLoN_od1tvHGcNVUFL/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then(response => {
//         msg.innerHTML = "Message sent successfully"
//         setTimeout(function () {
//             msg.innerHTML = ""
//         }, 5000)
//         form.reset()
//     })
//     .catch(error => console.error('Error!', error.message))
// })