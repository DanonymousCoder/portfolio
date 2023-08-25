
function showMainContent() {
  const introScreen = document.getElementById("intro-screen");
  const mainContent = document.getElementById("main-content");
  
  introScreen.style.display = "none";
  mainContent.style.display = "block";
  }
  setTimeout(showMainContent, 6000);
  
  const popupButton = document.getElementById('popup-button');
const popupMenu = document.getElementById('myPopup');

// Function to toggle the visibility of the popup menu
function togglePopup() {
  popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
}

// Event listener for the popup button to open/close the popup menu
popupButton.addEventListener('click', togglePopup);

// Event listener to close the popup menu when clicking outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('#popup-button') && !event.target.matches('#myPopup')) {
    popupMenu.style.display = 'none';
  };
});
document.addEventListener('DOMContentLoaded', function()
 {
  // Get the line and custom cursor elements
 
  const penCursor = document.querySelector('.pen-cursor');
  const  Cursor = document.querySelector('.line');
  // Track mouse movement
  document.addEventListener('mousemove', function(event) {
    // Update the position of the custom cursor based on the mouse position
    Cursor.style.left = `${event.clientX}px`;
    Cursor.style.top = `${event.clientY}px`;
    penCursor.style.left = `${event.clientX}px`;
    penCursor.style.top = `${event.clientY}px`;
    // Update the position of the line based on the mouse's X-coordinate
  });
  document.addEventListener('mouseleave', function(event) {
Cursor.style.display = 'none';
penCursor.style.display = 'none';
  });

  document.addEventListener('mouseenter', function(event) {
    Cursor.style.display = 'block';
    penCursor.style.display = 'block';
      });
});