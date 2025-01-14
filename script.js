document.addEventListener("DOMContentLoaded", function () {
    const projectsList = document.getElementById("projects-list");

    fetch('https://api.github.com/users/1244Matt1244/repos')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const projectElement = document.createElement("div");
                projectElement.classList.add("project");

                const projectTitle = document.createElement("h3");
                projectTitle.textContent = project.name;

                const projectDescription = document.createElement("p");
                projectDescription.textContent = project.description || "No description available.";

                const projectLink = document.createElement("a");
                projectLink.href = project.html_url;
                projectLink.target = "_blank";
                projectLink.textContent = "View Project";

                projectElement.appendChild(projectTitle);
                projectElement.appendChild(projectDescription);
                projectElement.appendChild(projectLink);

                projectsList.appendChild(projectElement);
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub repos:', error);
            projectsList.innerHTML = "<p>Failed to load projects. Please try again later.</p>";
        });
});
