import React, {Component} from 'react';
import Child from './Child';
import Items from './components/Items';
import './App.css';
import {num1 as x, num2 as y, test} from './module.js'

class App extends Component {
    state = {
        name: "ahmed"
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = (e) => {
      e.preventDefault();
        console.log(this.state.name)
    }

    render() {
        return (
            <div className="App">
                Form part 1
                <form onSubmit={this.handleSubmit}>
                    <textarea type="text" onChange={this.handleChange}/>
                    <br/>
                    <select onChange={this.handleChange}>
                        <option value="value1">value1</option>
                        <option value="value2">value2</option>
                        <option value="value3">value3</option>
                    </select>
                    <input type="submit" value="send"/>
                </form>
                {this.state.name}
            </div>
        );
    }

}

export default App;
