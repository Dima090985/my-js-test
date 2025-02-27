// 1.Створити масив, довжину та елементи якого задає користувач. Після цього, відсортувати масив за зростанням. Далі, видалити з масива елементи з 2-го по 4-й елемент. По мірі змін масива - виводити його вміст на сторінку.


// let userArr = parseInt(prompt(`enter number array`));
// let arr = [];

// for(let i = 0; i < userArr; i++){
// 	let elem = prompt(`enter element ${i + 1}`);
// 	arr.push(elem);
// }
// document.write(`<p> you enter number: ${arr}</p>`);

// const result1 = arr.sort(function(a,b){
// 	return a - b;
// })
// document.write(`<p> number sorting: ${result1} </p>`);
// const result2 = arr.splice(1, 3);


// document.write(`<p> delit element 2-4: ${arr} </p>`);


// 2. Дано массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму і кількість додатних (положительных) елементів.
// Знайти мінімальний (найменший) елемент масива і його індекс.
// Знайти максимальний (найбільший) елемент масива та його індекс
// Визначити кількість від’ємних (отрицательных) елементів масива
// Знайти кількість непарних додатних  елементів
// Знайти кількість парних додатних елементів
// Знайти суму парних додатних елементів
// Знайти суму непарних додатних елементів
// Знайти добуток всіх додатних елементів
// Змінити на 0 всі елементи масива окрім найбільшого

// const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// let sumPositive = 0;
// let countPositive = 0; 
// let countNegative = 0;
// let countOddPositive = 0;
// let countEvenPositive = 0;
// let sumEvenPositive = 0; 
// let sumOddPositive = 0;
// let productPositive = 1;


// for (let num = 0; num > arr; num++) {
//     if (num > 0) {
//         sumPositive += num;
//         countPositive++;
//         productPositive *= num;
        
//         if (num % 2 === 0) {
//             countEvenPositive++;
//             sumEvenPositive += num;
//         } else {
//             countOddPositive++;
//             sumOddPositive += num;
//         }
//     } else if (num < 0) {
//         countNegative++;
//     }
// }

// //  Вивести результати
// console.log("1. Сума додатних елементів:", sumPositive);
// console.log("2. Кількість додатних елементів:", countPositive);
// console.log("5. Кількість від’ємних елементів:", countNegative);
// console.log("6. Кількість непарних додатних елементів:", countOddPositive);
// console.log("7. Кількість парних додатних елементів:", countEvenPositive);
// console.log("8. Сума парних додатних елементів:", sumEvenPositive);
// console.log("9. Сума непарних додатних елементів:", sumOddPositive);
// console.log("10. Добуток всіх додатних елементів:", productPositive);



// 3. Дано масив об’єктів. Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів. І знайти суму всіх балансів користувачів

let users = [{index:0,isActive:true,balance:2226.60,name:"Eugenia Sawyer",gender:"female",phone:"+1 (840) 583-3207",address:"949 John Street, Rose, Puerto Rico, 1857"}, {index:1,isActive:true,balance:2613.77,name:"Pauline Gallegos",gender:"female",phone:"+1 (985) 593-3328",address:"328 Greenpoint Avenue, Torboy, North Dakota, 6857"}, {index:2,isActive:false,balance:3976.41,name:"Middleton Chaney",gender:"male",phone:"+1 (995) 591-2478",address:"807 Fleet Walk, Brutus, Arkansas, 9783"}, {index:3,isActive:true,balance:1934.58,name:"Burns Poole",gender:"male",phone:"+1 (885) 559-3422",address:"730 Seba Avenue, Osage, Alabama, 6290"}, {index:4,isActive:true,balance:3261.65,name:"Mcfadden Horne",gender:"male",phone:"+1 (942) 565-3988",address:"120 Scholes Street, Kirk, Michigan, 1018"}, {index:5,isActive:false,balance:1790.56,name:"Suzette Lewis",gender:"female",phone:"+1 (837) 586-3283",address:"314 Dunne Place, Bawcomville, Guam, 9053"}];

let balances = [2226.60, 2613.77, 3976.41, 1934.58, 3261.65, 1790.56];
let phones = [
			  "+1 (840) 583-3207", "+1 (985) 593-3328", "+1 (995) 591-2478",
			  "+1 (885) 559-3422", "+1 (942) 565-3988", "+1 (837) 586-3283"
];
		 

let totalBalance = 0;
let systemOutPrint; // Телефони з балансом > 2000$:
let sumBalances = 0;
for (let i = 0; i < balances.length; i++) {
		totalBalance += balances[i];
	if (balances[i] > 2000) {
		systemOutPrint = (phones[i]);
		console.log(`Телефони з балансом > 2000$: ${systemOutPrint} = ${balances[i]}`);
		
		}
		if(balances[i] > 2000){
			sumBalances += balances[i];
			console.log(`Загальна сума балансів: `, sumBalances );
		}
		
};










