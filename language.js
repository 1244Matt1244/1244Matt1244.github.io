// Clock and Date functionality
function updateClockAndDate() {
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');
    
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    timeElement.textContent = `Current Time: ${time}`;
    dateElement.textContent = `Current Date: ${date}`;
}

setInterval(updateClockAndDate, 1000); // Update clock every second

// Search Functionality for Projects
document.querySelector('.search-bar input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Contact Form Handling
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = this.querySelector('[name="name"]').value;
    const email = this.querySelector('[name="email"]').value;
    const message = this.querySelector('[name="message"]').value;

    if (name && email && message) {
        // Simulate successful form submission
        alert(`Message sent by ${name} (${email}): ${message}`);
        this.reset(); // Reset form after submission
    } else {
        alert("Please fill out all fields.");
    }
});
