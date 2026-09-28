javascript id="n5w7rx"
document.addEventListener('DOMContentLoaded', () => {
  initializeExternalLinks();
});

/**
 * Adds safe external-link attributes to external links.
 */
function initializeExternalLinks() {
  const links = document.querySelectorAll(
    'a[target="_blank"]'
  );

  links.forEach(link => {
    link.setAttribute(
      'rel',
      'noopener noreferrer'
    );
  });
}

