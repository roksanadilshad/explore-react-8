import React from 'react';
import Cousin from './GrandParent/Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <div className='siblings'>
                <Cousin name ='Rahim'></Cousin>
                <Cousin name ='Kahim'></Cousin>
            </div>
        </div>
    );
};

export default Aunt;