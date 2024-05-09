<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>    
    <!-- Input field for the first number -->
    <input type="number" id="numberA" placeholder="Enter first Number">
    <!-- The 'type="number"' allows only numerical input -->
    <!-- 'id="numberA"' is used to uniquely identify this input field for JavaScript interactions -->

    <!-- Input field for the second number -->
    <input type="number" id="numberB" placeholder="Enter second Number">
    <!-- Similar to the first input, but stores the second number -->

    <!-- Button to trigger the sum calculation -->
    <button onclick="calculateSum()">Calculate Sum</button>
    <!-- 'onclick' is an event listener that triggers 'calculateSum()' function defined in the script when clicked -->

    <!-- Paragraph to display the result -->
    <p id="result">Result</p>
    <!-- Initially shows the text 'Result', but will be updated with the actual result after calculation -->

    <!-- JavaScript code embedded within the HTML document -->
    <script>
        // Function to sum two numbers
        function sumNumbers(a, b) {
            return a + b; // Returns the addition of a and b
        }

        // Function called when the button is clicked
        function calculateSum() {
            var numA = parseFloat(document.getElementById('numberA').value); // Retrieves and converts the first number from string to float
            var numB = parseFloat(document.getElementById('numberB').value); // Retrieves and converts the second number from string to float
            var result = sumNumbers(numA, numB); // Calls sumNumbers to calculate the sum
            document.getElementById('result').innerHTML = result; // Updates the 'result' paragraph with the calculated sum
        }
    </script>
</body>
</html>
