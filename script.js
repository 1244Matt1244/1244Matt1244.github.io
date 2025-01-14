// Function to update the clock dynamically
function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString(undefined, options);

  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
}

// Call updateClock every second
setInterval(updateClock, 1000);

// Initial call to display immediately
updateClock();
