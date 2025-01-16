// Get the button and body element
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

// Check the current mode from localStorage (if any) and set it on page load
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
} else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
}

// Event listener to toggle between dark and light mode
toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        localStorage.setItem('mode', 'dark'); // Save the preference
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light'); // Save the preference
    }
});
