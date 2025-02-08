/* js/script.js */
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully");
});
// Currently, there is no JavaScript functionality needed for this simple homepage.
// You can add your JavaScript code here in the future if needed.
function setMode(mode) {
    // Remove all mode classes from the body
    document.body.classList.remove('light-mode', 'dark-mode', 'auto-mode');
  
    // Add the selected mode class to the body
    document.body.classList.add(`${mode}-mode`);
  }
  function setMode(mode) {
    // Verwijder alle mode classes van de body
    document.body.classList.remove('light-mode', 'dark-mode', 'auto-mode');

    // Voeg de juiste mode class toe
    document.body.classList.add(`${mode}-mode`);

    // Update specifieke secties
    document.querySelectorAll('.education-section, .personal-section, .sa, .Samir')
        .forEach(section => {
            if (mode === 'light') {
                section.classList.add('light-mode');
            } else {
                section.classList.remove('light-mode');
            }
        });
}