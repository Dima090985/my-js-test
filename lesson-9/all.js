
// 9.1 Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:


let ladder = {
	step: 0, // Поточна сходинка
	up: function () {
	  this.step++;
	  return this; // Повертаємо сам об'єкт для ланцюжка викликів
	},
	down: function () {
	  this.step--;
	  return this;
	},
	showStep: function () {
	  console.log(this.step);
	  return this;
	}
 };
 
 // Використання ланцюжка викликів:
 ladder.up().up().down().showStep(); 