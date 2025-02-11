// task 3.1 Створити репозиторій із файлом index.html.
// Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log

	let x = 5;
	let y;
	let str = 'abc';
	let fact = x > y;
	const showDate=(null);


	console.log(typeof x);
	console.log(typeof y);
	console.log(typeof str);
	console.log(typeof fact);
	console.log(showDate);
	

	

// task 3.2 Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (шаблонні рядки);

	let name = prompt('what`s your name:');
	let sex = prompt('what`s your gender:');
	let userAge = prompt('your age:');
	let message = `Привіт, мене звати ${name} моя стать ${sex} і мені ${userAge} років.`;
	console.log(message);

// task 3.3(10369) Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:10369


{
	let value = 10369;

	const nine = value%10;

	value = (value - nine)/10;
	
	const six = value%10;

	value = (value - six)/10;

	const three = value%10;

	value = (value - three)/10;

	const zero = value%10;

	value = (value - zero)/10;

	console.log(value, zero, three, six, nine);

	 // Результат: '1 0 3 6 9'


}