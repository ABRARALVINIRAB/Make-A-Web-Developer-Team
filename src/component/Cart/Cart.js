import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { addMember } = props;

    let cost = 0;
    let name = ('');

    let img = ('');
    for (const member of addMember) {
        cost = cost + member.salary;
        name = name + '\n' + member.name;
        img = img + member.img;

    }
    return (
        <div className='cart-container'>
            <h1> Added Members:{props.addMember.length}</h1>
            <h1>Total Salary:${cost}</h1>
            <h1>Name:{name} </h1>
        </div>
    );
};

export default Cart;