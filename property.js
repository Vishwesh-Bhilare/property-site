const properties = {
    "property1": {
        title: "Open Plot",
        description: "Fully Developed 55 acres of Land, only 37km from Kothrud, Pune. Suitable for plotting.",
        images: ["images/open_land_1.jpeg", "images/open_land_2.jpeg", "images/open_land_3.jpeg", "images/open_land_4.jpeg", "images/open_land_5.jpeg", "images/open_land_6.jpeg", "images/open_land_7.jpeg", "images/open_land_8.jpeg", "images/open_land_9.jpeg"],
        videos: ["videos/open_land_vid1.mp4", "videos/open_land_vid2.mp4"]
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
        description: `
                        Nestled on the picturesque Panshet-Varasgaon road, just 4 km from Surya Shibir, this tranquil 2.5-acre farm offers a slice of paradise. Enjoy an array of fruit-bearing Kesar mangoes, coconuts, mahogany trees, and lush bamboo, complemented by a variety of medicinal plants. You'll also find an impressive selection of papaya, banana, jackfruit, jamun, mulberry, and litchi trees.
                        
                        The charming 2,000 sq. ft. farmhouse, constructed with local laterite stone, is perfectly situated with breathtaking lake views and direct access to the backwaters. The property features fully developed landscaping, ensuring a serene, natural environment.
                        
                        Additional highlights include:

                            1. 13 lakh liters of water storage
                            2. MSEB power supply
                            3. Road access right to the farmhouse

                        This is a unique opportunity to own a farm with both natural beauty and modern amenities—perfect for anyone seeking peace and privacy, with easy access to the lake.`,
        images: ["images/bung1.jpeg", "images/bung2.jpeg", "images/bung3.jpeg", "images/bung4.jpeg"],
        videos: ["videos/bung-vid1.mp4"]
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get("id");
    const property = properties[propertyId];

    if (property) {
        // Update title and description
        document.getElementById("property-title").textContent = property.title;
        document.getElementById("property-description").innerHTML = property.description;

        // Combine images and videos into a single array
        const mediaContainer = [...property.images, ...property.videos];
        let currentIndex = 0;
        
        // Select media and video elements
        const mediaElement = document.getElementById("property-media");
        const videoElement = document.getElementById("property-video");

        // Update media display function
        function updateMedia() {
            let currentMedia = mediaContainer[currentIndex];
            
            if (currentMedia.endsWith(".mp4")) { 
                // If it's a video, show the video element and hide the image
                mediaElement.style.display = "none";
                videoElement.style.display = "block";
                videoElement.src = currentMedia;
            } else {
                // If it's an image, show the image element and hide the video
                mediaElement.style.display = "block";
                videoElement.style.display = "none";
                mediaElement.src = currentMedia;
            }
        }

        // Previous media button functionality
        window.prevMedia = function () {
            currentIndex = (currentIndex - 1 + mediaContainer.length) % mediaContainer.length;
            updateMedia();
        };

        // Next media button functionality
        window.nextMedia = function () {
            currentIndex = (currentIndex + 1) % mediaContainer.length;
            updateMedia();
        };

        // Show the first media on page load
        updateMedia();
    }
});
