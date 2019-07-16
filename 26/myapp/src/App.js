import React, {Component} from 'react';
// import Nav from './components/Nav';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
// import Items from './components/Items';
import { BrowserRouter , Route  } from "react-router-dom";
import './App.css';


class App extends Component {


    render() {

        return (
            <BrowserRouter>
                <div className="App">

                    <Nav/>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
                </div>
            </BrowserRouter>

        );

    }

}

export default App;
