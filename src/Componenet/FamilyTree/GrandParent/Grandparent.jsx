import React from 'react';
import Father from '../Father';
import Aunt from '../Aunt';
import Uncle from '../Uncle';
import './Grandparent.css'

const GrandParent = () => {
    return (
        <div className='Family-tree'>
            <h2>Grand Parent</h2>
            <div className='siblings'>
                <Father></Father>
            <Aunt></Aunt>
            <Uncle></Uncle>
            </div>
        </div>
    );
};

export default GrandParent;