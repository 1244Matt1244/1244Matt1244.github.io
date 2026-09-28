```javascript id="w8j3kc"
const THEME_STORAGE_KEY = 'portfolio-theme';

document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
});

/**
 * Initializes the portfolio theme.
 */
function initializeTheme() {
  const toggle = document.getElementById('theme-toggle');

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme =
    savedTheme ||
    (systemPrefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (!toggle) {
    return;
  }

  updateThemeButton(toggle, initialTheme);

  toggle.addEventListener('click', () => {
    const currentTheme =
      document.documentElement.dataset.theme || 'light';

    const nextTheme =
      currentTheme === 'dark' ? 'light' : 'dark';

    applyTheme(nextTheme);
    updateThemeButton(toggle, nextTheme);
  });
}

/**
 * Applies a theme to the document.
 */
function applyTheme(theme) {
  const normalizedTheme =
    theme === 'dark' ? 'dark' : 'light';

  document.documentElement.dataset.theme = normalizedTheme;

  localStorage.setItem(
    THEME_STORAGE_KEY,
    normalizedTheme
  );
}

/**
 * Updates the accessible theme toggle label.
 */
function updateThemeButton(button, theme) {
  const isDark = theme === 'dark';

  button.setAttribute(
    'aria-label',
    isDark
      ? 'Switch to light mode'
      : 'Switch to dark mode'
  );

  button.setAttribute(
    'aria-pressed',
    String(isDark)
  );

  button.textContent =
    isDark ? '☀ Light mode' : '🌙 Dark mode';
}
```
