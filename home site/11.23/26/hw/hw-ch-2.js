function logIn(mainString, searchString) {
    let position = 0;
    const occurrences = [];

    while (position !== -1) {
        position = mainString.indexOf(searchString, position);
        if (position !== -1) {
            occurrences.push(position);
            position += 1;
        }
    }

    return occurrences;
}

function quadratic_equation() {
    const stringToSearch = "бредуть бобри в сирі бори. бобри хоробрі, а для бобрят добрі";
    const searchString = "ри";
    let sol = document.getElementById("qe_sol");
    const result = logIn(stringToSearch, searchString);
    sol.innerHTML = "Positions of occurrences: " + result;
}