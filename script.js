// Dynamically changing background (Cher Blossom Effect)
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const colors = ["#ffb6c1", "#ff6347", "#ff99cc", "#ff66b2"];
    let colorIndex = 0;

    setInterval(() => {
        body.style.background = `linear-gradient(45deg, ${colors[colorIndex]}, #ff6347)`;
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000); // Change background every 5 seconds
});

// Cher Blossom Clock (React component simulation in Vanilla JS)
function createClock() {
    const clockContainer = document.getElementById("clock-container");

    function updateClock() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        
        const timeString = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

        clockContainer.textContent = timeString;
    }

    setInterval(updateClock, 1000); // Update clock every second
    updateClock(); // Initial call to display the time immediately
}

createClock();

// Function to handle the scroll-to-top behavior
document.querySelector("nav ul li a").addEventListener("click", function(event) {
    const targetId = event.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
        top: targetElement.offsetTop - 20, // small offset to make the header visible
        behavior: "smooth"
    });

    event.preventDefault(); // Prevent the default anchor click behavior
});

// Optional: Additional scripts for form validation or enhancements
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('All fields are required!');
    }
});
