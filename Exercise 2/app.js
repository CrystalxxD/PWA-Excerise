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
