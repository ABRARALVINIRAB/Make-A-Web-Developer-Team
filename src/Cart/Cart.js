import React from 'react';

const Cart = (props) => {

    // console.log(props)
    return (
        <div>
            <h1>Players Added:{props.addmember.length}</h1>
            <h1>Total Cost:</h1>
            <h1>Name:</h1>
        </div>
    );
};

export default Cart;