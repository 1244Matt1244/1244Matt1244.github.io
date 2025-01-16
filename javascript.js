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

    // Ensure you are targeting the correct elements by ID
    document.getElementById('about').innerText = languageTexts.about;
    document.getElementById('projects').innerText = languageTexts.projects;

    // Optionally update titles as well
    document.getElementById('about-title').innerText = language === 'en' ? 'About Me' :
        language === 'de' ? 'Über mich' : 'O meni';

    document.getElementById('projects-title').innerText = language === 'en' ? 'My Projects' :
        language === 'de' ? 'Meine Projekte' : 'Moji projekti';
}

// Initialize with default language (optional)
window.onload = function() {
    changeLanguage('en');
};

// Clock and calendar update (kept as it is)
setInterval(function () {
    const now = new Date();
    document.querySelector('.clock-calendar .time').innerText = now.toLocaleTimeString();
    document.querySelector('.clock-calendar .date').innerText = now.toLocaleDateString();
}, 1000);
