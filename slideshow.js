let slideIndex = 1;

// Function to move the slideshow
function showSlides(n) {
    const slides = document.querySelectorAll('.slideshow-item');
    const dots = document.querySelectorAll('.dot');
    const track = document.querySelector('.slideshow-track');
    
    // Total number of slides (groups of 3)
    let totalSlides = slides.length / 3;

    // Handle slide index logic
    if (n > totalSlides) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = totalSlides;
    }

    // Set the transform to move the track
    let offset = (slideIndex - 1) * -100;
    track.style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[slideIndex - 1].classList.add('active');
}

// Function to handle dot clicks
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatic slide advancement
function autoSlide() {
    slideIndex++;
    if (slideIndex > document.querySelectorAll('.slideshow-item').length / 3) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
}

// Set a timer to advance the slides every 5 seconds
setInterval(autoSlide, 5000); 

// Initialize slideshow on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});