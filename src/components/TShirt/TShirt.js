import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const { name, price, picture } = props.tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p><small>Price:$ {price}</small></p>
            <button>ADD TO CART</button>
        </div>
    );
};

export default TShirt;