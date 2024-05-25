// Array of background images for the container
const backgroundImages = [
    'url("media/vidBackground.png")',
    'url("media/vidBackground2.png")',
    'url("media/vidBackground3.png")',
    'url("media/vidBackground4.png")',
    'url("media/vidBackground5.png")',
    'url("media/vidBackground6.png")',
    'url("media/vidBackground7.png")',
    'url("media/vidBackground8.png")',
    'url("media/vidBackground9.png")'
];

// Array of images for the carousel
const carouselImages = [
    'media/post11.jpg',
    'media/post12.jpg',  // Assume additional images as needed
    'media/post13.jpg'
];

// Reference to the container background and image display elements
const containerBackground = document.querySelector('.containerBackground');
const imageDisplay = document.getElementById('imageDisplay1');

// Current indices for background and carousel
let backgroundIndex = 0;
let carouselIndex = 0;

// Update background image
function updateBackground() {
    containerBackground.style.backgroundImage = backgroundImages[backgroundIndex];
    backgroundIndex = (backgroundIndex + 1) % backgroundImages.length; // Cycle through backgrounds
}

// Update carousel image
function updateCarouselImage(index) {
    carouselIndex = index;
    imageDisplay.src = carouselImages[carouselIndex];
}

// Set interval to change background every 8 seconds
setInterval(updateBackground, 8000);

// Event listeners for carousel navigation buttons
document.getElementById('prevBtn').addEventListener('click', function() {
    let newIndex = carouselIndex - 1;
    if (newIndex < 0) newIndex = carouselImages.length - 1; // Cycle back to the last image
    updateCarouselImage(newIndex);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    let newIndex = carouselIndex + 1;
    if (newIndex >= carouselImages.length) newIndex = 0; // Cycle back to the first image
    updateCarouselImage(newIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector('.about');
    const outroSection = document.querySelector('.outro');
    // Check if the device width is less than or equal to 768px, adjust trigger height accordingly
    const triggerHeight = window.innerWidth <= 768 ? document.documentElement.scrollHeight / 4 : document.documentElement.scrollHeight / 2; // 25% for mobile, 50% for others
    
    function updateVisibility() {
        if (window.scrollY >= triggerHeight) {
            // Apply visible class if scrolled past the trigger height
            aboutSection.classList.add('visible');
            outroSection.classList.add('visible');
            aboutSection.classList.remove('hidden');
            outroSection.classList.remove('hidden');
        } else {
            // Apply hidden class if not yet scrolled to the trigger height
            aboutSection.classList.add('hidden');
            outroSection.classList.add('hidden');
            aboutSection.classList.remove('visible');
            outroSection.classList.remove('visible');
        }
    }
    
    // Add the event listener to update visibility based on scroll
    window.addEventListener('scroll', updateVisibility);
    
    // Run the function on load to check initial state
    updateVisibility();
    
});
