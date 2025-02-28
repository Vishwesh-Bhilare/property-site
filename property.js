const properties = {
    "property1": {
        title: "Bungalow with Land",
        description: "Extensive open land with bungalow.",
        images: ["images/bung1.jpeg", "images/bung2.jpg", "images/bung3.jpeg", "images/bung4.jpeg"],
        videos: ["videos/bung-vid1.mp4", "videos/bung-vid2.mp4"]
    },
    "property2": {
        title: "Luxury Villa",
        description: "Beachfront villa with a private pool and garden.",
        images: ["images/villa1.jpg", "images/villa2.jpg"],
        videos: ["videos/villa-tour.mp4"]
    },
    "property3": {
        title: "Cozy Cabin",
        description: "A small cabin in the woods, perfect for nature lovers.",
        images: ["images/cabin1.jpg", "images/cabin2.jpg"],
        videos: ["videos/cabin-tour.mp4"]
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get("id");
    const property = properties[propertyId];

    if (property) {
        document.getElementById("property-title").textContent = property.title;
        document.getElementById("property-description").textContent = property.description;

        const mediaContainer = [...property.images, ...property.videos]; // Combine images & videos
        let currentIndex = 0;
        const mediaElement = document.getElementById("property-media");
        const videoElement = document.getElementById("property-video");

        function updateMedia() {
            let currentMedia = mediaContainer[currentIndex];
            if (currentMedia.endsWith(".mp4")) {
                mediaElement.style.display = "none";
                videoElement.style.display = "block";
                videoElement.src = currentMedia;
            } else {
                mediaElement.style.display = "block";
                videoElement.style.display = "none";
                mediaElement.src = currentMedia;
            }
        }

        window.prevMedia = function () {
            currentIndex = (currentIndex - 1 + mediaContainer.length) % mediaContainer.length;
            updateMedia();
        };

        window.nextMedia = function () {
            currentIndex = (currentIndex + 1) % mediaContainer.length;
            updateMedia();
        };

        updateMedia(); // Show the first media
    }
});
