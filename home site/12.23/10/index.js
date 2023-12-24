//1

// human = new Object();
// human.name = "В'ячеслав";
// human.age = 34;
// human.gender = "Male";

// document.writeln(human["age"]); // => 34
// human = new Object();
// human.name = "В'ячеслав";
// human.gender = 'Male';

// document.writeln(human['gender']); //  'Male'
// delete human['gender'];
// document.writeln(human['gender']); //  undefined

//2
// human = new Object();
// human.name = `В'ячеслав`;
// human.age = 34;
// human.gender = 'Male';
// human.greet = function (personName) {
//     return this.name + ': Радий Вас бачити, ' + personName + '!'
// }
// // давайте перевіримо наш метод «привіт» для об'єкта «людина»
// document.writeln(human.greet('Катерина'));
// document.writeln(human.greet('Олег'));

//3

// let menu = {
//     width: 300,
//     height: 200,
//     title: "Menu",
// };
// for (let key in menu) {
//     // цей код буде викликаний для кожної властивості об’єкту
//     // ..та виведе назву властивості та її значення
//     alert("Ключ: " + key + " значення: " + menu[key]);
// }

//4

// let menu = {
//     width: 300,
//     height: 200,
//     title: "Menu",
// };
// let counter = 0;
// for (let key in menu) {
//     counter++;
// }
// alert("Всього властивостей: " + counter);

//5

// let codes = {
//     // телефонні коди в форматі "код країни": "назва "
//     "+38": "Україна",
//     "+44": "Велика Британія",
//     // ..,
//     "+1": "США"
// };
// for (let code in codes) {
//     let value = codes[code];
//     code = +code; // ..якщо нам необохідне саме число то перетворюємо: "+38" -> 38
//     document.writeln(code + ": " + value); // 38, 44, 1 у всіх браузерах
// }

//6

// let salaries = {
//     "Василь": 10000,
//     "Петро": 30000,
//     "Дарина": 25000
// };
// let value = 0;
// let max = 0;
// for (let kay in salaries) {
//     value = salaries[kay];
//     res += value;
// }

// document.writeln(res);

//7

// let salaries = {
//     "Василь": 10000,
//     "Петро": 30000,
//     "Дарина": 25000
// };
// let max = 0;
// let maxName = 0;
// for (let key in salaries) {
//     if (max < salaries[key]) {
//         max = salaries[key];
//         maxName = key;
//     }
// }
// document.writeln(maxName);

//8

let canvas = document.getElementById("rects");
let cxt = canvas.getContext("2d");
canvas.height = 200;
canvas.width = 300;
cxt.fillStyle = "rgb(200, 0, 0)";
cxt.fillRect(15, 15, 100, 100);
cxt.fillStyle = "rgb(0, 200, 0)";
cxt.fillRect(30, 30, 100, 100);
cxt.fillStyle = "rgb(0, 0, 200)";
cxt.fillRect(45, 45, 100, 100);
