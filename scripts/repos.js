const GITHUB_USERNAME = '1244Matt1244';
const GITHUB_API_URL =
`https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const REPOSITORIES_PER_PAGE = 100;
const REQUEST_TIMEOUT = 8000;

document.addEventListener('DOMContentLoaded', () => {
loadRepositories();
});

async function loadRepositories() {
const container = document.getElementById('repo-badges');

if (!container) {
console.warn('Repository container was not found.');
return;
}

showLoadingState(container);

try {
const repositories = await fetchRepositories();

```
const publicRepositories = repositories
  .filter(repository => !repository.fork)
  .sort((a, b) => {
    if (b.stargazers_count !== a.stargazers_count) {
      return b.stargazers_count - a.stargazers_count;
    }

    return (
      new Date(b.updated_at).getTime() -
      new Date(a.updated_at).getTime()
    );
  });

renderRepositories(container, publicRepositories);
```

} catch (error) {
console.error('Failed to load repositories:', error);
showErrorState(container, error);
}
}

async function fetchRepositories() {
const controller = new AbortController();

const timeoutId = setTimeout(() => {
controller.abort();
}, REQUEST_TIMEOUT);

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

```
if (!response.ok) {
  throw new Error(
    `GitHub API request failed (${response.status}).`
  );
}

const repositories = await response.json();

if (!Array.isArray(repositories)) {
  throw new Error('Unexpected response from GitHub API.');
}

return repositories;
```

} catch (error) {
if (error.name === 'AbortError') {
throw new Error('GitHub request timed out.');
}

```
throw error;
```

} finally {
clearTimeout(timeoutId);
}
}

function renderRepositories(container, repositories) {
container.replaceChildren();

if (repositories.length === 0) {
const message = document.createElement('p');

```
message.className = 'empty-state';
message.textContent = 'No public repositories found.';

container.appendChild(message);
return;
```

}

const fragment = document.createDocumentFragment();

repositories.forEach(repository => {
fragment.appendChild(createRepositoryCard(repository));
});

container.appendChild(fragment);
}

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

metadata.append(
createMetadataItem('⭐', repository.stargazers_count),
createMetadataItem('🍴', repository.forks_count),
createMetadataItem(
'💻',
repository.language || 'Code'
)
);

card.append(title, description, metadata);

return card;
}

function createMetadataItem(icon, value) {
const item = document.createElement('span');

item.textContent = `${icon} ${value}`;

return item;
}

function showLoadingState(container) {
container.replaceChildren();

const loading = document.createElement('div');

loading.className = 'loading';
loading.setAttribute('role', 'status');
loading.setAttribute('aria-live', 'polite');
loading.textContent = 'Loading repositories...';

container.appendChild(loading);
}

function showErrorState(container, error) {
container.replaceChildren();

const errorMessage = document.createElement('div');

errorMessage.className = 'error';
errorMessage.setAttribute('role', 'alert');

errorMessage.textContent =
`Unable to load repositories: ${error.message}`;

container.appendChild(errorMessage);
}
