function quadratic_equation() {
    let a = document.qef.a.value;
    let sol;

    let compliments = ["cute", "clever", "smart", "kind", "generous", "friendly", "honest", "brave", "wolf"]
    let animals = ["fox", "frog", "wolf", "dog", "cat", "kangaroo", "rabbit", "elephant", "crocodile", "lion", "monkey",
        "tiger", "lynx", "bear", "cheetah"]
    let colors = ['#FFD700', '#FFFF00', '#BDB76B', '#6A5ACD', '#BC8F8F', '#A52A2A', '#1E90FF', '#7B68EE', '#808080'];


    for (let i = 1; i <= a; i++) {
        let rand1 = Math.floor(Math.random() * compliments.length);
        let rand2 = Math.floor(Math.random() * animals.length);
        let rand3 = Math.floor(Math.random() * colors.length);
        let sol = document.getElementById("qe_sol");
        sol.innerHTML = `<div class="compliment" style="color: ${colors[rand3]}"> you're so ${compliments[rand1]}  as ${animals[rand2]} </div>`
        sol = document.getElementById("qe_sol");
    }
}