// Add this to the top of your app.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered!', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

let clicks = localStorage.getItem("clicks")
const buttonClick = document.getElementById('clickMe');
const buttonReset = document.getElementById('Reset');
const display = document.getElementById('clickCount');

display.textContent = `Clicks: ${clicks}`;

buttonClick.addEventListener('click', () => {
    clicks++;
    localStorage.setItem("clicks", clicks);
    display.textContent = `Clicks: ${clicks}`;
});

buttonReset.addEventListener('click', () => {
    clicks = 0;
    localStorage.setItem("clicks", clicks);
    display.textContent = `Clicks: 0`;
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome from automatically showing prompt
    event.preventDefault();
    
    // Show install button
    const installBtn = document.getElementById('installBtn');
    installBtn.style.display = 'block';
    
    installBtn.addEventListener('click', () => {
        // Show install prompt
        event.prompt();
        
        // Hide install button
        installBtn.style.display = 'none';
    });
});