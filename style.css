// Dynamic clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.toLocaleDateString();

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} | ${date}`;
}

setInterval(updateClock, 1000);
updateClock();
