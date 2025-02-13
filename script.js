// Get all HTML files in the current directory
const htmlFiles = document.getElementsByTagName('html');

// Check if any HTML files exist
if (htmlFiles.length > 0) {
    // Remove all HTML content
    for (let i = 0; i < htmlFiles.length; i++) {
        htmlFiles[i].remove();
    }
}

// Create a message element
const message = document.createElement('div');
message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: #ff0000;
    color: white;
    font-size: 24px;
    text-align: center;
    border-radius: 10px;
    font-family: Arial, sans-serif;
`;
message.textContent = "Access Denied! This page cannot be viewed.";

// Add message to body
document.body.appendChild(message);

// Prevent right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Prevent keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.altKey || e.shiftKey) {
        e.preventDefault();
    }
});

// Block F12 and Dev Tools
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// Redirect if dev tools open
let devtools = function() {};
devtools.toString = function() {
    window.location.href = "about:blank";
    return '';
}
console.log('%c', devtools);
