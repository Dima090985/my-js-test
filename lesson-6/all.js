// 1.Створити масив, довжину та елементи якого задає користувач. Після цього, відсортувати масив за зростанням. Далі, видалити з масива елементи з 2-го по 4-й елемент. По мірі змін масива - виводити його вміст на сторінку.


let userArr = parseInt(prompt(`enter number array`));
let arr = [];

for(let i = 0; i < userArr; i++){
	let elem = prompt(`enter element ${i + 1}`);
	arr.push(elem);
}
document.write(`<p> you enter number: ${arr}</p>`);

const result1 = arr.sort(function(a,b){
	return a - b;
})
document.write(`<p> number sorting: ${result1} </p>`);
const result2 = arr.splice(1, 3);


document.write(`<p> delit element 2-4: ${arr} </p>`);


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












