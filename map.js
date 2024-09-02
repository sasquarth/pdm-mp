// Image dimensions in pixels
const imageWidth = 7200;  // Width of the image in pixels
const imageHeight = 7200; // Height of the image in pixels

// Initialize the map
var map = L.map('map', {
    crs: L.CRS.Simple,  // Use a simple CRS for custom image
    zoomControl: true,  // Enable zoom controls
    maxBounds: [[0, 0], [imageHeight, imageWidth]], // Set maximum bounds to the size of the image
    maxBoundsViscosity: 1.0 // Prevent panning outside the image
});

// Define the URL of your JPG image
var imageUrl = 'mp.jpg'; // Replace with the path to your JPG image

// Define the dimensions of the image in pixels (bottom left and top right)
var imageBounds = [[0, 0], [imageHeight, imageWidth]];

// Add the image overlay to the map
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Fit the image to the screen initially
map.fitBounds(imageBounds);

// Get the map container dimensions
var containerWidth = map.getSize().x;
var containerHeight = map.getSize().y;

// Calculate the minimum zoom level to fit the image to the viewport
var minZoom = Math.log2(Math.min(containerWidth / imageWidth, containerHeight / imageHeight));

// Define a custom initial zoom level
var initialZoom = minZoom + 10; // Adjust this value as needed

// Define a maximum zoom level (you can adjust this value)
var maxZoom = minZoom + 4; // Allow zooming in by 4 levels from the minimum zoom

// Set the minimum and maximum zoom levels
map.setMinZoom(minZoom);
map.setMaxZoom(maxZoom);

// Set the initial zoom level
map.setZoom(initialZoom);
