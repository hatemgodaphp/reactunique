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
             <Child test={this.state.name}/>
            </div>
        );
    }

}

export default App;
