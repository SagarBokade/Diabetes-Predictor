document.getElementById('prediction-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const age = document.querySelector('input[name="age"]').value;
    const glucose = document.querySelector('input[name="glucose"]').value;
    // Add other form fields here

    const data = { age: age, glucose: glucose };
    
    fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ features: Object.values(data) })
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('result').textContent = `Prediction: ${result.prediction}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
