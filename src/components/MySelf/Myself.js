import React from 'react';
import Special from '../GrandPa/Special/Special';

const Myself = ({ house, gift }) => {
    return (
        <div>
            <h2>Its me</h2>
            <p>House:{house}</p>
            <Special ></Special>
        </div>
    );
};

export default Myself;