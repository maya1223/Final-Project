const title = document.createElement('h3');
    title.textContent = battery.name;

    const description = document.createElement("p");
    description.className = 'description';
    description.textContent = battery.features;

    card.appendChild(title);
    card.appendChild(description);
    container.appendChild(card);

    card.addEventListener("click", () => {
        // Close other active cards
        document.querySelectorAll('.card.active').forEach(c => {
            if (c !== card) c.classList.remove('active');
        });
        card.classList.toggle("active");
    });
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
