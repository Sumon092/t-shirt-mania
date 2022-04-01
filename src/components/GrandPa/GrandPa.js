import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'

export const RingContext = createContext('ring')
const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const gift = 'Diamond Ring';

    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }


    return (
        <RingContext.Provider value={gift}>
            <div className='grandpa'>
                <h3>GrandPa</h3>
                <button onClick={handleBuyHouse}>Buy A House</button>
                <p>House:{house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>

    );
};

export default GrandPa;