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
var fib = [0,1];

console.log(fib[0]);

console.log(fib[1]);

for (let i = 2;;i++) {

	fib[i] = fib[i-1] + fib[i-2];	

	if (fib[i] < 100) {
		console.log(fib[i]);
	} else break;
}
