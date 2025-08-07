function applyTheme(themeName) {
    document.body.className = themeName;
    sessionStorage.setItem('theme', themeName); // persist theme across pages in the same tab
}

window.onload = () => {
    const savedTheme = sessionStorage.getItem('theme') || 'theme-original';
    applyTheme(savedTheme);
};

/*
function applyTheme(themeName) {
            document.body.className = themeName;
            localStorage.setItem('theme', themeName);
        }

        // Load saved theme on page load
        window.onload = () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                document.body.className = savedTheme;
            }
        };
*/