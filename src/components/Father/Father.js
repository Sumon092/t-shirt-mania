import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../MySelf/Myself';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
    return (
        <div>
            <h2>Father</h2>
            <p>House :{house}</p>
            <div style={{ display: 'flex' }}>
                <Myself house={house}></Myself>
                <Sister house={house}></Sister>
                <Brother house={house}></Brother>
            </div>
        </div>
    );
};

export default Father;