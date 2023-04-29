// Define a function named 'speak' which will be called when the submit button is clicked

// The 'speak' function should get the input text value, and use the SpeechSynthesis API to speak the text.
// Make sure-the application only speaks when there's text in the input field.
function speak() {
    const inputText = document.getElementById('textInput').value;
    if (inputText.length > 0) {
        const speech = new SpeechSynthesisUtterance(inputText);
        window.speechSynthesis.speak(speech);
    }
}
