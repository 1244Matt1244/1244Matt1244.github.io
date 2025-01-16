document.addEventListener('DOMContentLoaded', function () {
    // Initialize emailJS
    emailjs.init("user_yourEmailJSUserID");  // Replace with your emailJS user ID

    // Handle form submission and send email using emailJS
    const statusMessage = document.querySelector('.status-message');
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Send the form data using emailJS
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)  // Replace with your service ID and template ID
            .then(() => {
                // Success message to the user
                statusMessage.innerText = 'Message sent successfully!';
                statusMessage.style.color = 'green';
                
                // Optionally reset the form fields
                form.reset();
            }, (error) => {
                // Error message if sending fails
                statusMessage.innerText = 'Failed to send message. Please try again later.';
                statusMessage.style.color = 'red';
            });
    });

    // Handle language change functionality
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

    // Event listener for language change
    document.querySelector("#language-select").addEventListener('change', function() {
        changeLanguage(this.value);
    });

    // Update time and date every second
    setInterval(function () {
        const now = new Date();
        document.querySelector('.clock-calendar .time').innerText = now.toLocaleTimeString();
        document.querySelector('.clock-calendar .date').innerText = now.toLocaleDateString();
    }, 1000);

    // Search bar functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const projectList = document.querySelectorAll('.project-card');
        projectList.forEach(function (card) {
            const projectName = card.querySelector('h3').innerText.toLowerCase();
            if (projectName.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Initialize projects array to populate the project list
    const projects = [
        { name: 'maze_escape', tech: 'Java', description: 'A maze generation and solving backend system developed using Java.', url: 'https://github.com/1244Matt1244/maze_escape' },
        { name: 'openstack_terraform_generator', tech: 'Python', description: 'A tool for generating Terraform configuration files for OpenStack resources.', url: 'https://github.com/1244Matt1244/openstack_terraform_generator' },
        { name: 'azure_project', tech: 'Cloud DevOps (PowerShell)', description: 'A cloud-based DevOps solution for managing Azure infrastructure, including deployment scripts and management tools.', url: 'https://github.com/1244Matt1244/azure_project' },
        { name: 'qrcode_generator', tech: 'Python', description: 'A project to generate QR codes and embed logos into them.', url: 'https://github.com/1244Matt1244/qrcode_generator' },
        { name: 'rest_api', tech: 'Node.js', description: 'A REST API backend built with Node.js for handling data transactions.', url: 'https://github.com/1244Matt1244/rest_api' },
        { name: 'ha-master-slave-setup-with-redis-db', tech: 'Redis', description: 'Setting up a master-slave architecture with Redis for high availability and fault tolerance.', url: 'https://github.com/1244Matt1244/ha-master-slave-setup-with-redis-db' },
        { name: 'qgis_project_python', tech: 'Python', description: 'A QGIS-based Python project for geospatial data analysis and processing.', url: 'https://github.com/1244Matt1244/qgis_project_python' },
        { name: 'bank_system_ERP', tech: 'C# (.NET Framework)', description: 'A bank system ERP application with Excel integration and user management.', url: 'https://github.com/1244Matt1244/bank_system_ERP' },
        { name: 'credit_card_fraud_detection', tech: 'Machine Learning', description: 'A machine learning project for detecting fraudulent credit card transactions.', url: 'https://github.com/1244Matt1244/credit_card_fraud_detection' },
        { name: 'small_guestbook_application', tech: 'PHP', description: 'A small guestbook application with user authentication and input validation.', url: 'https://github.com/1244Matt1244/small_guestbook_application' },
        { name: 'backend_service_assignment', tech: 'Go', description: 'Backend service assignment to handle traffic cameras and MTG cards.', url: 'https://github.com/1244Matt1244/backend_service_assignment' },
        { name: 'sql_learning_materials_scripts', tech: 'SQL', description: 'SQL learning materials and example scripts for database manipulation.', url: 'https://github.com/1244Matt1244/sql_learning_materials_scripts' },
        { name: 'enhanced_python-code_with_turtle_graphics.py', tech: 'Python', description: 'An enhanced Python project using Turtle graphics to create visualizations.', url: 'https://github.com/1244Matt1244/enhanced_python-code_with_turtle_graphics.py' },
        { name: 'character_frequency_counter', tech: 'Python', description: 'A Python tool to count character frequency in a string or file.', url: 'https://github.com/1244Matt1244/character_frequency_counter' },
        { name: 'python_geometrical_task', tech: 'Python', description: 'A Python project for geometrical calculations and visualizations.', url: 'https://github.com/1244Matt1244/python_geometrical_task' },
        { name: 'password_generator', tech: 'Python', description: 'A simple password generator tool written in Python.', url: 'https://github.com/1244Matt1244/password_generator' },
        { name: 'quiz_game', tech: 'JavaScript', description: 'A fun quiz game written in JavaScript for testing knowledge.', url: 'https://github.com/1244Matt1244/quiz_game' },
        { name: 'hello_fastify', tech: 'Node.js', description: 'A simple Fastify framework setup for backend services.', url: 'https://github.com/1244Matt1244/hello_fastify' }
    ];

    // Dynamically create the project list
    const projectListContainer = document.querySelector('.project-list');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p><strong>${project.tech}:</strong> ${project.description}</p>
            <a href="${project.url}" target="_blank">GitHub Repository</a>
        `;
        projectListContainer.appendChild(projectCard);
    });
});
