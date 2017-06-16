import React from "react";

export default class Hunter extends React.Component {
    constructor(props){
        super(props),
        this.state = { 
            positionOfHare: this.props.store.position // Сюда будут передаваться данные о расположении зайца из стора
        }
        this.getPositionOfHare = this.getPositionOfHare.bind(this);
    };

    getPositionOfHare () {
        this.setState({
            positionOfHare: this.props.store.position
        })
    };

    // Подписываем охотника на отслеживание изменений позиции зайца
    componentDidMount () {
        this.props.store.addView(this.getPositionOfHare)
    };

    // отписка
    componentWillUnmount () {
        this.props.store.removeView(this.getPositionOfHare);
    }

    render() {
      return (
         <div className="">
            <div id="hunter">
                <p>Hare position is {this.state.positionOfHare.x} and {this.state.positionOfHare.y}</p>
            </div>
         </div>
      );
   }
}