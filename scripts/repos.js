// Fetch and display repository badges when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('badges-container');

  try {
    // Show a loading state while fetching data
    container.innerHTML = '<div class="loading">Loading repositories...</div>';

    // Fetch the user's repositories from GitHub API
    const response = await fetch('https://api.github.com/users/1244Matt1244/repos');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    // Parse the JSON response
    const repos = await response.json();

    // Clear the loading state
    container.innerHTML = '';

    // Iterate through repositories and create badges for non-forked repos
    repos.forEach(repo => {
      if (!repo.fork) { // Exclude forked repositories
        const badge = document.createElement('div');
        badge.className = 'repo-badge';

        // Create HTML content for the badge
        badge.innerHTML = `
          <h3>${repo.name}</h3>
          <img 
            src="https://img.shields.io/tokei/lines/github/1244Matt1244/${repo.name}" 
            alt="Lines of code in ${repo.name}">
          <img 
            src="https://github.com/1244Matt1244/${repo.name}/actions/workflows/tests.yml/badge.svg" 
            alt="CI status for ${repo.name}">
        `;

        // Append the badge to the container
        container.appendChild(badge);
      }
    });

  } catch (error) {
    // Handle errors gracefully by displaying an error message
    container.innerHTML = `<div class="error">Failed to load repositories: ${error.message}</div>`;
  }
});

// Dark mode toggle functionality
const toggle = document.getElementById('dark-toggle');

// Load saved preference from localStorage
if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggle.checked = true;
}

// Save the theme preference when the toggle is changed
toggle.addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
  localStorage.setItem('darkMode', e.target.checked);
});
