// If you want to add a mobile menu, you can use this JS.
// Currently, the navbar only has "Contact Us" and no other links, so this JS isn't required unless you want to add more items in the future.

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Optional: Add more JS for other interactive features, such as auto-scrolling images.
function scrollImages(containerId) {
    const container = document.getElementById(containerId);
    const images = container.querySelectorAll('img');
    let index = 0;

    function showImage() {
        // Hide all images initially
        images.forEach((img, idx) => {
            img.style.transform = `translateX(${(idx - index) * 100}%)`;
        });

        index = (index + 1) % images.length;
    }

    // Scroll images every 3 seconds
    setInterval(showImage, 3000);
}

// Scroll images for Design, Planning, and Projects
scrollImages('images/desktop-wallpaper-building-colorful-blue-green-nature-landscape-reflection-architecture-and-mobile-background.jpg');
scrollImages('images/desktop-wallpaper-building-colorful-blue-green-nature-landscape-reflection-architecture-and-mobile-background.jpg');
scrollImages('images/desktop-wallpaper-building-colorful-blue-green-nature-landscape-reflection-architecture-and-mobile-background.jpg');

// Remove the loading spinner once the page fully loads
window.onload = function() {
    document.getElementById('loading-spinner').style.display = 'none';
};


// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
