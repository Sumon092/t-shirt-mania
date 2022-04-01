import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering option
    //1. Element variable
    //2. Ternary operator
    //3.&& operator condition true hole kaj korbe
    //4. || operator

    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one item !!! </p>
    }
    else if (cart.length === 1) {
        command = <p>Add more items....</p>
    }
    else {
        command = <p><small>Thanks for Add item</small></p>
    }
    return (
        <div>
            <h2>This cart {cart.length}</h2>
            {command}
            {
                cart.map(item => <p>{item.name}
                    <button onClick={() => handleRemoveFromCart(item)}>X</button></p>)
            }
            {
                cart.length === 0 || <h3 className='orange'>Yay, you are buying</h3>
            }
            {
                cart.length === 4 && <button className='orange'>Review Item</button>
            }
            {
                cart.length === 3 && <div className='orange'>
                    <h2>Trigonal</h2>
                    <p>3 jon k ki gift diba</p>
                </div>
            }
            {
                cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>
            }

        </div>
    );
};

export default Cart;