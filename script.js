function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
}
document.querySelector('.collapse-btn').addEventListener('mouseenter', function() {
  const menu = document.getElementById('menu');
  menu.style.display = 'block'; // Show menu when hovering over the button
});

document.querySelector('.top-bar').addEventListener('mouseleave', function() {
  const menu = document.getElementById('menu');
  menu.style.display = 'none';
  menuVisible = false;  // Menu is collapsed again
});

document.getElementById('menu').addEventListener('mouseenter', function() {
  menuVisible = true;  // Stay visible when the mouse is over the menu
});

document.getElementById('menu').addEventListener('mouseleave', function() {
  const menu = document.getElementById('menu');
  menu.style.display = 'none';
  menuVisible = false;  // Collapse menu when mouse leaves
});