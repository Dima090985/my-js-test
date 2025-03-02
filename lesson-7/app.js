// 1. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// let inputString = prompt("Введіть рядок:");
// let charsToRemove = prompt("Введіть символи для видалення (без пробілів)").split('');


// function removeChars(str, charsToRemove) {
// 	return str.split('').filter(char => !charsToRemove.includes(char)).join('');
// }

// let result = removeChars(inputString, charsToRemove);
// console.log("Результат:", result);

// 2. Дано масив з елементами різних типів, які вводить користувач. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.


function averageOfNumbers(arr) {
	let sum = 0; // Змінна для збереження суми чисел
	let count = 0; // Лічильник числових елементів
	
	
	// Перебираємо всі елементи масиву
	for (let i = 0; i < arr.length; i++) {
		 if (typeof arr[i] === 'number') { // Перевіряємо, чи елемент - число
			  sum += arr[i]; // Додаємо число до суми
			  count++; // Збільшуємо лічильник чисел
		 }
	}

	// Якщо чисел немає, повертаємо 0, інакше обчислюємо середнє
	return count === 0 ? 0 : sum / count;
}


let userInput = prompt(`Введіть eлементи масиву через кому`);
let userArray = userInput.split(','); 
let result = averageOfNumbers(userArray); // Викликаємо функцію
console.log(result); // Виводимо результат в консоль





/* 3. Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наприклад:

const array = [1, 3, 4, 6, 2, 5, 7];*/
// const array = [1, 3, 4, 6, 2, 5, 7];
// const itemToRemove = 4;


// function removeElement(array, item) {
// 	for(let i = 0; i < array.length; i++){
// 		if(i === itemToRemove){
// 			array.splice(itemToRemove[i])
// 			console.log(array)
// 		}
// 	}
		
// }
// const newArray = removeElement(array, itemToRemove);
// console.log(newArray);  // [1, 3, 6, 2, 5, 7]



