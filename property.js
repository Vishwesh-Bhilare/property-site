document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const propertyId = params.get("id");

    const properties = {
        "property1": {
            title: "Modern Apartment",
            description: "2BHK in downtown",
            images: ["images/apartment1.jpg", "images/apartment2.jpg"]
            videos: ["videos/apartment-tour.mp4"] 
        },
        "property2": {
            title: "Luxury Villa",
            description: "Beachfront property",
            images: ["images/villa1.jpg", "images/villa2.jpg"]
            videos: ["videos/villa-tour.mp4"]
        }
    };

    if (propertyId && properties[propertyId]) {
        document.getElementById("property-title").textContent = properties[propertyId].title;
        document.getElementById("property-description").textContent = properties[propertyId].description;

        let currentImages = properties[propertyId].images;
        let currentIndex = 0;
        let imageElement = document.getElementById("property-image");

        imageElement.src = currentImages[currentIndex];

        document.getElementById("prev-btn").addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            imageElement.src = currentImages[currentIndex];
        });

        document.getElementById("next-btn").addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % currentImages.length;
            imageElement.src = currentImages[currentIndex];
        });
    } else {
        document.body.innerHTML = "<h2>Property Not Found</h2><a href='index.html'>← Back to Home</a>";
    }
});
