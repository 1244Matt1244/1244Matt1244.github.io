const GITHUB_USERNAME = '1244Matt1244';

const GITHUB_API_URL =
`https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const REPOSITORIES_PER_PAGE = 100;
const REQUEST_TIMEOUT = 10000;

let allRepositories = [];
let activeCategory = 'All';
let activeTechnology = 'All';

document.addEventListener('DOMContentLoaded', () => {
initializeProjectExplorer();
});

async function initializeProjectExplorer() {
const container = document.getElementById('repo-badges');

if (!container) {
return;
}

showLoadingState(container);

try {
allRepositories = await fetchRepositories();

renderFilters();
renderRepositories();

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
  
if (!response.ok) {
  throw new Error(
    `GitHub API request failed (${response.status}).`
  );
}

const repositories = await response.json();

if (!Array.isArray(repositories)) {
  throw new Error('Unexpected GitHub API response.');
}

return repositories
  .filter(repository => !repository.fork)
  .sort((a, b) => {
    const aMeta = getProjectMetadata(a.name);
    const bMeta = getProjectMetadata(b.name);

    if (
      Boolean(bMeta.featured) !==
      Boolean(aMeta.featured)
    ) {
      return Number(Boolean(bMeta.featured)) -
        Number(Boolean(aMeta.featured));
    }

    return (
      new Date(b.updated_at).getTime() -
      new Date(a.updated_at).getTime()
    );
  });

} catch (error) {
if (error.name === 'AbortError') {
throw new Error('GitHub request timed out.');
}


throw error;


} finally {
clearTimeout(timeoutId);
}
}

function renderFilters() {
renderCategoryFilters();
renderTechnologyFilters();
}

function renderCategoryFilters() {
const container =
document.getElementById('category-filters');

if (!container) {
return;
}

const categories = [
'All',
...new Set(
allRepositories.map(repository =>
getProjectMetadata(repository.name).category
)
)
];

container.replaceChildren();

categories.forEach(category => {
const button = createFilterButton(
category,
activeCategory === category,
() => {
activeCategory = category;
renderFilters();
renderRepositories();
}
);


container.appendChild(button);

});
}

function renderTechnologyFilters() {
const container =
document.getElementById('technology-filters');

if (!container) {
return;
}

const technologies = [
'All',
...new Set(
allRepositories.flatMap(repository =>
getProjectMetadata(repository.name).technologies
)
)
].sort((a, b) => {
if (a === 'All') {
return -1;
}


if (b === 'All') {
  return 1;
}

return a.localeCompare(b);


});

container.replaceChildren();

technologies.forEach(technology => {
const button = createFilterButton(
technology,
activeTechnology === technology,
() => {
activeTechnology = technology;
renderFilters();
renderRepositories();
}
);


container.appendChild(button);


});
}

function createFilterButton(
label,
active,
onClick
) {
const button = document.createElement('button');

button.type = 'button';
button.className =
`filter-button${active ? ' is-active' : ''}`;

button.textContent = label;

button.setAttribute(
'aria-pressed',
String(active)
);

button.addEventListener('click', onClick);

return button;
}

function getFilteredRepositories() {
return allRepositories.filter(repository => {
const metadata =
getProjectMetadata(repository.name);

const categoryMatches =
  activeCategory === 'All' ||
  metadata.category === activeCategory;

const technologyMatches =
  activeTechnology === 'All' ||
  metadata.technologies.includes(activeTechnology);

return categoryMatches && technologyMatches;

});
}

function renderRepositories() {
const container =
document.getElementById('repo-badges');

const countElement =
document.getElementById('project-count');

if (!container) {
return;
}

const repositories =
getFilteredRepositories();

container.replaceChildren();

if (countElement) {
countElement.textContent =
`${repositories.length} project${
        repositories.length === 1 ? '' : 's'
      }`;
}

if (repositories.length === 0) {
const empty = document.createElement('p');

empty.className = 'empty-state';
empty.textContent =
  'No projects match the selected filters.';

container.appendChild(empty);

return;

}

const fragment =
document.createDocumentFragment();

repositories.forEach(repository => {
fragment.appendChild(
createRepositoryCard(repository)
);
});

container.appendChild(fragment);
}

function createRepositoryCard(repository) {
const metadata =
getProjectMetadata(repository.name);

const card =
document.createElement('article');

card.className =
'repo-badge project-card';

if (metadata.featured) {
card.classList.add('is-featured');
}

const header =
document.createElement('div');

header.className =
'project-card__header';

const title =
document.createElement('h3');

const link =
document.createElement('a');

link.href = repository.html_url;
link.target = '_blank';
link.rel = 'noopener noreferrer';
link.textContent =
formatRepositoryName(repository.name);

title.appendChild(link);

header.appendChild(title);

if (metadata.featured) {
const badge =
document.createElement('span');

```
badge.className =
  'project-card__featured';

badge.textContent =
  'Featured';

header.appendChild(badge);

}

const description =
document.createElement('p');

description.textContent =
repository.description ||
'Software development project.';

const category =
document.createElement('p');

category.className =
'project-card__category';

category.textContent =
metadata.category;

const technologies =
document.createElement('div');

technologies.className =
'project-tags';

metadata.technologies.forEach(technology => {
const tag =
document.createElement('button');

tag.type = 'button';
tag.className = 'project-tag';
tag.textContent = technology;

tag.addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();

  activeTechnology = technology;

  renderFilters();
  renderRepositories();

  document
    .getElementById('projects')
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
});

technologies.appendChild(tag);

});

const footer =
document.createElement('div');

footer.className =
'project-card__footer';

const language =
document.createElement('span');

language.textContent =
repository.language || 'Multiple technologies';

const repositoryLink =
document.createElement('a');

repositoryLink.href =
repository.html_url;

repositoryLink.target = '_blank';
repositoryLink.rel =
'noopener noreferrer';

repositoryLink.textContent =
'View repository →';

footer.append(
language,
repositoryLink
);

card.append(
header,
category,
description,
technologies,
footer
);

return card;
}

function formatRepositoryName(name) {
return name
.replace(/[-_]+/g, ' ')
.replace(/\b\w/g, character =>
character.toUpperCase()
);
}

function showLoadingState(container) {
container.replaceChildren();

const loading =
document.createElement('p');

loading.className =
'loading';

loading.setAttribute(
'role',
'status'
);

loading.textContent =
'Loading projects from GitHub...';

container.appendChild(loading);
}

function showErrorState(
container,
error
) {
container.replaceChildren();

const message =
document.createElement('div');

message.className =
'error';

message.setAttribute(
'role',
'alert'
);

message.textContent =
`Unable to load projects: ${error.message}`;

container.appendChild(message);
}
