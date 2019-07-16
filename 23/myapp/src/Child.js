import React, {Component} from 'react';

const Child = (props) => {

    return (
        < div>
            Child Component
            <p>{props.test}</p>
        </div>
    )


}
export default Child