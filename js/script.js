// script.js

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("property-modal");
    const modalTitle = document.getElementById("property-title");
    const modalDescription = document.getElementById("property-description");
    const modalImage = document.getElementById("property-image");
    const images = {
        "property1": ["images/apartment1.jpg", "images/apartment2.jpg"],
        "property2": ["images/villa1.jpg", "images/villa2.jpg"]
    };
    let currentImages = [];
    let currentIndex = 0;

    window.openProperty = function(propertyId) {
        modal.style.display = "flex";
        if (propertyId === "property1") {
            modalTitle.textContent = "Modern Apartment";
            modalDescription.textContent = "2BHK in downtown";
        } else if (propertyId === "property2") {
            modalTitle.textContent = "Luxury Villa";
            modalDescription.textContent = "Beachfront property";
        }
        currentImages = images[propertyId];
        currentIndex = 0;
        modalImage.src = currentImages[currentIndex];
    };

    window.closeProperty = function() {
        modal.style.display = "none";
    };

    window.nextImage = function() {
        if (currentImages.length > 1) {
            currentIndex = (currentIndex + 1) % currentImages.length;
            modalImage.src = currentImages[currentIndex];
        }
    };

    window.prevImage = function() {
        if (currentImages.length > 1) {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            modalImage.src = currentImages[currentIndex];
        }
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            closeProperty();
        }
    };
});

