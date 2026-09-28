const GITHUB_USERNAME = '1244Matt1244';

const GITHUB_API_URL =
`https://api.github.com/users/${GITHUB_USERNAME}/repos`;

const REQUEST_TIMEOUT = 10000;

let repositories = [];
let activeCategory = 'All';
let activeTechnology = 'All';

document.addEventListener('DOMContentLoaded', () => {
initializeProjects();
});

async function initializeProjects() {
const container =
document.getElementById('repo-badges');

if (!container) {
return;
}

showLoading(container);

try {
repositories = await fetchRepositories();


renderFilters();
renderProjects();


} catch (error) {
console.error(error);
showError(container, error);
}
}

async function fetchRepositories() {
const controller =
new AbortController();

const timeout =
setTimeout(
() => controller.abort(),
REQUEST_TIMEOUT
);

try {
const response =
await fetch(
`${GITHUB_API_URL}?per_page=100&sort=updated`,
{
headers: {
Accept:
'application/vnd.github+json'
},
signal: controller.signal
}
);

if (!response.ok) {
  throw new Error(
    `GitHub API error: ${response.status}`
  );
}

const data =
  await response.json();

return data
  .filter(repo => !repo.fork)
  .sort((a, b) => {
    const aMeta =
      getProjectMetadata(a.name);

    const bMeta =
      getProjectMetadata(b.name);

    if (
      Boolean(aMeta.featured) !==
      Boolean(bMeta.featured)
    ) {
      return Boolean(bMeta.featured) ? 1 : -1;
    }

    return (
      new Date(b.updated_at) -
      new Date(a.updated_at)
    );
  });

} finally {
clearTimeout(timeout);
}
}

function renderFilters() {
renderCategoryFilters();
renderTechnologyFilters();
}

function renderCategoryFilters() {
const container =
document.getElementById(
'category-filters'
);

if (!container) {
return;
}

const categories = [
'All',
...new Set(
repositories.map(repo =>
getProjectMetadata(repo.name)
.category
)
)
];

container.replaceChildren();

categories.forEach(category => {
container.appendChild(
createFilterButton(
category,
activeCategory === category,
() => {
activeCategory = category;
renderFilters();
renderProjects();
}
)
);
});
}

function renderTechnologyFilters() {
const container =
document.getElementById(
'technology-filters'
);

if (!container) {
return;
}

const technologies = [
'All',
...new Set(
repositories.flatMap(repo =>
getProjectMetadata(repo.name)
.technologies
)
)
];

technologies.sort((a, b) => {
if (a === 'All') return -1;
if (b === 'All') return 1;

return a.localeCompare(b);

});

container.replaceChildren();

technologies.forEach(technology => {
container.appendChild(
createFilterButton(
technology,
activeTechnology === technology,
() => {
activeTechnology = technology;
renderFilters();
renderProjects();
}
)
);
});
}

function createFilterButton(
label,
active,
onClick
) {
const button =
document.createElement('button');

button.type = 'button';

button.className =
`filter-button${
      active ? ' is-active' : ''
    }`;

button.textContent = label;

button.setAttribute(
'aria-pressed',
String(active)
);

button.addEventListener(
'click',
onClick
);

return button;
}

function getFilteredRepositories() {
return repositories.filter(repo => {
const metadata =
getProjectMetadata(repo.name);

const categoryMatches =
  activeCategory === 'All' ||
  metadata.category ===
    activeCategory;

const technologyMatches =
  activeTechnology === 'All' ||
  metadata.technologies.includes(
    activeTechnology
  );

return (
  categoryMatches &&
  technologyMatches
);

});
}

function renderProjects() {
const container =
document.getElementById(
'repo-badges'
);

const counter =
document.getElementById(
'project-count'
);

if (!container) {
return;
}

const filtered =
getFilteredRepositories();

container.replaceChildren();

if (counter) {
counter.textContent =
`${filtered.length} ${
        filtered.length === 1
          ? 'project'
          : 'projects'
      }`;
}

if (filtered.length === 0) {
const empty =
document.createElement('p');

```
empty.className =
  'empty-state';

empty.textContent =
  'No projects match these filters.';

container.appendChild(empty);

return;

}

const fragment =
document.createDocumentFragment();

filtered.forEach(repo => {
fragment.appendChild(
createProjectCard(repo)
);
});

container.appendChild(fragment);
}

function createProjectCard(repo) {
const metadata =
getProjectMetadata(repo.name);

const card =
document.createElement('article');

card.className =
'project-card repo-badge';

const header =
document.createElement('div');

header.className =
'project-card__header';

const title =
document.createElement('h3');

const link =
document.createElement('a');

link.href =
repo.html_url;

link.target =
'_blank';

link.rel =
'noopener noreferrer';

link.textContent =
formatName(repo.name);

title.appendChild(link);

header.appendChild(title);

if (metadata.featured) {
const featured =
document.createElement('span');

featured.className =
  'project-card__featured';

featured.textContent =
  'Featured';

header.appendChild(featured);

}

const category =
document.createElement('p');

category.className =
'project-card__category';

category.textContent =
metadata.category;

const description =
document.createElement('p');

description.textContent =
repo.description ||
'Software development project.';

const tags =
document.createElement('div');

tags.className =
'project-card__meta';

metadata.technologies
.forEach(technology => {
const tag =
document.createElement('button');

  tag.type = 'button';

  tag.className =
    'project-card__tag';

  tag.textContent =
    technology;

  tag.addEventListener(
    'click',
    event => {
      event.preventDefault();

      activeTechnology =
        technology;

      renderFilters();
      renderProjects();
    }
  );

  tags.appendChild(tag);
});

const footer =
document.createElement('div');

footer.className =
'project-card__footer';

const language =
document.createElement('span');

language.textContent =
repo.language ||
'Multiple technologies';

const repositoryLink =
document.createElement('a');

repositoryLink.href =
repo.html_url;

repositoryLink.target =
'_blank';

repositoryLink.rel =
'noopener noreferrer';

repositoryLink.textContent =
'View project →';

footer.append(
language,
repositoryLink
);

card.append(
header,
category,
description,
tags,
footer
);

return card;
}

function formatName(name) {
return name
.replace(/[-_]+/g, ' ')
.replace(
/\b\w/g,
char => char.toUpperCase()
);
}

function showLoading(container) {
container.replaceChildren();

const loading =
document.createElement('p');

loading.className =
'loading';

loading.textContent =
'Loading projects from GitHub...';

container.appendChild(loading);
}

function showError(
container,
error
) {
container.replaceChildren();

const message =
document.createElement('p');

message.className =
'error';

message.textContent =
`Unable to load projects: ${error.message}`;

container.appendChild(message);
}
