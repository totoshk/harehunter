export default class ActionCreator {
    constructor(dispatcher) {
        this.dispatcher = dispatcher
    }

    move(newPos) { // сюда передаются значения из view и записываются в объект позишен, после чего этот метод передается в качестве аргумента в стор (payload)
        this.dispatcher.dispatch ({
            type: 'MOVE',
            position: {x: newPos.x, y: newPos.y}
        })
    }
}