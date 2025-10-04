import React from 'react';
import Cousin from './GrandParent/Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <div className='siblings'>
                <Cousin name='Jodu'></Cousin>
                <Cousin name='Modu'></Cousin>
                <Cousin name='Kodu'></Cousin>
            </div>
        </div>
    );
};

export default Uncle;