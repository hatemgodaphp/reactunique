import React, {Component} from 'react';
import Child from './Child';
// import './App.css';
import {num1 as x, num2 as y, test} from './module.js'

class App extends Component {
    state = {
        name: "ahmed",
        age: 25
    }
    change = () => {

        this.setState({
            name: "hatem"
        })
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.change}>change state</button>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
            </div>
        );
    }

}

export default App;
