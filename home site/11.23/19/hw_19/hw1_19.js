function quadratic_equation() {
    let sol = document.getElementById("qe_sol");
    let sol2 = document.getElementById("qe_sol2");

    const [randomNum1, randomNum2] = generateTwoRandomNumbers();
    sol.innerHTML = `<p> Два випадкових числа: ${randomNum1} і ${randomNum2} </p>`;
    const intervalMin = Math.min(randomNum1, randomNum2);
    const intervalMax = Math.max(randomNum1, randomNum2);
    const threeRandomNumbers = generateThreeRandomNumbersInRange(intervalMin, intervalMax);
    sol2.innerHTML = `<p> Три випадкових числа в інтервалі [${intervalMin}, ${intervalMax}]: ${threeRandomNumbers} </p>`;
}
function generateTwoRandomNumbers() {
    const min = 10;
    const max = 99;
    const randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    return [randomNum1, randomNum2];
}
function generateThreeRandomNumbersInRange(min, max) {
    const randomNum1 = Math.floor(Math.random() * (max - min - 1)) + min + 1;
    const randomNum2 = Math.floor(Math.random() * (max - min - 1)) + min + 1;
    const randomNum3 = Math.floor(Math.random() * (max - min - 1)) + min + 1;
    return [randomNum1, randomNum2, randomNum3];
}
