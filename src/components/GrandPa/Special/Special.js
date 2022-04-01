import React, { useContext } from 'react';
import { RingContext } from '../GrandPa';

const Special = () => {
    const Ring = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Gift is {Ring}</p>
        </div>
    );
};

export default Special;