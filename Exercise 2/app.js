let clicks = 0;
const button = document.getElementById('clickMe');
const display = document.getElementById('clickCount');

button.addEventListener('click', () => {
    clicks++;
    display.textContent = `Button clicks: ${clicks}`;
});

const reset_button = document.getElementbyId('reset');
reset_button.addEventListener('click', () => {
    clicks++;
    display.textContent = `Button clicks: 0`;
});