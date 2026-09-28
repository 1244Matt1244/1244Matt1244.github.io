const THEME_STORAGE_KEY = 'portfolio-theme';

document.addEventListener('DOMContentLoaded', () => {
initializeTheme();
});

function initializeTheme() {
const toggle = document.getElementById('theme-toggle');

let savedTheme = null;

try {
savedTheme = localStorage.getItem(
THEME_STORAGE_KEY
);
} catch (error) {
console.warn(
'Unable to access localStorage:',
error
);
}

const systemPrefersDark =
window.matchMedia &&
window.matchMedia(
'(prefers-color-scheme: dark)'
).matches;

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
document.documentElement.dataset.theme ||
'light';

const nextTheme =
  currentTheme === 'dark'
    ? 'light'
    : 'dark';

applyTheme(nextTheme);
updateThemeButton(toggle, nextTheme);

});
}

function applyTheme(theme) {
const normalizedTheme =
theme === 'dark'
? 'dark'
: 'light';

document.documentElement.dataset.theme =
normalizedTheme;

try {
localStorage.setItem(
THEME_STORAGE_KEY,
normalizedTheme
);
} catch (error) {
console.warn(
'Unable to save theme preference:',
error
);
}
}

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
isDark
? '☀ Light mode'
: '🌙 Dark mode';
}
