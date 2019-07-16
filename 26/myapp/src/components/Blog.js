import React, {Component} from 'react';
import axios from 'axios';

class Blog extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res.data);
                this.setState({
                    users: res.data
                })
            })
    }

    render() {


        return (
            < div>
                <h2>Blog</h2>
                <p>this is Blog section</p>
                <div>
                    {this.state.users.map(user => <div>{user.name}</div> )}
                </div>
            </div>
        )
    }

}

export default Blog