import React from "react";

export default class Hare extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            position: this.props.store.position
        }

        this.changePosition = this.changePosition.bind(this);
        this.move = this.move.bind(this);
    };

    changePosition() {
        this.setState({
            position: this.props.store.position
        })
    };

    // Создадим функцию, которая будет возвращать рандомное значение для x и для у

    randomPosition() {
        let randomX = Math.ceil(Math.random() * 950);
        let randomY = Math.ceil(Math.random() * 450);

        return {
            x: randomX,
            y: randomY
        }
    };

    // Как только компонент отрендерился и появился на странице,
    // необходимо 1 раз передать в наш store метод, который обновляет значение state
    // и передать в метод move новое значение newPos
    componentDidMount() {
        this.props.store.addView(this.changePosition);
        let moveInterval = setInterval(() => { // назначим setInterval, чтобы newPos обновлялся с периодичностью в 1 сек
            let newPos = this.randomPosition();
            this.move(newPos);
        }, 1000)
    };

    componentWillUnmount() {
        this.props.store.deleteView(this.changePosition)
    };

    // Создадим метод move, который будет принимать изменияемое значение position
    // и в последствии будет передаваться в actionsCreator
    move(newPos) {
        this.props.actions.move(newPos)
    };


    render(){
        return (
            <div className = 'field'>
                <div id="hare" style={{top: this.state.position.y + 'px', left: this.state.position.x + 'px'}}></div>
            </div>
        )
    }
}