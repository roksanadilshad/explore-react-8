import React, { use } from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';
import { MoneyContext } from './Familytree';

const Father = ({asset}) => {
    const [money, setMoney] = use(MoneyContext)
    //console.log(money);
    
    return (
        <div className='Family-tree'>

        <h3>Father</h3>
        <button onClick={() => setMoney(money + 10000)} >Add Money 10k</button>
        <div className='siblings'>
            <MySelf asset={asset}></MySelf>
             <Brother></Brother>
            <Sister></Sister>
        </div>
        </div>
    );
};

export default Father;