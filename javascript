fetch('https://api.github.com/users/1244Matt1244/repos')
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const badge = `
        <div class="repo-badge">
          <h3>${repo.name}</h3>
          <img src="https://img.shields.io/tokei/lines/github/1244Matt1244/${repo.name}">
          <img src="https://github.com/1244Matt1244/${repo.name}/actions/workflows/tests.yml/badge.svg">
        </div>
      `;
      document.getElementById('badges-container').innerHTML += badge;
    });
  });
