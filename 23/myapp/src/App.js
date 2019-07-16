import React, {Component} from 'react';
import Child from './Child';
import Items from './components/Items';
import './App.css';
import {num1 as x, num2 as y, test} from './module.js'

class App extends Component {
    constructor() {
        super();
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevProps, prevState);
    }

    state = {
        items: [
            {id: 1, name: "ahmed", age: 22, count: 2},
            {id: 2, name: "khaled", age: 25, count: 1},
            {id: 3, name: "hasan", age: 11, count: 3},
        ]
    }
    handleClick = (e) => {
        let items = this.state.items;
        items.push({id: 4, name: "saad", age: 44, count: 5});
        this.setState({
            items:items
        });
    }
    handleDelete = (e) => {

        this.setState({
            items: [{id: 2, name: "khaled", age: 25, count: 1}] ,
        });
    }

    render() {
        console.log("render");
        return (
            <div className="App">
                condition output
                <Items items={this.state.items}/>
                <button onClick={this.handleClick}>Add</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );

    }

}

export default App;
