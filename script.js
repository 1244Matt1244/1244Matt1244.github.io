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
        githubLink: "GitHub",
        about: "Hi! I'm Matej Martinović, a passionate and versatile software engineer...",
        projects: "Here is a selection of the projects I have worked on...",
        projectsList: [
            {
                title: "maze_escape",
                link: "https://github.com/1244Matt1244/maze_escape",
                description: "A maze generation and solving backend system developed using Java.",
                image: "path_to_image_1.jpg"
            },
            {
                title: "openstack_terraform_generator",
                link: "https://github.com/1244Matt1244/openstack_terraform_generator",
                description: "A tool for generating Terraform configuration files for OpenStack resources.",
                image: "path_to_image_2.jpg"
            },
            // Add all project objects here
        ]
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
        githubLink: "GitHub",
        about: "Hallo! Ich bin Matej Martinović, ein leidenschaftlicher und vielseitiger Softwareingenieur...",
        projects: "Hier ist eine Auswahl der Projekte, an denen ich gearbeitet habe...",
        projectsList: [
            // Translated project objects here
        ]
    },
    hr: {
        aboutMe: "O meni",
        projectsHeading: "Projekti",
        contactMe: "Kontaktirajte me",
        contactText: "Slobodno me kontaktirajte putem kontakt forme ili mojih društvenih mreža.",
        contactForm: {
            name: "Vaše ime",
            email: "Vaša e-mail adresa",
            message: "Vaša poruka",
            sendMessage: "Pošaljite poruku"
        },
        footerText: "© 2025 Matej Martinović | Sva prava pridržana.",
        githubLink: "GitHub",
        about: "Bok! Ja sam Matej Martinović, strastveni i svestrani softverski inženjer...",
        projects: "Ovdje je izbor projekata na kojima sam radio...",
        projectsList: [
            // Translated project objects here
        ]
    }
};

function changeLanguage(language) {
    const langTexts = translations[language];

    // Update About Section
    document.getElementById('about').innerText = langTexts.about;
    document.getElementById('projects').innerText = langTexts.projects;

    // Update Titles
    document.getElementById('about-title').innerText = langTexts.aboutMe;
    document.getElementById('projects-title').innerText = langTexts.projectsHeading;

    // Update Contact Section
    document.getElementById("contact-me-title").innerText = langTexts.contactMe;
    document.getElementById("contact-text").innerText = langTexts.contactText;

    // Update Contact Form Placeholders
    const contactForm = document.querySelector(".contact-form");
    contactForm.querySelector('[name="name"]').setAttribute("placeholder", langTexts.contactForm.name);
    contactForm.querySelector('[name="email"]').setAttribute("placeholder", langTexts.contactForm.email);
    contactForm.querySelector('[name="message"]').setAttribute("placeholder", langTexts.contactForm.message);

    // Update Button Text
    contactForm.querySelector("button").innerText = langTexts.contactForm.sendMessage;

    // Update Footer
    document.getElementById("footer-text").innerText = langTexts.footerText;
    document.getElementById("github-link").innerText = langTexts.githubLink;

    // Update Projects Section
    const projectsList = langTexts.projectsList;
    const projectsContainer = document.querySelector(".projects-list");
    projectsContainer.innerHTML = ''; // Clear previous content
    projectsList.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <a href="${project.link}">
                <img src="${project.image}" alt="${project.title}" />
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </a>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Initialize with default language (optional)
window.onload = function() {
    changeLanguage('en'); // Default to English, or you can set 'hr' or 'de'
};

// Clock and calendar update (kept as it is)
setInterval(function () {
    const now = new Date();
    document.querySelector('.clock-calendar .time').innerText = now.toLocaleTimeString();
    document.querySelector('.clock-calendar .date').innerText = now.toLocaleDateString();
}, 1000);
