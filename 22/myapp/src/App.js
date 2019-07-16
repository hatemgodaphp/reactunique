import React, {Component} from 'react';
import Child from './Child';
import Items from './components/Items';
import './App.css';
import {num1 as x, num2 as y, test} from './module.js'

class App extends Component {

    state={
        items : [
            {id:1, name:"ahmed",age:22 , count:2},
            {id:2, name:"khaled",age:25 , count:1},
            {id:3, name:"hasan",age:11 , count:3},
        ]
    }
    render() {
        return (
            <div className="App">
                condition output
                <Items items={this.state.items}/>
            </div>
        );
    }

}

export default App;
