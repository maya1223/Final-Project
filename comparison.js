const batteryData = {
    'Lithium-Ion': {
        energyDensity: 250,
        cycleLife: 1000,
        cost: 150
    },
    'Solid-State': {
        energyDensity: 400,
        cycleLife: 1500,
        cost: 300
    },
    'Nickel-Metal Hydride': {
        energyDensity: 80,
        cycleLife: 800,
        cost: 200
    },
    'Lead-Acid': {
        energyDensity: 40,
        cycleLife: 300,
        cost: 100
    },
    'Ultracapacitors': {
        energyDensity: 10,
        cycleLife: 100000,
        cost: 500
    },
    'Lithium Iron Phosphate': {
        energyDensity: 150,
        cycleLife: 2000,
        cost: 120
    }
};

function updateComparison() {
    const battery1 = document.getElementById('battery1').value;
    const battery2 = document.getElementById('battery2').value;
    const resultDiv = document.getElementById('comparison-result');

    if (battery1 === battery2) {
        resultDiv.innerHTML = '<p>Please select two different batteries to compare.</p>';
        return;
    }

    const data1 = batteryData[battery1];
    const data2 = batteryData[battery2];

    resultDiv.innerHTML = `
        <div class="comparison-card">
            <h3>${battery1}</h3>
            <p><span class="metric-label">Energy Density:</span> ${data1.energyDensity} Wh/kg</p>
            <p><span class="metric-label">Cycle Life:</span> ${data1.cycleLife} cycles</p>
            <p><span class="metric-label">Cost:</span> $${data1.cost}/kWh</p>
        </div>
        <div class="comparison-card">
            <h3>${battery2}</h3>
            <p><span class="metric-label">Energy Density:</span> ${data2.energyDensity} Wh/kg</p>
            <p><span class="metric-label">Cycle Life:</span> ${data2.cycleLife} cycles</p>
            <p><span class="metric-label">Cost:</span> $${data2.cost}/kWh</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const battery1Select = document.getElementById('battery1');
    const battery2Select = document.getElementById('battery2');

    if (battery1Select && battery2Select) {
        battery1Select.addEventListener('change', updateComparison);
        battery2Select.addEventListener('change', updateComparison);
        updateComparison(); // Initial comparison
    }
});