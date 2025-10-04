import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Father = ({asset}) => {
    return (
        <div className='Family-tree'>

        <h3>Father</h3>
        <div className='siblings'>
            <MySelf asset={asset}></MySelf>
             <Brother></Brother>
            <Sister></Sister>
        </div>
        </div>
    );
};

export default Father;