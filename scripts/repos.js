const GITHUB_USERNAME = '1244Matt1244';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const REPOSITORIES_PER_PAGE = 100;
const REQUEST_TIMEOUT = 8000;

document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  loadRepositories();
});

/**
 * Loads and displays GitHub repositories.
 */
async function loadRepositories() {
  const container = document.getElementById('badges-container');

  if (!container) {
    console.warn('Repository container was not found.');
    return;
  }

  showLoadingState(container);

  try {
    const repositories = await fetchRepositories();

    const publicRepositories = repositories
      .filter(repository => !repository.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    renderRepositories(container, publicRepositories);
  } catch (error) {
    console.error('Failed to load repositories:', error);
    showErrorState(container, error);
  }
}

/**
 * Fetches repositories from the GitHub API.
 */
async function fetchRepositories() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    const response = await fetch(
      `${GITHUB_API_URL}?per_page=${REPOSITORIES_PER_PAGE}&sort=updated`,
      {
        headers: {
          Accept: 'application/vnd.github+json'
        },
        signal: controller.signal
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API request failed with status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('GitHub request timed out.');
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Renders repository cards.
 */
function renderRepositories(container, repositories) {
  container.replaceChildren();

  if (repositories.length === 0) {
    const message = document.createElement('p');
    message.className = 'empty-state';
    message.textContent = 'No repositories found.';
    container.appendChild(message);
    return;
  }

  const fragment = document.createDocumentFragment();

  repositories.forEach(repository => {
    fragment.appendChild(createRepositoryCard(repository));
  });

  container.appendChild(fragment);
}

/**
 * Creates a repository card.
 */
function createRepositoryCard(repository) {
  const card = document.createElement('article');
  card.className = 'repo-badge';

  const title = document.createElement('h3');

  const link = document.createElement('a');
  link.href = repository.html_url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = repository.name;

  title.appendChild(link);

  const description = document.createElement('p');
  description.textContent =
    repository.description || 'No description available.';

  const metadata = document.createElement('div');
  metadata.className = 'repo-metadata';

  metadata.innerHTML = `
    <span>⭐ ${repository.stargazers_count}</span>
    <span>🍴 ${repository.forks_count}</span>
    <span>${repository.language || 'Code'}</span>
  `;

  card.append(title, description, metadata);

  return card;
}

/**
 * Displays the loading state.
 */
function showLoadingState(container) {
  container.replaceChildren();

  const loading = document.createElement('div');
  loading.className = 'loading';
  loading.textContent = 'Loading repositories...';

  container.appendChild(loading);
}

/**
 * Displays an error state.
 */
function showErrorState(container, error) {
  container.replaceChildren();

  const errorMessage = document.createElement('div');
  errorMessage.className = 'error';

  errorMessage.textContent =
    `Failed to load repositories: ${error.message}`;

  container.appendChild(errorMessage);
}

/**
 * Initializes the dark/light theme.
 */
function initializeTheme() {
  const toggle = document.getElementById('dark-toggle');

  if (!toggle) {
    return;
  }

  const savedTheme = localStorage.getItem('darkMode');

  const darkModeEnabled = savedTheme === 'true';

  applyTheme(darkModeEnabled);
  toggle.checked = darkModeEnabled;

  toggle.addEventListener('change', event => {
    applyTheme(event.target.checked);
  });
}

/**
 * Applies and persists the selected theme.
 */
function applyTheme(isDarkMode) {
  document.documentElement.dataset.theme =
    isDarkMode ? 'dark' : 'light';

  localStorage.setItem('darkMode', String(isDarkMode));
}
