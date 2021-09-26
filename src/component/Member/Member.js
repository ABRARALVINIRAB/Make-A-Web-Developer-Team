import React from 'react';
import './Member.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Member = (props) => {

    

    const { img, name, role, age, country, salary } = props.member;
    const element = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className='member-container'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h4>Role:{role}</h4>
            <h4>Age:{age}</h4>
            <h4>Country:{country}</h4>
            <h3>Salary:${salary}</h3>
            <button onClick={()=>props.handleAddToMember(props.member)}

                className='cart-btn' > {element} Add To Cart</button>

        </div>
    );
};

export default Member;