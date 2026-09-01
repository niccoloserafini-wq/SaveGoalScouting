function calculateBMI() {
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const bmiValueElem = document.getElementById('bmi-value');
    const bmiStatusElem = document.getElementById('bmi-status');

    if (heightInput > 0 && weightInput > 0) {
        const heightInMeters = heightInput / 100;
        const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(1);

        bmiValueElem.textContent = bmi;

        // Classificazione rapida del BMI
        if (bmi < 18.5) {
            bmiStatusElem.textContent = "Sottopeso";
            bmiStatusElem.style.color = "#d97706";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiStatusElem.textContent = "Normopeso (Ottimale)";
            bmiStatusElem.style.color = "#16a34a";
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiStatusElem.textContent = "Sovrappeso";
            bmiStatusElem.style.color = "#d97706";
        } else {
            bmiStatusElem.textContent = "Fuori Parametro";
            bmiStatusElem.style.color = "#dc2626";
        }
    } else {
        bmiValueElem.textContent = "--";
        bmiStatusElem.textContent = "";
    }
}

// Esegui il calcolo al caricamento
document.addEventListener("DOMContentLoaded", calculateBMI);