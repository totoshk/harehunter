export default class Store {
    constructor(dispatcher) {
        this.dispatcher = dispatcher,
        this.position = {x: 10, y:40},
        this.viewStore = [],

        this.dispatcher.register(
            (payload) => {
                switch(payload.type){
                    case "MOVE":
                        this.position = payload.position;
                        this.updateView();
                        break;
                }
            }
        )
    }

    addView(callback) {
        this.viewStore.push(callback) //добавляем в массив переданную функцию колбэк
    };

    deleteView(callback) {
      let index = this.views.indexOf(callback); // удаляем из массива функцию
      this.views.splice(index, 1);
   };

   updateView() {
        this.viewStore.map((callback) => callback()) // обходим массив и вызываем функции
   };
}