document.addEventListener('DOMContentLoaded', function() {
    const toggleTheme = document.getElementById('toggle-theme');

    function setTheme(isNightMode) {
        document.body.classList.toggle('night-mode', isNightMode);
        toggleTheme.checked = isNightMode;
        localStorage.setItem('nightMode', isNightMode);
    }

    const savedNightMode = localStorage.getItem('nightMode') === 'true';
    setTheme(savedNightMode);

    toggleTheme.addEventListener('change', () => {
        setTheme(toggleTheme.checked);
    });
});
