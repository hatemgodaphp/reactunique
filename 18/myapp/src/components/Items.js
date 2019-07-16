import React, {Component} from 'react';


class Items extends Component {
    render() {

        const {items} = this.props;
        const theItems = items.map( (item) => {
            return (
                <div key={Math.random()}>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.age}</div>
                    <div>__________</div>
                </div>

            )
        })
        return (
            < div>
                {theItems}
            </div>
        )
    }

}

export default Items