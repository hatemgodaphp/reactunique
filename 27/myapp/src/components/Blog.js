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

        const {users} = this.state;
        const userList = users.map((user) => {

            return (
                <div key={Math.random()}>
                    <div className="content">
                        <div> Name: {user.name}</div>
                        <div> User Name: {user.username}</div>
                    </div>


                </div>

            )


        })
        return (
            < div>
                <h2>Blog</h2>
                <p>this is Blog section</p>
                <div>
                    {/*{this.state.users.map(user => <div>{user.name}</div>)}*/}
                    {userList}
                </div>
            </div>
        )
    }

}

export default Blog