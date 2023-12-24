// 1
// let programmingLanguages = `Мови програмування:
//  * JavaScript
//  * Python
//  * Go
// `;
// alert(programmingLanguages);

// 2
// let programmingLanguages =`Мови програмування: \n * JavaScript \n * Python\n * Go`;
// alert(programmingLanguages);

// 3
// let programmingLanguages = `Мови програмування:
//  \u058D JavaScript
//  \u058D Python
//  \u058D Go
// `;
// alert(programmingLanguages);

// 4

//  let name = "Superman";
// alert( name.charAt(0) ); // "S"
// alert( name[5] );

//5
// let str = "у дворі трава на траві дрова";
// alert(str.indexOf("трав")); // 8
// alert(str.indexOf("у")); // 0, тому, що "у" зустрінеться на самому початку рядка
// alert(str.indexOf("трав", 9));

//6
// let str = "у дворі трава на траві дрова";
// alert(str.substring(2, 6)); // «двор»
// alert(str.substr(2, 6)); // «дворі »
// alert(str.slice(2, -6)); // «дворі трава на траві»

//7
// let userName = prompt("Введіть ім'я", 0);
// let firstLater = userName.charAt(0);
// firstLater = firstLater.toUpperCase();
// alert(firstLater + userName.slice(1));

//8
// function bigOne(str) {
//   // Порожній рядок під час такої перевірки дає 0
//   if (str.charAt(0) == 0)
//     return (erCase() + sstr = "Прохання, не вводьте порожніх рядків ");
//   return str[0].toUpptr.slice(1); // тут ми перестворимо рядок
// }
// let strInBigOne = prompt("Введіть рядок", "ім'я пишеться з великої літери");
// alert(bigOne(strInBigOne));

//9
// let str = "Україна";
// if (~str.indexOf("країна")) {
//   alert("співпадіння є!");
// }

//10
// function spamCheck(text) {
//   text = text.toLowerCase();
//   if (~text.indexOf("безкоштовн") || ~text.indexOf("гаран")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let text = prompt("Введіть текст", "гарантія");
// alert(spamCheck(text));

//11
function spamCheck(text, Check) {
  let numberWords = 0;
  while (userName.charAt(0) !== "-1") {
    if (~text.indexOf(Check)) {
      numberWords += 1;
    }
  }
}
let text = "бредуть бобри в сирі бори.бобри хоробрі, а для бобрят добрі";
let Check = prompt("Введіть текст", "ри");
alert(spamCheck(text, Check));
