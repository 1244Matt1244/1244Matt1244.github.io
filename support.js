// Calendar & Clock Update
let currentDate = new Date();

function updateClock() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    const currentTime = new Date();
    timeElement.innerText = currentTime.toLocaleTimeString();
    dateElement.innerText = currentTime.toLocaleDateString();
}

function updateCalendar() {
    const monthYear = document.getElementById("month-year");
    const calendarBody = document.getElementById("calendar-body");

    // Get the current month's details
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    // Format month and year
    monthYear.innerText = `${currentDate.toLocaleString("default", { month: "long" })} ${currentDate.getFullYear()}`;

    // Build the calendar table
    let calendarHTML = "";
    let day = 1;

    for (let i = 0; i < 6; i++) {
        calendarHTML += "<tr>";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                calendarHTML += "<td></td>"; // Empty cells before the first day
            } else if (day <= daysInMonth) {
                calendarHTML += `<td>${day}</td>`; // Days of the current month
                day++;
            } else {
                calendarHTML += "<td></td>"; // Empty cells after the last day
            }
        }
        calendarHTML += "</tr>";
        if (day > daysInMonth) break;
    }
    calendarBody.innerHTML = calendarHTML;
}

// Handle the prev/next month buttons
document.getElementById("prev-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Initialize the clock and calendar
setInterval(updateClock, 1000);
updateCalendar();
