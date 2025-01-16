const translations = {
    en: {
        aboutMe: "About Me",
        projectsHeading: "Projects",
        contactMe: "Contact Me",
        contactText: "Feel free to contact me via the contact form or my social media links.",
        technologies: "Technologies I Use",
        technologiesList: [
            "Frontend: React, JavaScript, HTML, CSS",
            "Backend: Node.js, TypeScript, Go, Java, PHP, C#",
            "Database: SQL, NoSQL, MariaDB, PostgreSQL",
            "Cloud: Azure, OpenStack",
            "DevOps: Terraform, Kubernetes",
            "Data Science: Python, Scikit-learn"
        ],
        contactForm: {
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            sendMessage: "Send Message"
        },
        footerText: "© 2025 Matej Martinović | All Rights Reserved.",
        githubLink: "GitHub",
        about: "Hi! I'm Matej Martinović, a passionate and versatile software engineer...",
        projects: "Here are some of the projects I've worked on...",
        projectsList: [
            {
                title: "maze_escape",
                link: "https://github.com/1244Matt1244/maze_escape",
                description: "Backend system for generating and solving mazes developed using Java.",
                image: "path_to_image_1.jpg"
            },
            {
                title: "openstack_terraform_generator",
                link: "https://github.com/1244Matt1244/openstack_terraform_generator",
                description: "Tool for generating Terraform configuration files for OpenStack resources.",
                image: "path_to_image_2.jpg"
            },
            {
                title: "small_guestbook_application",
                link: "https://github.com/1244Matt1244/small_guestbook_application",
                description: "Simple PHP guestbook application with user authentication and input validation.",
                image: "path_to_image_3.jpg"
            },
            {
                title: "credit_card_fraud_detection",
                link: "https://github.com/1244Matt1244/credit_card_fraud_detection",
                description: "Model for detecting credit card fraud using machine learning (Random Forest).",
                image: "path_to_image_4.jpg"
            },
            {
                title: "bank_system_erp",
                link: "https://github.com/1244Matt1244/bank_system_erp",
                description: "C# (.NET) ERP system for banks with data access, Excel integration, and user interface.",
                image: "path_to_image_5.jpg"
            },
            {
                title: "qgis_project_python",
                link: "https://github.com/1244Matt1244/qgis_project_python",
                description: "Python-based QGIS project for geographic information system (GIS) tasks.",
                image: "path_to_image_6.jpg"
            },
            {
                title: "azure_project",
                link: "https://github.com/1244Matt1244/azure_project",
                description: "A project focused on integrating and utilizing Microsoft Azure services across applications.",
                image: "path_to_image_10.jpg"
            }
        ]
    },
    // Other languages (like hr) can follow the same structure
    hr: {
        aboutMe: "O meni",
        projectsHeading: "Projekti",
        contactMe: "Kontaktirajte me",
        contactText: "Slobodno me kontaktirajte putem kontakt obrasca ili društvenih mreža.",
        technologies: "Tehnologije koje koristim",
        technologiesList: [
            "Frontend: React, JavaScript, HTML, CSS",
            "Backend: Node.js, TypeScript, Go, Java, PHP, C#",
            "Database: SQL, NoSQL, MariaDB, PostgreSQL",
            "Cloud: Azure, OpenStack",
            "DevOps: Terraform, Kubernetes",
            "Data Science: Python, Scikit-learn"
        ],
        contactForm: {
            name: "Vaše ime",
            email: "Vaša e-pošta",
            message: "Vaša poruka",
            sendMessage: "Pošaljite poruku"
        },
        footerText: "© 2025 Matej Martinović | Sva prava pridržana.",
        githubLink: "GitHub",
        about: "Bok! Ja sam Matej Martinović, strastveni i svestrani inženjer softvera...",
        projects: "Evo nekoliko projekata na kojima sam radio...",
        projectsList: [
            {
                title: "maze_escape",
                link: "https://github.com/1244Matt1244/maze_escape",
                description: "Backend sustav za generiranje i rješavanje labirinta razvijen korištenjem Jave.",
                image: "path_to_image_1.jpg"
            },
            {
                title: "openstack_terraform_generator",
                link: "https://github.com/1244Matt1244/openstack_terraform_generator",
                description: "Alat za generiranje Terraform konfiguracijskih datoteka za OpenStack resurse.",
                image: "path_to_image_2.jpg"
            },
            {
                title: "small_guestbook_application",
                link: "https://github.com/1244Matt1244/small_guestbook_application",
                description: "Jednostavna PHP aplikacija za goste s autentifikacijom korisnika i validacijom unosa.",
                image: "path_to_image_3.jpg"
            },
            {
                title: "credit_card_fraud_detection",
                link: "https://github.com/1244Matt1244/credit_card_fraud_detection",
                description: "Model za prepoznavanje prevara na kreditnim karticama temeljen na strojnom učenju (Random Forest).",
                image: "path_to_image_4.jpg"
            },
            {
                title: "bank_system_erp",
                link: "https://github.com/1244Matt1244/bank_system_erp",
                description: "C# (.NET) ERP sustav za banke s pristupom podacima, integracijom Excela i korisničkim sučeljem.",
                image: "path_to_image_5.jpg"
            },
            {
                title: "qgis_project_python",
                link: "https://github.com/1244Matt1244/qgis_project_python",
                description: "Python-based QGIS project for geographic information system (GIS) tasks.",
                image: "path_to_image_6.jpg"
            }
        ]
    }
};

function changeLanguage(language) {
    document.getElementById("about-title").innerText = translations[language].aboutMe;
    document.getElementById("about").innerText = translations[language].about;
    document.getElementById("projects-title").innerText = translations[language].projectsHeading;
    document.getElementById("contact-title").innerText = translations[language].contactMe;
    document.getElementById("contact-text").innerText = translations[language].contactText;
    document.getElementById("footer-text").innerText = translations[language].footerText;
    document.getElementById("contact-name-label").innerText = translations[language].contactForm.name;
    document.getElementById("contact-email-label").innerText = translations[language].contactForm.email;
    document.getElementById("contact-message-label").innerText = translations[language].contactForm.message;
    document.getElementById("contact-submit-button").innerText = translations[language].contactForm.sendMessage;
    
    // Technologies section
    const techList = translations[language].technologiesList.map(tech => {
        return `<li>${tech}</li>`;
    }).join("");
    document.getElementById("technologies-list").innerHTML = techList;

    // Projects list
    const projectsList = translations[language].projectsList.map(project => {
        return `
            <div class="project">
                <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
                <p>${project.description}</p>
                <img src="${project.image}" alt="${project.title}">
            </div>
        `;
    }).join("");

    document.getElementById("projects-list").innerHTML = projectsList;
}

window.onload = () => {
    changeLanguage('en');  // Default language is English
};
