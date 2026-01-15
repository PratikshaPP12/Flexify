function showResult(bmi) {
    var result = document.querySelector('.result');
    var bmiStatus;
    if (bmi < 18.5) {
        bmiStatus = 'Underweight';
    } else if (bmi < 25) {
        bmiStatus = 'Normal';
    } else if (bmi < 30) {
        bmiStatus = 'Overweight';
    } else {
        bmiStatus = 'Obese';
    }
    result.innerHTML = `<div class=${bmiStatus}>Your BMI is ${bmi.toFixed(2)} and you are ${bmiStatus}.</div>`;
    localStorage.setItem('bmiResult', bmiStatus);
    window.location.href = 'exercise.html';
}