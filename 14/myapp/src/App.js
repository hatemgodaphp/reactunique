import React, {Component} from 'react';
import Child from './Child';
// import './App.css';
import {num1 as x,num2 as y,test} from './module.js'
class App extends Component{
state ={
    name:"hatem"
}

    handleClick = () =>  console.log(this.state.name);
    handleMouseMove = ()  => console.log('mouse move');
    render() {
        return (
            <div className="App">
            <Child/>
            <button onClick={this.handleClick}>Click</button>
            <button onMouseMove={this.handleMouseMove}>MouseMove</button>
        </div>
    );
    }

}

export default App;
