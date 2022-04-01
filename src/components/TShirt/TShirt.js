import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    console.log(props);
    const { tShirt, handleAddToCart } = props;
    const { name, price, picture } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p><small>Price:$ {price}</small></p>
            <button onClick={() => handleAddToCart(tShirt)}>ADD TO CART</button>
        </div>
    );
};

export default TShirt;