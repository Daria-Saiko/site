//1

// alert(Math.floor(5.4)); // 5
// alert(Math.ceil(5.4)); // 6
// alert(Math.round(5.4)); // 5
// 2

// let n = 15.3626;
// alert(n.toFixed(1)); // "15.4"
// alert(n.toFixed(2)); // "15.36"
// alert(n.toFixed(3)); // "15.363"
// alert(n.toFixed(5)); // "15.36260"

//3

// let result = 0.1 + 0.2;
// alert( +result.toFixed(1) ); // 0.3

//4

// let x = prompt("Введіть будь-яке значення:", "-3.14");
// while (isNaN(x)) {
//   x = prompt("Введіть будь-яке число:", "-3.14");
// }

// document.write(`Ви ввели число ${x}`);

//4

// let x1 = +prompt("Введіть будь-яке значення від 0 до 1:", "0.5");
// let x2 = +prompt("Введіть будь-яке значення від 0 до 1:", "0.5");
// if (x1 < 1 && x1 > 0 && x2 < 1 && x2 > 0) {
//   document.write(`<p> ${x1} + ${x2} = ${(x1 + x2).toFixed(1)} </p>`);
// } else {
//   document.write(`<p>Введені неправильні числа </p>`);
// }

//5

let num;
let min = +prompt("min?", 0);
let max = +prompt("max?", 100);
let x = Math.round(min + Math.random() * (max - min));
let steps = 1;
do {
  num = prompt("Введіть число, від 0 до 100", 0);
  if (num === null) {
    alert("До побачення!");
  } else if (num < x) {
    alert("Ваше число менше");
  } else if (num > x) {
    alert("Ваше число ,більше");
  } else {
    alert("Ви вгадали " + num);
    alert(steps);
  }
  steps += 1;
} while ((num < x && num != null) || (num > x && num != null));
