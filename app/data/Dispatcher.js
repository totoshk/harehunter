export default class Dispatcher {
   constructor() {
      this.observers = [];
   }
   register (callback) {
      this.observers.push(callback); //принимает функции и добавляет их в массив
   }
   dispatch (action) {
      this.observers.map(
         (callback) => callback(action) //проходит по массиву и вызывает функции
      );
   }
}