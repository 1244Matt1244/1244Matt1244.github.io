// Initialize EmailJS service
emailjs.init("user_yourEmailJSUserID");

// Language selection functionality
function changeLanguage(language) {
    const texts = {
        en: {
            about: "Hi! I'm Matej Martinović, a passionate and versatile software engineer...",
            projects: "Here is a selection of the projects I have worked on...",
        },
        de: {
            about: "Hallo! Ich bin Matej Martinović, ein leidenschaftlicher und vielseitiger Softwareingenieur...",
            projects: "Hier ist eine Auswahl der Projekte, an denen ich gearbeitet habe...",
        },
        hr: {
            about: "Bok! Ja sam Matej Martinović, strastveni i svestrani softverski inženjer...",
            projects: "Ovdje je izbor projekata na kojima sam radio...",
        },
    };

    const languageTexts = texts[language];
    document.querySelector("#about p").innerText = languageTexts.about;
    document.querySelector("#projects p").innerText = languageTexts.projects;
}

// Clock and calendar update function
setInterval(function () {
    const now = new Date();
    document.querySelector('.clock-calendar .time').innerText = now.toLocaleTimeString();
    document.querySelector('.clock-calendar .date').innerText = now.toLocaleDateString();
}, 1000);

// Email form submission handling
document.addEventListener('DOMContentLoaded', function () {
    const statusMessage = document.querySelector('.status-message');
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
            .then(() => {
                statusMessage.innerText = 'Message sent successfully!';
                statusMessage.style.color = 'green';
            }, (error) => {
                statusMessage.innerText = 'Failed to send message. Please try again later.';
                statusMessage.style.color = 'red';
            });
    });
});
