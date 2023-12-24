function findLetter(letter) {
    const alphabet = ["а", "б", "в", "г", "ґ", "д", "е", " є", "ж",
        "з", "и", "і", "ї", "й", "к", "л", "м", "н",
        "о", "п", "р", "с", "т", "у", "ф", "х", "ц",
        "ч", "ш", "щ", "ь", "ю", "я"];
    letter = letter.toLowerCase();

    const index = alphabet.indexOf(letter);

    if (index !== -1) {
        return `Буква "${letter}" найдена в алфавите. Индекс: ${index + 1}`;
    } else {
        return `Буква "${letter}" не найдена в алфавите.`;
    }
}
function quadratic_equation() {
    let sol = document.getElementById("qe_sol");
    let letter = document.qef.money.value;
    const result = findLetter(letter);
    sol.innerHTML = result;

}
