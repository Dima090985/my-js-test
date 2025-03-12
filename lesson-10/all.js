
// // 10.1


// const orders = [
// 	{
// 	  user: "Alice",
// 	  items: [
// 		 { name: "Phone", price: 500 },
// 		 { name: "Case", price: 20 },
// 	  ],
// 	},
// 	{ user: "Bob", items: [{ name: "Laptop", price: 1200 }] },
// 	{ user: "Alice", items: [{ name: "Headphones", price: 100 }] },
// 	{ user: "Bob", items: [{ name: "Phone", price: 500 }] },
// 	{ user: "Charlie", items: [{ name: "Monitor", price: 300 }] },
// 	{ user: "David", items: [{ name: "Keyboard", price: 50 }] },
// 	{ user: "Emma", items: [{ name: "Mouse", price: 30 }] },
// 	{ user: "Frank", items: [{ name: "Smartwatch", price: 250 }] },
// 	{ user: "Grace", items: [{ name: "Tablet", price: 600 }] },
// 	{
// 	  user: "Hannah",
// 	  items: [
// 		 { name: "Phone", price: 500 },
// 		 { name: "Wireless Charger", price: 40 },
// 	  ],
// 	},
// 	{ user: "Ian", items: [{ name: "Gaming Chair", price: 200 }] },
// 	{ user: "Jack", items: [{ name: "Laptop Stand", price: 45 }] },
// 	{ user: "Karen", items: [{ name: "External Hard Drive", price: 120 }] },
// 	{ user: "Leo", items: [{ name: "USB-C Hub", price: 60 }] },
// 	{ user: "Mia", items: [{ name: "Mechanical Keyboard", price: 150 }] },
// 	{
// 	  user: "Nathan",
// 	  items: [{ name: "Noise Cancelling Headphones", price: 250 }],
// 	},
// 	{ user: "Olivia", items: [{ name: "Smart TV", price: 900 }] },
// 	{ user: "Paul", items: [{ name: "Router", price: 80 }] },
// 	{ user: "Quinn", items: [{ name: "Fitness Tracker", price: 130 }] },
// 	{ user: "Rachel", items: [{ name: "E-Reader", price: 180 }] },
// 	{ user: "Steve", items: [{ name: "Wireless Mouse", price: 35 }] },
// 	{ user: "Tina", items: [{ name: "Portable Speaker", price: 90 }] },
// 	{ user: "Uma", items: [{ name: "Drone", price: 1000 }] },
// 	{ user: "Victor", items: [{ name: "Graphics Tablet", price: 400 }] },
// 	{ user: "Wendy", items: [{ name: "VR Headset", price: 700 }] },
// 	{ user: "Xander", items: [{ name: "Bluetooth Headphones", price: 150 }] },
// 	{ user: "Yasmine", items: [{ name: "Gaming Mouse", price: 75 }] },
// 	{ user: "Zach", items: [{ name: "Microphone", price: 110 }] },
// 	{ user: "Alice", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Bob",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Charlie",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "David", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Emma",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Frank",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Grace", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Hannah",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Ian",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Jack", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Alice",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Bob",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Charlie", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "David",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Emma",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Frank", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Grace",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Hannah",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Ian", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Jack",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Alice",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Bob", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Charlie",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "David",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Emma", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Frank",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Grace",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Hannah", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Ian",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Jack",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Alice", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Bob",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Charlie",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "David", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Emma",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Frank",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Grace", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Hannah",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Ian",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Jack", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Alice",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Bob",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Charlie", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "David",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Emma",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Frank", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Grace",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Hannah",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Ian", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Jack",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Alice",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Bob", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Charlie",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "David",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Emma", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Frank",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Grace",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Hannah", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Ian",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Jack",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Alice", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Bob",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Charlie",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "David", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Emma",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Frank",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Grace", items: [{ name: "Wireless Keyboard", price: 80 }] },
// 	{
// 	  user: "Hannah",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 	  ],
// 	},
// 	{
// 	  user: "Ian",
// 	  items: [
// 		 { name: "Wireless Keyboard", price: 80 },
// 		 { name: "Monitor", price: 300 },
// 		 { name: "SSD 1TB", price: 150 },
// 	  ],
// 	},
// 	{ user: "Jack", items: [{ name: "Wireless Keyboard", price: 80 }] },
//  ];
 

// //  Треба проаналізувати їх, щоб дізнатись:

// //  Завдання 1. Кількість замовлень кожного користувача
 
// //  Використовуйте reduce, щоб створити об’єкт:
// //  { Alice: 2, Bob: 2, Charlie: 1 }.
 
// //  Використовуйте Map:
// //  Замість об’єкту використовуємо Map, де ключ - ім’я користувача, а значення - кількість його замовлень
 
// //  Map { 'Alice' => 2, 'Bob' => 2, 'Charlie' => 1 }


// const orderCounts = orders.reduce((acc, order) => {
// 	acc[order.user] = (acc[order.user] || 0) + 1;
// 	return acc;
// }, {});

// console.log(orderCounts);

// const orderCountsMap = orders.reduce((acc, order) => {
// 	acc.set(order.user, (acc.get(order.user) || 0) + 1);
// 	return acc;
// }, new Map());
// console.log(orderCountsMap);



 
// //  Завдання 2. Сума замовлень кожного користувача
 
// //  Використати map + reduce, щоб створити об’єкт 
// //  { Alice: 620, Bob: 1700, Charlie: 300 }.
 
// //  Використовуємо Map, де ключ - им’я користувача, а значення - сума його покупок
// //  Map { 'Alice' => 620, 'Bob' => 1700, 'Charlie' => 300 }

// const totalSpent = orders.reduce((acc, order) => {
// 	const total = order.items.reduce((sum, item) => sum + item.price, 0);
// 	acc[order.user] = (acc[order.user] || 0) + total;
// 	return acc;
// }, {});

// console.log(totalSpent);

// const totalSpentMap = orders.reduce((acc, order) => {
// 	const total = order.items.reduce((sum, item) => sum + item.price, 0);
// 	acc.set(order.user, (acc.get(order.user) || 0) + total);
// 	return acc;
// }, new Map());

// console.log(totalSpentMap);




 
// //  Завдання  3. Унікальні товари
 
// //  Створюємо Set, щоб отримати унікальні товари
 
// // 	 Set { 'Phone', 'Case', 'Laptop', 'Headphones', 'Monitor' }



// const uniqueItems = new Set(
// 	orders.flatMap(order => order.items.map(item => item.name))
// );

// console.log(uniqueItems);
 
// //  Завдання 4. Хто витратив більше за всіх?
 
// //  Використовуйте reduce, щоб знайти користувача з найбільшими витратами.
 
// // 	 "Bob витратив більше за всіх: $1700"

// const topSpender = Object.entries(totalSpent).reduce((max, user) =>
// 	user[1] > max[1] ? user : max
// );

// console.log(${topSpender[0]} витратив більше за всіх: $${topSpender[1]});



//10.2 Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Виведе: [2, 4, 6, 8, 10]


//10.3 Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.
// Створюємо об'єкт "Контактна книга"
// const contactBook = {
// 	contacts: [
// 		 {
// 			  name: "Alice",
// 			  phone: "123-456-789",
// 			  email: "alice@gmail.com"
// 		 },
// 		 {
// 			  name: "Bob",
// 			  phone: "987-654-321",
// 			  email: "bob@gmail.com"
// 		 }
// 	],

// 	// Метод для пошуку контакту за ім'ям
// 	findContactByName: function(name) {
// 		 return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
// 	},

// 	// Метод для додавання нового контакту
// 	addContact: function(name, phone, email) {
// 		 const newContact = { name, phone, email };
// 		 this.contacts.push(newContact);
// 	}
// };

// // Приклад використання методів:
// console.log(contactBook.findContactByName("Alice"));  // Пошук контакту за ім'ям
// contactBook.addContact("Charlie", "555-123-456", "charlie@example.com");  // Додавання нового контакту
// console.log(contactBook.contacts);  // Перевірка масиву контактів після додавання нового
