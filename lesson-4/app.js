	//	______________________HOME WORK

	//1. За допомогою prompt запитати “ім'я користувача”. За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

// let name = prompt(`What is you name?`);
// alert(`Hello, ${name}! How are you?`);

	// 2. Дано тризначне число, яке надае користувач, потрiбно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

// let namberDigital = parseInt(prompt(`enter three values`));
// let nth3 = namberDigital % 10;
// namberDigital = (namberDigital - nth3)/10;
// let nth2 = namberDigital % 10;
// namberDigital = (namberDigital - nth2)/10;
// let nth1 = namberDigital % 10;
// namberDigital = (namberDigital - nth1)/10;
// if((nth1 === nth2) && (nth2 === nth3) && (nth1 === nth3)){
// 	document.write(`are the same a number`);
// }
// else if((nth1 === nth2) || (nth2 === nth3) || (nth1 === nth3)){
// 	document.write(`are the same two a number`);
// }
// else{
// 	document.write(`Error...`);
// }
// console.log(nth1, nth2, nth3);

	// 3. 

// let userBirth = parseInt(prompt(`year of birth`));
// let userLive = prompt(`where do you live`);
// let userSport = prompt(`what is your favorite sport`);
// switch(userLive){
// 	case 'Kiev':
// 		alert(`My year of birth ${userBirth} is from capital of Ukraine and my favorite sport ${userSport}`);
// 		break;
// 	case 'Washington':
// 		alert(`My year of birth ${userBirth} is from capital of USA and my favorite sport ${userSport}`);
// 		break;
// 	case 'London':
// 		alert(`My year of birth ${userBirth} is from capital of UK and my favorite sport ${userSport}`);
// 		break;
// 	default:
// 		alert(`My year of birth ${userBirth} is from ${userLive} and my favorite sport ${userSport}`);
// 		break;
// }

	//4. Переписати код нижче з використанням конструкції switch…case
	// if(numOrStr === null) {
	// 	console.log('ви скасували')
	// } else if( numOrStr.trim() === '' ) {
	// 	console.log('Empty String');
	// } else if ( isNaN( +numOrStr ) ) {
	// 	console.log(' number is Ba_NaN')
	// } else {
	// 	console.log('OK!')
	// }



	// let numOrStr = prompt('input number or string');
	// console.log(numOrStr)

	// switch (true) {
	// 	case numOrStr === null:
	// 	  console.log('ви скасували');
	// 	  break;
	// 	case numOrStr.trim() === '':
	// 	  console.log('Empty String');
	// 	  break;
	// 	case isNaN(+numOrStr):
	// 	  console.log('number is Ba_NaN');
	// 	  break;
	// 	default:
	// 	  console.log('OK!');
	//  }
	
	
	//____________________EXTRA HOMEWORK_____________
	
	
	//1. Дано 2 числа. Визначити, яке з них більше, а яке - менше. Перевірити, чи вони однакові.

// let num1 = prompt('please, number');
// let num2 = prompt('please, number');
// if(num1 > num2){
// 	console.log(`first number big`);}
// else if(num1<num2){
// 	console.log(`last number big`);}
// else{
// 	console.log(`is equal to`)
// }

	//2. Відомі 2 відстані. Одна - в кілометрах, інша - в футах (1 фут = 0,305м, 1км = 1000м). Яка відстань менша?

// let distans1Km = parseInt(prompt('please, distans a km'));
// let distans2Fut = parseInt(prompt('please, distans a fut'));
// distans1Km = distans1Km *1000;
// console.log(`${distans1Km} - meters`);
// distans2Fut = distans2Fut*305;
// console.log(`${distans2Fut} - meters`);
// if(distans1Km > distans2Fut){
// 		console.log(`${distans1Km} - more is kilometers`);}
// 	else if(distans1Km < distans2Fut){
// 		console.log(`${distans2Fut} - more is feet`);}
// 	else{
// 		console.log(`the distances is equal!`)
// 	}


	//3. Визначити, чи є число а дільником числа b. І навпаки, якщо число а більше за b.


// let a = parseInt(prompt(`please, number`));
// let b = parseInt(prompt(`please, number`));
// if(a/b && a>b){
// 	document.write(`Bingo`);
// }
// else{
// 	document.write(`Error`);
// }

	//4. Дано число. Визначити, чи закінчується воно парною чи непарною цифрою. Вивести останню цифру в консоль.

// let value = parseInt(prompt(`enter an even number`));
// const lastDigit = value%10;

// if(lastDigit % 2 === 0){
// 	console.log(`${lastDigit} - this is even number`);
// }
// else{
// 	console.log(`${lastDigit} - this is never even number`);
// }

	//5. Дано двозначне число. Визначити, яка з його цифр більша - перша чи друга?

// let a = 68;
// console.log(`${a} - this number`);


// let last = a % 10;
// a = (a - six)/10;

// if(a > last){
// 	console.log(`${a} - big number`);
// }
// else if(a < last){
// 	console.log(`${last} - big number`);
// }
// else{
// 	console.log(`${last} = ${a} - is equal!`);
// }

	// 6. Дано тризначне число. 
// Визначити, чи є сума його цифр парною
// Визначити, чи кратна сума його цифр п’яти
// Визначити, чи є добуток його цифр більшим за 100
// Чи вірно, що всі його цифри однакові?
// Чи є серед його цифр однакові?

// let namberDigital = parseInt(prompt(`enter three values`));
// let nth3 = namberDigital % 10;
// namberDigital = (namberDigital - nth3)/10;
// let nth2 = namberDigital % 10;
// namberDigital = (namberDigital - nth2)/10;
// let nth1 = namberDigital % 10;
// namberDigital = (namberDigital - nth1)/10;
// let sum = nth1 + nth2 + nth3;
// let product = nth1 * nth2 * nth3;
// if(sum % 2 === 0){
// 	console.log(`сума цифр є парна`);
// }
// else{
// 	console.log(`сума цифр не парна`);
// }

// if(sum % 5 === 0){
// 	console.log(`сума кратна п’яти`);
// }
// else{
// 	console.log(`сума не кратна п’яти`);
// }

// if(product > 100){
// 	console.log(`добуток цифр більшим за 100`);
// }
// else{
// 	console.log(`добуток цифр меньше за 100`);
// }

// if((nth1 === nth2) && (nth2 === nth3) && (nth1 === nth3)){
// 	console.log(`всі цифри однакові`);
// }
// else{
// 	console.log(`не має трьох однакових цифр`);
// }

// if((nth1 === nth2) || (nth2 === nth3) || (nth1 === nth3)){
// 	console.log(`серед цифр є однакові`);
// }
// else{
// 	console.log(`не має жодної однакової цифри`);
// }

	//7. Визначити, чи є дане шестизначне число - дзеркальним? (напр., 123321, 147741)

	// let namberDigital = parseInt(prompt(`enter six values`));
	// let nth6 = namberDigital % 10;
	// namberDigital = (namberDigital - nth6)/10;
	// let nth5 = namberDigital % 10;
	// namberDigital = (namberDigital - nth5)/10;
	// let nth4 = namberDigital % 10;
	// namberDigital = (namberDigital - nth4)/10;
	// let nth3 = namberDigital % 10;
	// namberDigital = (namberDigital - nth3)/10;
	// let nth2 = namberDigital % 10;
	// namberDigital = (namberDigital - nth2)/10;
	// let nth1 = namberDigital % 10;
	// namberDigital = (namberDigital - nth1)/10;
	// console.log(nth1, nth2, nth3, nth4, nth5, nth6,);

	// if((nth1 === nth6) && (nth2 === nth5) && (nth3 === nth4)){
	// 	console.log(`число - дзеркальним`);
	// }
	// else{
	// 	console.log(`error`);
	// }




																	
