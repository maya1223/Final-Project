const batteries = [
    {
        name: 'Lithium-Ion',
        color: '#e0f7e9',
        features: 'High energy density, long cycle life'
    },
    {
        name: "Solid-State",
        color: '#e6f0ff',
        features: "Emerging tech, safer, higher density"
    },
    {
        name: "Nickel-Metal Hydride",
        color: '#fff9e6',
        features: "Used in hybrids, durable"
    },
    {
        name: "Lead-Acid",
        color: "#f3e5f5",
        features: 'Low cost, bulky, older tech'
    },
    {
        name: "Ultracapacitors",
        color: "#f4f4f4",
        features: "Very high power density, low energy"
    },
    {
        name: "Lithium Iron Phosphate",
        color: "#ffe5e0",
        features: "Thermal stability, safe chemistry"
    }
];

const container = document.getElementById("battery-container");
batteries.forEach(battery => {
    const card = document.createElement("div");
    card.className = 'card';
    card.style.backgroundColor = battery.color;

    const title = document.createElement('h3');
    title.textContent = battery.name;

    const description = document.createElement("p");
    description.className = 'description';
    description.textContent = battery.features;

    card.appendChild(title);
    card.appendChild(description);
    container.appendChild(card);

    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
