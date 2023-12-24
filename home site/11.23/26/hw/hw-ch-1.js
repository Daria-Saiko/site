function spamCheck(text) {
    text = text.toLowerCase();
    if (~text.indexOf("безкоштовн") || ~text.indexOf("гаран")) {
        return true;
    } else {
        return false;
    }
}
let text = prompt("Введіть текст", "гарантія");
alert(spamCheck(text));