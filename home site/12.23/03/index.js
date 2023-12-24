// let numbers = ["Нуль", "Один", "Два"];
// alert(numbers[0]); // Нуль
// alert(numbers[1]); // Один
// alert(numbers[2]); // Два
// numbers[2] = "не два"; // тепер ["Нуль", "Один", "не два"]
// alert(numbers);
// numbers[3] = "Три"; // тепер ["Нуль", "Один", "не два", "Три"]
// alert(numbers);

//2
// let array = [];
// array[87] = true;
// alert(array.length);

//3
// let numbers = ['Нуль', 'Один', 'Два'];
// numbers.pop(); // видалили два
// alert(numbers);
// numbers.push('Нове два'); // Додали нове два
// alert(numbers);
// numbers.shift(); // видалили нуль
// alert(numbers);
// numbers.unshift('Новий нуль'); // додали новий нуль
// alert(numbers);

//4

// let array2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// alert(array2D[1][0]);

//5
// let colors = ['yellow', 'blue'];
// alert(colors);
// colors.push('red');
// alert(colors);
// colors[colors.length - 2] = "black";
// alert(colors);
// colors.shift();
// alert(colors);
// colors.unshift('orange', 'green');
// alert(colors);

//6

// let compliments = ["cute", "clever", "smart", "kind", "generous", "friendly", "honest", "brave", "wolf"]
// let animals = ["fox", "frog", "wolf", "dog", "cat", "kangaroo", "rabbit", "elephant", "crocodile", "lion", "monkey", "tiger", "lynx", "bear", "cheetah"]
// let repeats = +prompt("Enter number of compliments", "5")
// for (let i = 1; i <= repeats; i++) {
//     let rand1 = Math.floor(Math.random() * compliments.length);
//     let rand2 = Math.floor(Math.random() * animals.length);
//     document.write("<p>" + i + ") you're so " + compliments[rand1] + " as " + animals[rand2] + "</p>");
// }

//7
// function letterSearch(letter) {
//     let position = 0;
//     const occurrences = [];

//     while (position !== -1) {
//         position = mainString.indexOf(searchString, position);
//         if (position !== -1) {
//             occurrences.push(position);
//             position += 1;
//         }
//     }

//     return occurrences;
// }

// let letters = ["а", "б", "в", "г", "ґ", "д", "е", " є", "ж",
//     "з", "и", "і", "ї", "й", "к", "л", "м", "н",
//     "о", "п", "р", "с", "т", "у", "ф", "х", "ц",
//     "ч", "ш", "щ", "ь", "ю", "я"];
// let letter = prompt("Enter number of compliments", "е")
// document.write(letterSearch(letter))

