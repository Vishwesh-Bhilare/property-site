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

    // Attach event listeners to all property cards
    document.querySelectorAll(".property-card").forEach(card => {
        card.addEventListener("click", function() {
            const propertyId = this.getAttribute("data-id");
            openProperty(propertyId);
        });
    });

    function openProperty(propertyId) {
        if (!images[propertyId]) return;
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
    }

    document.getElementById("property-modal").addEventListener("click", function(event) {
        if (event.target === modal || event.target.classList.contains("close")) {
            closeProperty();
        }
    });

    function closeProperty() {
        modal.style.display = "none";
    }

    document.querySelector(".image-slider button:first-child").addEventListener("click", prevImage);
    document.querySelector(".image-slider button:last-child").addEventListener("click", nextImage);

    function nextImage() {
        if (currentImages.length > 1) {
            currentIndex = (currentIndex + 1) % currentImages.length;
            modalImage.src = currentImages[currentIndex];
        }
    }

    function prevImage() {
        if (currentImages.length > 1) {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            modalImage.src = currentImages[currentIndex];
        }
    }
});
