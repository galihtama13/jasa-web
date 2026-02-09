const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbar-menu');
hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
document.querySelectorAll('.navbar-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
    });
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
function showSlide(index) {
    currentSlide = index;
    document.getElementById('slider').style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'));
        showSlide(slideIndex);
    });
});
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim.');
    this.reset();
});