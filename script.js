function initializePage() {
    document.getElementById("result").innerHTML = "";
}

function convertTemp() {
    let input = document.getElementById("tempInput").value;
    let direction = document.querySelector('input[name="direction"]:checked').value;

    // Validation: numeric?
    if (isNaN(input) || input.trim() === "") {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
        return;
    }

    let temp = parseFloat(input);

    // Sensible range check (-200 to 200)
    if (temp < -200 || temp > 200) {
        document.getElementById("result").innerHTML = "Temperature out of sensible range.";
        return;
    }

    let converted;

    if (direction === "toC") {
        converted = (temp - 32) * 5/9;
        document.getElementById("result").innerHTML =
            temp + "°F = " + converted.toFixed(2) + "°C";
    } else {
        converted = (temp * 9/5) + 32;
        document.getElementById("result").innerHTML =
            temp + "°C = " + converted.toFixed(2) + "°F";
    }
}
