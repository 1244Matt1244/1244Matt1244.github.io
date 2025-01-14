// Live Clock
function updateClock() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

// Real-time Calendar using Date object
function createCalendar() {
    const calendarElement = document.getElementById('calendar');
    const date = new Date();

    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    // First day of the month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    // Days in the month
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    let calendarHtml = `<h3>${months[currentMonth]} ${currentYear}</h3>`;
    calendarHtml += "<table><tr>";

    // Days of the week header
    for (const day of daysOfWeek) {
        calendarHtml += `<th>${day}</th>`;
    }
    calendarHtml += "</tr><tr>";

    // Empty cells for the first day
    for (let i = 0; i < firstDay; i++) {
        calendarHtml += "<td></td>";
    }

    // Days of the month
    for (let day = 1; day <= totalDays; day++) {
        if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
            calendarHtml += "</tr><tr>"; // New row for the next week
        }
        calendarHtml += `<td>${day}</td>`;
    }
    calendarHtml += "</tr></table>";
    
    calendarElement.innerHTML = calendarHtml;
}

createCalendar();
