function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function loadTheme() {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("dark-mode-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleDarkMode);
    }
    loadTheme();
});
// video.js
document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');
    const filter = document.getElementById('battery-filter');
    const watchedVideos = JSON.parse(localStorage.getItem('watchedVideos') || '{}');

    // Initialize watched state
    document.querySelectorAll('.video-card').forEach(card => {
        const videoId = card.querySelector('iframe').src;
        const button = card.querySelector('.watch-toggle');
        if (watchedVideos[videoId]) {
            button.classList.add('watched');
            button.textContent = 'Watched';
        }
        button.addEventListener('click', () => {
            const isWatched = button.classList.toggle('watched');
            button.textContent = isWatched ? 'Watched' : 'Mark as Watched';
            watchedVideos[videoId] = isWatched;
            localStorage.setItem('watchedVideos', JSON.stringify(watchedVideos));
        });
    });

    // Filter videos
    filter.addEventListener('change', () => {
        const selectedType = filter.value;
        document.querySelectorAll('.video-card').forEach(card => {
            const batteryType = card.getAttribute('data-battery');
            card.style.display = (selectedType === 'all' || batteryType === selectedType) ? 'block' : 'none';
        });
    });
});