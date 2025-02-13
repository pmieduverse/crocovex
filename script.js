// Instead of removing HTML, we'll hide the content
document.addEventListener('DOMContentLoaded', function() {
    // Hide all content except body
    const mainContent = document.body.innerHTML;
    
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
});
