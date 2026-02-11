function convertTemperature() {
    let tempInput = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let resultDiv = document.getElementById("result");

    // Validate input
    if (isNaN(tempInput) || tempInput === "") {
        resultDiv.innerHTML = "Please enter a valid number!";
        return;
    }

    tempInput = parseFloat(tempInput);
    let celsius, fahrenheit, kelvin;

    if (unit === "C") {
        celsius = tempInput;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
    } else if (unit === "F") {
        fahrenheit = tempInput;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else if (unit === "K") {
        kelvin = tempInput;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }

    resultDiv.innerHTML = `
        <div class="result-card">
            <div class="label">Celsius</div>
            <div class="value">${celsius.toFixed(2)} °C</div>
        </div>
        <div class="result-card">
            <div class="label">Fahrenheit</div>
            <div class="value">${fahrenheit.toFixed(2)} °F</div>
        </div>
        <div class="result-card">
            <div class="label">Kelvin</div>
            <div class="value">${kelvin.toFixed(2)} K</div>
        </div>
    `;
}
