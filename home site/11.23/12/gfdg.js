function quadratic_equation() {
	let a = document.qef.a.value;
	let b = document.qef.b.value;
	let c = document.qef.c.value;
	let sol = document.getElementById("qe_sol");

	let D, x1, x2; // змінні
	D = b ** 2 - 4 * a * c; // загальна формула дискрімінанту
	x1 = (-b + Math.sqrt(D)) / (2 * a); // перший корінь квадратного рівняння
	x2 = (-b - Math.sqrt(D)) / (2 * a); // другий корінь квадратного рівняння
	if (D > 0) {

		string = "x1 = " + x1 + " x2 = " + x2 // вивід значення

	}
	else if (D == 0) {
		string = "x = " + x1; // вивід значення
	} // else if D == 0
	else {
		string = "квадратне рівняння коренів не має!";
	} // else (D < 0)


	sol.innerHTML = string;
}