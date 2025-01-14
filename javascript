const translations = {
    en: {
        aboutMe: "About Me",
        projectsHeading: "Projects",
        contactMe: "Contact Me",
        contactText: "Feel free to reach out to me through the contact form below or via my social media channels.",
        contactForm: {
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            sendMessage: "Send Message"
        },
        footerText: "© 2025 Matej Martinović | All rights reserved.",
        githubLink: "GitHub"
    },
    de: {
        aboutMe: "Über mich",
        projectsHeading: "Projekte",
        contactMe: "Kontaktieren Sie mich",
        contactText: "Zögern Sie nicht, mich über das Kontaktformular oder über meine Social-Media-Kanäle zu erreichen.",
        contactForm: {
            name: "Ihr Name",
            email: "Ihre E-Mail",
            message: "Ihre Nachricht",
            sendMessage: "Nachricht senden"
        },
        footerText: "© 2025 Matej Martinović | Alle Rechte vorbehalten.",
        githubLink: "GitHub"
    }
};

let currentLang = 'en';

document.getElementById('lang-toggle').addEventListener('click', function() {
    currentLang = currentLang === 'en' ? 'de' : 'en';
    updateContent();
});

function updateContent() {
    document.querySelector('h2#about').textContent = translations[currentLang].aboutMe;
    document.querySelector('section#projects h2').textContent = translations[currentLang].projectsHeading;
    document.querySelector('section#contact h2').textContent = translations[currentLang].contactMe;
    document.querySelector('section#contact .contact-text').textContent = translations[currentLang].contactText;

    const contactForm = document.querySelector('section#contact .contact-form');
    contactForm.querySelector('input[name="name"]').placeholder = translations[currentLang].contactForm.name;
    contactForm.querySelector('input[name="email"]').placeholder = translations[currentLang].contactForm.email;
    contactForm.querySelector('textarea[name="message"]').placeholder = translations[currentLang].contactForm.message;
    contactForm.querySelector('button[type="submit"]').textContent = translations[currentLang].contactForm.sendMessage;

    document.querySelector('footer .footer p').textContent = translations[currentLang].footerText;
    document.querySelector('footer .github-link').textContent = translations[currentLang].githubLink;
}

updateContent();
