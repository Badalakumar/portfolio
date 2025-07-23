function appendValue(value) {
            const display = document.getElementById('display');
            if (display.value === "0" || display.value === "Error") {
                display.value = value; // Replace if the display shows 0 or an error
            } else {
                display.value += value; // Append to the current value
            }
        }

        function clearDisplay() {
            document.getElementById('display').value = "0";
        }

        function calculate() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value) || "0"; // Evaluate the input
            } catch (e) {
                display.value = "Error"; // Handle invalid input
            }
        }