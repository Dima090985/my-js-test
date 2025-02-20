	//	______________________HOME WORK - PRESENTETION


// 1. Вивести числа від 20 до 30 через пробіл використовуючи крок 0,5 (20 20,5 21 21,5….)


// let start = 20;
// let end = 30;
// let value;

// for(let a = start; a < end; a++){
// 	value = a + 0.5;
// 	document.write(`${value}  `);
// }

// 2. Один доллар коштує 42 гривні. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

// let dollar = 42;
// let sum;
// for(let a = 1; a <= 100; a++){
// 	if(a % 10 === 0){
// 		sum = a*dollar
// 		document.write(`<div>${a}$ = ${sum} грн. </div>`);
// 	}
// }



// 3. Дано ціле число (N). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

// let value = parseInt(prompt(`enter number`));
// 

// for(let c = 0; c <= 100; c++){
// 	let square = c*c;
// 	if(square < value){
// 		document.write(`${square}  `);
// 	}
// }





//  4. Дано ціле число. З’ясувати, чи є воно простим
// Простим називається число, яке більше 1 та яке не має жодних інших дільників окрім 1 і самого себе). Наприклад, 5, 7, 13…



// const num = parseInt(prompt("Введіть ціле число:"));

// if (num <= 1) {
//   alert(`Число ${num} не є простим.`);
// } else {
//   let i;
//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       break; // Знайдено дільник, виходимо з циклу
//     }
//   }

//   if (i === num) {
//     alert(`Число ${num} є простим.`);
//   } else {
//     alert(`Число ${num} не є простим.`);
//   }
// }



//  5. Дано ціле число. З’ясувати, чи можна це число отримати шляхов возведення числа 3 в деяку ступінь.
// Наприклад, числа 9, 81 можно отримати, а 13 - ні

const num = parseInt(prompt("Введіть ціле число:"));

let power = 1;

while (power < num) {
  power *= 3; // Підносимо 3 до наступного ступеня
}

if (power === num) {
  alert(`Число ${num} можна отримати шляхом піднесення 3 до деякого ступеня.`);
} else {
  alert(`Число ${num} не можна отримати шляхом піднесення 3 до деякого ступеня.`);
}









//____________________EXTRA HOMEWORK_____________



//   1. Вивести на консоль в один рядок через кому числа від 10 до 20

// let start = 10;
// let end = 20

// for( let a = start; a <= end; a++){
// 	document.write(a + ',');
// }



//   2 Вивести на сторінку квадрати чисел від 10 до 20 через кому


// let startNumber = 10;

// while (startNumber <=20){
// 	let square = startNumber*startNumber;
// 	document.write(square + ',');
// 	startNumber++
// } 

//     3 Вивести таблицю множення на 7 в форматі (1*7 = 7; 2*7 = 14…)

// let multiplier2 = 7;
// let i = 1;

// while(i <= 10){
// 	let sum = i * multiplier2;
// 	document.write(`<p>${i} * ${multiplier2} = ${sum} ;</p>`);
// 	i++;
// }


// 4 Знайти суму всіх цілих чисел від 1 до 15

// let start = 1;
// let sum = 0;

// do {
// 	sum += start;
// 	start++;
// }while (start <= 15);
// document.write('Сума цілих чисел від 1 до 15,' + sum);

// 5 Знайти добуток усіх цілих чисел від 15 до 35

// let product = 1;

// for ( let start =15; start <= 35; start++){
// 	product *= start;
// }
// document.write('добуток усіх цілих чисел від 15 до 35, ' + product);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500

// let start = 1;
// let sum = 0;

// do {
// 	sum += start;
// 	start++;
// }while (start <= 500);

// let arithmeticMean = sum / start
// document.write(`Cереднє арифметичне всіх цілих чисел від 1 до 500 =  ${arithmeticMean}`);

// 7. Вивести суму тільки парних чисел в діапазоні від 30 до 80

// let sum = 0;


// for(let i = 30; i <= 80; i++){
// 	if(i % 2 === 0){
// 		sum += i;
// 	}
// }document.write(`Cумa тільки парних чисел в діапазоні від 30 до 80 = ${sum}`);

// 8. Вивести всі числа в діапазоні від 100 до 200, які кратні 3

// let sum = 0;


// for(let i = 100; i <= 200; i++){
// 	if(i % 3 === 0){
// 		document.write(`<p>${i} - числo, якe кратнe 3 </p>`);
// 	}
// }

// 9. Дано натуральне число (>0). Знайти і вивести на сторінку всі його дільники
// a .Визначити кількість його парних дільників
// b .Знайти суму його парних дільників



// do{
// 	let value = parseInt(prompt(`Введіть натуральне число`));
// }while(value < 0);

// for(let i = 1; i <= 100; i++){
// 		if(value % i === 0){
// 			document.write(`<p>${i} </p>`);
// 		}
// 1};






//  10. Вивести на сторінку повну таблицю множення від 1 до 10

// for(let a = 1; a <= 10; a++){
// 	for(let b = 1; b <= 10; b++){
// 		let result = a * b;
// 		document.write(`<div>${a} * ${b} = ${result} </div>`);
// 	}
// 	document.write(`<p></p>`);
// }

