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
                    <input type="text" onChange={this.handleChange}/>
                    <button>submit</button>
                </form>
                {this.state.name}
            </div>
        );
    }

}

export default App;
