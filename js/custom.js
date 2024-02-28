document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slider-slide");
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    function nextSlide() {
        slides[currentSlide].style.left = "-100%";
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.left = "0%";
    }
});
