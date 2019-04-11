// Числа від 0 до 100
let input = 0;
while (input <= 100 && input!=null) {
	input = prompt("Введіть число", '');
	if (input > 100) {
		alert('Файно');
	}
}


// Парні числа від 2 до 20
for (let i = 2; i <= 20; i++) {
	if (i % 2 == 0) {
		console.log( i );
	}
}


// Числа Фбаначчі від 0 до 100
var a = 0;
var b = 1;
console.log(a);
console.log(b);
for (var i = 3; i <= 12; i++) {
	var c = a + b;	
	a = b;
	b = c;
	console.log(b);
}
