import React from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import './Home.css'
import TShirt from '../TShirt/TShirt'

const Home = () => {
    const [tShirts, setTShirts] = useTShirts()
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>

    );
};

export default Home;