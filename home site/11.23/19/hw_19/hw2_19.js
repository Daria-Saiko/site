
function quadratic_equation() {
  let sol = document.getElementById("qe_sol");
  let height = Number(document.qef.money.value);

  let num;
  let num1 = +prompt("Введіть число, від 0 до 100", 0);
  let num2 = +prompt("Введіть число, від 0 до 100", 100);
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
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
      break;
    }
    steps += 1;
  } while ((num < x && num != null) || (num > x && num != null));


  sol.innerHTML = "<p>" + step + "</p>";

}