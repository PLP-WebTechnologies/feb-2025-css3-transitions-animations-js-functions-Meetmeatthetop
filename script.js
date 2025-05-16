// Get elements
const box = document.getElementById('animatedBox');
const animateBtn = document.getElementById('animateBtn');
const bgColorInput = document.getElementById('bgColor');
const savePrefsBtn = document.getElementById('savePrefs');

// Load preference from localStorage
function loadPreference() {
  const color = localStorage.getItem('boxColor');
  if (color) {
    box.style.background = color;
    bgColorInput.value = color;
  }
}

// Save preference to localStorage
function savePreference() {
  const color = bgColorInput.value;
  localStorage.setItem('boxColor', color);
  box.style.background = color;
}

// Animate box on button click
animateBtn.addEventListener('click', () => {
  box.classList.remove('animate'); // reset animation
  void box.offsetWidth; // trigger reflow
  box.classList.add('animate');
});

// Save preference on button click
savePrefsBtn.addEventListener('click', savePreference);

// Load preference on page load
window.addEventListener('DOMContentLoaded', loadPreference);