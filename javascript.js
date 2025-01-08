// Select elements
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

// Open lightbox on image click
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src;
        lightbox.classList.add('visible');
    });
});

// Close lightbox on clicking the close button
closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});

// Close lightbox on clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('visible');
    }
});
