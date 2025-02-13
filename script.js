// Function to block the page
function blockPage() {
    // Create and show the message
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
        z-index: 999999;
    `;
    message.textContent = "Access Denied! This page cannot be viewed.";

    // Clear and update body
    document.body.innerHTML = '';
    document.body.appendChild(message);
}

// Prevent right-click and show block screen
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    blockPage();
});

// Block keyboard shortcuts and show block screen
document.addEventListener('keydown', (e) => {
    // Block Ctrl+U
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        blockPage();
    }
    
    // Block F12
    if (e.key === 'F12') {
        e.preventDefault();
        blockPage();
    }
    
    // Block Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        blockPage();
    }
    
    // Block Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        blockPage();
    }
    
    // Block Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        blockPage();
    }
});

// Detect DevTools opening
let devtools = function() {};
devtools.toString = function() {
    blockPage();
    return '';
}
console.log('%c', devtools);

// Additional protection for DevTools
setInterval(function() {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    if (widthThreshold || heightThreshold) {
        blockPage();
    }
}, 1000);
