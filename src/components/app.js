import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: "",
            equation: "",
            result:""
        }
        this.numberClick = this.numberClick.bind(this)
        this.setOperator = this.setOperator.bind(this)
        this.clearNumbers = this.clearNumbers.bind(this)
    }
    numberClick(event) {
        var equation = this.state.equation.concat(event.target.value);
        this.setState({
            // currentNumber: this.state.currentNumber.concat(event.target.value),
            // equation: "",
            equation: this.state.equation.concat(event.target.value),
            result:  this.state.equation.concat(event.target.value)
        })
        console.log(this.state.currentNumber)
    }
    setOperator(event) {
        if (event.target.value == "=") {
            var result = (eval(this.state.result)).toString();
            this.setState({
                equation : this.state.equation.concat(event.target.value),
                result: result,
                // currentNumber : (eval(this.state.currentNumber)).toString(),
                // equation : (eval(this.state.equation)).toString()
            })
        } else if (event.target.value == "--") {
            var str = (this.state.equation).toString()
            this.setState({
             equation: str.substring(0, str.length()-1)
            })
        } else {
            this.setState({
                // currentNumber: "",
                equation: this.state.equation.concat(event.target.value)

            })
        }
    }
    // backSpace(event){
    //     if
    // }
    clearNumbers(event) {
        this.setState({currentNumber: "", equation: "", result: ""})
    }
    render() {
        return (
            <div className="calculator">

                <div className="screen">
                    <div>{this.state.equation}</div>
                    <div>{this.state.result}</div>
                </div>

                <div className="buttons">
                    <button className="clear" onClick={this.clearNumbers} value="">C</button>
                    <button className="backspace" onClick={this.setOperator} value="--">⬅</button>
                    <button className="sign" onClick={this.setOperator} value="-+">±</button>
                    <button className="divclassNamee" onClick={this.setOperator} value="/">÷</button>
                    <button className="digit" onClick={this.numberClick} value="7">7</button>
                    <button className="digit" onClick={this.numberClick} value="8">8</button>
                    <button className="digit" onClick={this.numberClick} value="9">9</button>
                    <button className="multiply" onClick={this.setOperator} value="*">×</button>
                    <button className="digit" onClick={this.numberClick} value="4">4</button>
                    <button className="digit" onClick={this.numberClick} value="5">5</button>
                    <button className="digit" onClick={this.numberClick} value="6">6</button>
                    <button className="minus" onClick={this.setOperator} value="-">-</button>
                    <button className="digit" onClick={this.numberClick} value="1">1</button>
                    <button className="digit" onClick={this.numberClick} value="2">2</button>
                    <button className="digit" onClick={this.numberClick} value="3">3</button>
                    <button className="plus" onClick={this.setOperator} value="+">+</button>
                    <button className="digit" onClick={this.numberClick} value="0">0</button>
                    <button className="digit" onClick={this.numberClick} value=".">.</button>
                    <button className="equal" onClick={this.setOperator} value="=">=</button>
                </div>
            </div>
        );
    }
}
