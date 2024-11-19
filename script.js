const form = document.querySelector('form')
// this use case wiil give empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector('#result')
    const weight_guide = document.querySelector('#weight-guide')


    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid height ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            weight_guide.innerHTML = `${bmi}, whichi is under wei`
        } else if (bmi > 18.6 && bmi < 24.9) {
            weight_guide.innerHTML = `<span> normal weight </span>`
        } else {
            weight_guide.innerHTML = `<span> overweight</span>`
        }
    }
})