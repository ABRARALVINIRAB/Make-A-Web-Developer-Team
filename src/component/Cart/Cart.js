import React from 'react';
import './Cart.css';
import '../Member/Member.css'

const Cart = (props) => {

    const { addMember } = props;

    let cost = 0;
    let name = ('');
    let singleName = ('');

    let img = ('');
    for (const member of addMember) {
        cost = cost + member.salary;
        name = name + '\n ' + member.name + ',';
        singleName = member.name;
        img = member.img;
    }
    return (
        <div className='cart-container'>
            <h1 className='text-color'> Added Members:{props.addMember.length}</h1>
            <h1 className='text-color'>Total Salary:${cost}</h1>
            <h1 className='text-color'>Total Added Members : {name}  <br /></h1>
            <h1 className='text-color'>Last Added member:  {singleName} <br />
                <img src={img} alt="" className='img' /></h1>
        </div>
    );
};

export default Cart;