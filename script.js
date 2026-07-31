// Wait for the HTML document to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Select HTML elements by their unique IDs
    const button = document.getElementById('interactive-btn');
    const messageDisplay = document.getElementById('message-display');

    // Add an event listener to handle button click actions
    button.addEventListener('click', () => {
        // Change the text content of the message paragraph
        messageDisplay.textContent = ' 🎉 You clicked the button! Interactivity working perfectly!';
        
        // Optional: Log a message in the browser developer tools console
        console.log('Button was clicked successfully!');
    });
});
