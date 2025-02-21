// Function to handle image click and display description
function handleImageClick(imageId, descriptionBoxId) {
    const image = document.getElementById(imageId);
    const descriptionBox = document.getElementById(descriptionBoxId);

    image.addEventListener('click', function() {
        const imageHeight = image.offsetHeight;
        descriptionBox.style.height = imageHeight + 'px';
        descriptionBox.style.display = 'block';
        descriptionBox.style.transition = 'left 0.3s ease';
        descriptionBox.style.left = '50%';
    });
}

// Add event listeners for all image boxes
handleImageClick('andromeda-galaxy', 'description-box-1');
handleImageClick('image-2', 'description-box-2');
handleImageClick('image-3', 'description-box-3');
handleImageClick('image-4', 'description-box-4');
handleImageClick('image-5', 'description-box-5');

// Close button to hide the description box
const closeButtons = document.querySelectorAll('.close-description');
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const descriptionBox = button.closest('.description-box');
        descriptionBox.style.transition = 'left 0.3s ease';
        descriptionBox.style.left = '100%';
        setTimeout(function() {
            descriptionBox.style.display = 'none';
        }, 300);
    });
});
