function calculateSummary() {
    const semester1 = parseFloat(document.getElementById('semester1').value);
    const semester2 = parseFloat(document.getElementById('semester2').value);
    const year = parseInt(document.getElementById('year').value);
    
    if (isNaN(semester1) || isNaN(semester2)) {
        alert("Please enter valid numbers for both semesters.");
        return;
    }

    // Calculating the summary average
    const summary = (semester1 + semester2 * year)/ (year + 1) ;
    document.getElementById('summary').value = summary.toFixed(2);

    // Displaying the result based on the summary score
    const resultText = document.getElementById('resultText');
    if (summary >= 8) {
        resultText.textContent = "Hoc sinh gioi";
        resultText.style.color = 'red';
    } else if (summary >= 6.5) {
        resultText.textContent = "Hoc sinh kha";
        resultText.style.color = 'blue';
    } else if (summary >= 5) {
        resultText.textContent = "Hoc sinh trung binh";
        resultText.style.color = 'green';
    }else {
        resultText.textContent = "Hoc sinh yeu";
        resultText.style.color = 'grey';
    }

    resultText.style.visibility = 'visible';
}
