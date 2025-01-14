// Function to update the clock every second
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Function to display the current year and month in the calendar
function updateYearCalendar() {
  const calendarElement = document.getElementById('year-calendar');
  const now = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const year = now.getFullYear();
  const month = monthNames[now.getMonth()];
  calendarElement.innerHTML = `Current Month: ${month}, ${year}`;
}

// Function to initialize and update elements
function initialize() {
  updateClock();
  updateYearCalendar();

  // Update the clock every second
  setInterval(updateClock, 1000);
}

// Initialize everything when the page loads
window.onload = initialize;
