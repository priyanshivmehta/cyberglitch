document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('weightForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        calculateWeightOnMercury();
    });
});

function calculateWeightOnMercury() {
    const weightOnEarth = document.getElementById('weight').value;
    const mercuryGravity = 0.38; // Mercury's gravity relative to Earth's
    const weightOnMercury = weightOnEarth * mercuryGravity;
    document.getElementById('result').innerText = `OOPS! THINK WE JUST GOT BURNT`;
}