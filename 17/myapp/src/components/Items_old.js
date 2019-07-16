import React, {Component} from 'react';


class Items extends Component {
    render() {
        // const id = this.props.id;
        // const name = this.props.name;
        // const age = this.props.age;
        const {id, name, age} = this.props;
        return (
            < div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{age}</p>
            </div>
        )
    }

}

export default Items