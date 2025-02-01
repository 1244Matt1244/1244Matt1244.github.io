// Fetch and display repo badges
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.github.com/users/1244Matt1244/repos')
        .then(response => {
            if (!response.ok) throw new Error('Network response failed');
            return response.json();
        })
        .then(repos => {
            const container = document.getElementById('badges-container');
            
            repos.forEach(repo => {
                const badge = document.createElement('div');
                badge.className = 'repo-badge';
                
                badge.innerHTML = `
                    <h3>${repo.name}</h3>
                    <img src="https://img.shields.io/tokei/lines/github/1244Matt1244/${repo.name}" 
                         alt="Lines of code in ${repo.name}">
                    <img src="https://github.com/1244Matt1244/${repo.name}/actions/workflows/tests.yml/badge.svg" 
                         alt="CI status for ${repo.name}">
                `;
                
                container.appendChild(badge);
            });
        })
        .catch(error => {
            console.error('Error fetching repos:', error);
        });
});
