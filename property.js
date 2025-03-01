const properties = {
    "property1": {
        title: "Open Plot",
        description: "Available open plot.",
        images: [],
        videos: []
    },
    /*
    "property2": {
        title: "Bungalow with Land",
        description: "Extensive open land with bungalow.",
        images: ["images/bung1.jpeg", "images/bung2.jpeg", "images/bung3.jpeg", "images/bung4.jpeg"],
        videos: ["videos/bung-vid1.mp4"]
    }
    */
"property2": {
    title: "Bungalow with Land",
    description: `<p>
                    Nestled on the picturesque Panshet-Varasgaon road, just 4 km from Surya Shibir, this tranquil 2.5-acre farm offers a slice of paradise. Enjoy an array of fruit-bearing Kesar mangoes, coconuts, mahogany trees, and lush bamboo, complemented by a variety of medicinal plants. You'll also find an impressive selection of papaya, banana, jackfruit, jamun, mulberry, and litchi trees.
                    
                    The charming 2,000 sq. ft. farmhouse, constructed with local laterite stone, is perfectly situated with breathtaking lake views and direct access to the backwaters. The property features fully developed landscaping, ensuring a serene, natural environment.
                    
                    Additional highlights include:
                    <ul>
                        <li>13 lakh liters of water storage</li>
                        <li>MSEB power supply</li>
                        <li>Road access right to the farmhouse</li>
                    </ul>
                    This is a unique opportunity to own a farm with both natural beauty and modern amenities—perfect for anyone seeking peace and privacy, with easy access to the lake.
                </p>`,
    images: ["images/bung1.jpeg", "images/bung2.jpeg", "images/bung3.jpeg", "images/bung4.jpeg"],
    videos: ["videos/bung-vid1.mp4"]
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
