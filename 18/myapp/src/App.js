import React, {Component} from 'react';
import Child from './Child';
import Items from './components/Items';
import './App.css';
import {num1 as x, num2 as y, test} from './module.js'

class App extends Component {
state={
    items : [
        {id:1, name:"ahmed",age:22},
        {id:2, name:"khaled",age:25},
    ]
}

    render() {
        return (
            <div className="App">
            List Items
                <Items items={this.state.items}/>
                {/*<Items id="1" name="ahmed" age="22"/>*/}
                {/*<Items id="2" name="hatem" age="11"/>*/}
            </div>
        );
    }

}

export default App;
