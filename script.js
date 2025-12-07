// 1. Select the button and input box from your HTML
// Make sure 'add-btn' matches the id="" in your HTML button
const addButton = document.getElementById('add-btn'); 

// Make sure 'note-input' matches the id="" in your HTML input box
const inputField = document.getElementById('note-input');

// 2. Add an event listener (Wait for the click)
addButton.addEventListener('click', function() {
    
    // Get the text the user wrote
    const userText = inputField.value;

    // Test if it works by showing a popup
    alert("You wrote: " + userText);
    
    // (Later we will add code here to actually save the note to the page)
});
