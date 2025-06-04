const batteries = [
    {
        name: 'Lithium-Ion',
        color: '#e0f7e9',
        features: 'High energy density, long cycle life',
        image: "lithiumion-liion-battery-principle-power-600w-2450211605.webp"
    },
    {
        name: "Solid-State",
        color: '#e6f0ff',
        features: "Emerging tech, safer, higher density",
        image:"Schematic-diagram-of-solid-state-battery-containing-solid-electrolyte-and-the-basic.png"
    },
    {
        name: "Nickel-Metal Hydride",
        color: '#fff9e6',
        features: "Used in hybrids, durable",
        image: "Parameters-of-Nickel-Metal-Hydride-NiMH-battery-H-Chen-et-al-2019-Koohi-Fayegh.png"
    },
    {
        name: "Lead-Acid",
        color: "#f3e5f5",
        features: 'Low cost, bulky, older tech',
        image: '1695864068-normal-lead-acid-batteries.jpg'
    },
    {
        name: "Ultracapacitors",
        color: "#f4f4f4",
        features: "Ultracapacitors	Very high power density, low energy",
        image:'Ultracapacitor-principle.webp'
    },
    {
        name: "Lithium Iron Phosphate",
        color: "#ffe5e0",
        features: "Thermal stability, safe chemistry",
        image:"lifepo4-cell-diagram.webp"
    }
]
const container = document.getElementById("battery-container")
batteries.forEach(battery=>{
    const card = document.createElement("div")
    card.className = 'card'
    card.style.backgroundColor = battery.color

    const title = document.createElement('h3')
    title.textContent = battery.name

    const description = document.createElement("p")
    description.className = 'description'
    description.textContent = battery.features
    
    const image = document.createElement('img')
    image.src = battery.image
    image.alt = battery.name
    image.className = 'battery-image'
    card.appendChild(title)
    card.appendChild(description)
    container.appendChild(card)
    card.appendChild(image)
     card.addEventListener("click", () => {
    card.classList.toggle("active");
  })
})
const toggleBtn = document.getElementById("dark-mode-toggle")
const body = document.body

function toggleDarkMode(){
    body.classList.toggle("dark-mode")
}
toggleBtn.addEventListener('click', toggleDarkMode)