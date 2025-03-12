// 11.1 Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

// function generatePifagorTable(size) {
// 	const table = document.createElement("table");

// 	for (let i = 0; i <= size; i++) {
// 		 const row = document.createElement("tr");

// 		 for (let j = 0; j <= size; j++) {
// 			  const cell = i === 0 || j === 0 ? document.createElement("th") : document.createElement("td");

// 			  if (i === 0 && j === 0) {
// 					cell.textContent = "×";
// 			  } else if (i === 0) {
// 					cell.textContent = j;
// 			  } else if (j === 0) {
// 					cell.textContent = i;
// 			  } else {
// 					cell.textContent = i * j;
// 			  }

// 			  row.appendChild(cell);
// 		 }

// 		 table.appendChild(row);
// 	}

// 	document.getElementById("pifagor-table").appendChild(table);
// }

// generatePifagorTable(10);






// 11.2 Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір

let isOriginalColor = true;

function toggleColor() {
	 const textElement = document.getElementById("text");
	 
	 if (isOriginalColor) {
		  textElement.style.color = "red"; // Новий колір
	 } else {
		  textElement.style.color = "black"; // Початковий колір
	 }
	 
	 isOriginalColor = !isOriginalColor; // Перемикаємо стан
}





// 11.3 Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення, отримане випадковим чином (Math.random)


// function getRandomImage() {
// 	const imageCount = 9; // Кількість зображень у папці
// 	const randomNumber = Math.floor(Math.random() * imageCount) + 1; // Генеруємо число від 1 до 9
// 	const imagePath = images/${randomNumber}.jpg; // Шлях до зображення (папка "images")

// 	document.getElementById("randomImage").src = imagePath;
// }

// getRandomImage();
