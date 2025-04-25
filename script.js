// Get the elements
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

// Show the menu when hovering over the button
menuButton.addEventListener("mouseenter", function() {
  menu.style.display = "grid"; // Show menu when hovering over button
});

// Hide the menu if mouse leaves the button or the menu
document.body.addEventListener("mouseleave", function(e) {
  if (!menu.contains(e.relatedTarget) && !menuButton.contains(e.relatedTarget)) {
    menu.style.display = "none"; // Hide menu when mouse leaves the menu and button
  }
});

// Prevent menu from hiding if mouse is over the menu itself
menu.addEventListener("mouseenter", function() {
  menu.style.display = "grid"; // Ensure it stays visible when hovering over menu
});

// Toggle the menu when clicking on the menu
menu.addEventListener("click", function() {
  menu.style.display = "none"; // Close the menu when an item is clicked
});

// Prevent the menu from hiding when clicking inside the menu or hovering over it
menu.addEventListener("mouseenter", function() {
  menu.style.display = "grid";  // Ensure the menu doesn't hide when hovered over
});




