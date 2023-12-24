//function quadratic_equation() {
//let n = document.qef.n.value;
//let result = 1;
// let sol = document.getElementById("qe_sol");
let result = 1;
let n = 5;
if (n < 0 || n % 1 !== 0) {
  string = "Факторіал визначений тільки для не від'ємних цілих чисел";
} else {
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  }
}
alert(result);
// string = "Факторіал" + n + "дорівнює" + factorial(n);
/// sol.innerHTML = string;
//}
